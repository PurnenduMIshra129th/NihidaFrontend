import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchAllVideo } from "../../../contexts/slice/getAllVideo.slice";
import { getUser } from "../../../contexts/slice/getUser.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import {
  IVideoApiPayload,
  IVideoApiResponse,
} from "../../../types/api/api.type";
import { parseCommaSeparatedString } from "../../../utils/util";

const initialValues: IVideoApiPayload = {
  title: "",
  description: "",
  category: "testimonial",
  date: "",
  tags: [],
  visibility: "internal",
  highlighted: false,
  uploadedBy: "",
  youtubeUrl: "",
};
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),

  youtubeUrl: Yup.string()
    .url("Must be a valid URL")
    .required("YouTube URL is required"),

  description: Yup.string(),

  category: Yup.mixed<IVideoApiPayload["category"]>()
    .oneOf(["testimonial", "project", "awareness", "media", "event", "other"])
    .required("Category is required"),

  date: Yup.date()
    .required("Date is required")
    .typeError("Invalid date format"),

  tags: Yup.array().of(Yup.string()),

  visibility: Yup.mixed<IVideoApiPayload["visibility"]>()
    .oneOf(["public", "internal"])
    .required("Visibility is required"),

  highlighted: Yup.boolean(),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AddVideoPage() {
  const userDetails = useSelector(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (values: IVideoApiPayload) => {
    values.uploadedBy = userDetails?._id;
    await apiRequest<IVideoApiResponse, IVideoApiPayload>(
      "/video/createVideo",
      "POST",
      values,
      true
    );
    await dispatch(fetchAllVideo());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Add Video
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

            <FormikInput
              label="Description (optional)"
              name="description"
              isTextArea
              rows={5}
            />

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
                <option value="testimonial">Testimonial</option>
                <option value="project">Project</option>
                <option value="awareness">Awareness</option>
                <option value="media">Media</option>
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

            <FormikInput label="youtube Url" name="youtubeUrl" required />

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

            {/* Highlighted */}
            <div className="flex items-center gap-2">
              <Field
                type="checkbox"
                name="highlighted"
                id="highlighted"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <label htmlFor="highlighted" className="text-sm text-gray-800">
                Highlight this video
              </label>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <Button
                name="Submit Video"
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
