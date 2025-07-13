import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchAllGallery } from "../../../contexts/slice/getAllGallery.slice";
import { getUser } from "../../../contexts/slice/getUser.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import { IGalleryApiPayload,IGalleryApiResponse } from "../../../types/api/api.type";

const initialValues: IGalleryApiPayload = {
  title: "",
  category: "event",
  description: "",
  date: "",
  visibility: "internal",
  tags: [],
  highlighted: false,
  uploadedBy: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),

  category: Yup.mixed<
    "event" | "impact" | "volunteer" | "daily-life" | "community" | "other"
  >()
    .oneOf(["event", "impact", "volunteer", "daily-life", "community", "other"])
    .required("Category is required"),

  description: Yup.string(),

  date: Yup.date()
    .required("Date is required")
    .typeError("Invalid date format"),

  visibility: Yup.mixed<"public" | "internal">()
    .oneOf(["public", "internal"])
    .required("Visibility is required"),

  tags: Yup.array().of(Yup.string()),

  highlighted: Yup.boolean(),

  uploadedBy: Yup.string(),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AddGalleryPage() {
  const userDetails = useSelector(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (values: IGalleryApiPayload) => {
    values.uploadedBy = userDetails?._id;
    await apiRequest<IGalleryApiResponse, IGalleryApiPayload>(
      "/gallery/createGallery",
      "POST",
      values,
      true
    );
    await dispatch(fetchAllGallery());
  };

  return (
<div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
  <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
    Add Gallery
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
            <option value="event">Event</option>
            <option value="impact">Impact</option>
            <option value="volunteer">Volunteer</option>
            <option value="daily-life">Daily Life</option>
            <option value="community">Community</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage
            name="category"
            component="div"
            className="text-xs text-red-500 mt-1"
          />
        </div>

        <FormikInput
          label="Description"
          name="description"
          isTextArea
          rows={5}
        />

        <FormikInput label="Date" name="date" type="date" required />

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

        {/* Tags */}
        <FormikInput
          label="Tags (comma-separated)"
          name="tags"
          placeholder="e.g. celebration, outreach"
          transformOnBlur={(val) =>
            val.split(",").map((tag) => tag.trim()).filter(Boolean)
          }
        />

        {/* Highlighted */}
        <div className="flex items-center gap-2">
          <Field type="checkbox" name="highlighted" id="highlighted" />
          <label htmlFor="highlighted" className="text-sm text-gray-700">
            Highlight this gallery
          </label>
        </div>

        <div className="pt-6">
          <Button
            name="Submit Gallery"
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
