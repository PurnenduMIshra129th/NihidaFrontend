import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchAllNews } from "../../../contexts/slice/getAllNews.slice";
import { getUser } from "../../../contexts/slice/getUser.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import { INewsApiPayload, INewsApiResponse } from "../../../types/api/api.type";
import { parseCommaSeparatedString } from "../../../utils/util";

const initialValues: INewsApiPayload = {
  title: "",
  summary: "",
  content: "",
  source: "",
  url: "",
  category: "press-release",
  date: "",
  tags: [],
  visibility: "internal",
  createdBy: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  summary: Yup.string().required("Summary is required"),
  content: Yup.string().required("Content is required"),

  source: Yup.string().url("Must be a valid URL").nullable(),
  url: Yup.string().url("Must be a valid URL").nullable(),

  category: Yup.mixed<INewsApiPayload["category"]>()
    .oneOf(["press-release", "impact", "announcement", "event", "other"])
    .required("Category is required"),

  date: Yup.date()
    .required("Date is required")
    .typeError("Invalid date format"),

  tags: Yup.array().of(Yup.string()),

  visibility: Yup.mixed<INewsApiPayload["visibility"]>()
    .oneOf(["public", "internal"])
    .required("Visibility is required"),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AddNewsPage() {
  const userDetails = useSelector(getUser); 
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (values: INewsApiPayload) => {
    values.createdBy = userDetails?._id;
    await apiRequest<INewsApiResponse, INewsApiPayload>(
      "/news/createNews",
      "POST",
      values,
      true
    );
    await dispatch(fetchAllNews());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Add News Article
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await handleSubmit(values);
          actions.resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form className="space-y-6">
            <FormikInput label="Title" name="title" required />
            <FormikInput label="Summary" name="summary" required />
            <FormikInput
              label="Content"
              name="content"
              isTextArea
              rows={6}
              required
            />
            <FormikInput label="Source (optional)" name="source" />
            <FormikInput label="URL (optional)" name="url" />

            {/* Category */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Category <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="category"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="press-release">Press Release</option>
                <option value="impact">Impact</option>
                <option value="announcement">Announcement</option>
                <option value="event">Event</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Date */}
            <FormikInput label="Date" name="date" type="date" required />

            {/* Tags */}
            <FormikInput
              label="Tags (comma-separated)"
              name="tags"
              placeholder="e.g. education, health"
              transformOnBlur={(val) => parseCommaSeparatedString(val)}
            />

            {/* Visibility */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Visibility <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="visibility"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="internal">Internal</option>
                <option value="public">Public</option>
              </Field>
              <ErrorMessage
                name="visibility"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <Button
                name="Submit News"
                className="bg-custom_orange_1 text-white px-8 py-3 w-full"
                onClick={handleSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
