import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate, useParams } from "react-router";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchAllGallery } from "../../../contexts/slice/getAllGallery.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import {
  IGalleryApiPayload,
  IGalleryApiResponse,
} from "../../../types/api/api.type";
import { formatDateForInput } from "../../../utils/util";

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
export default function EditGalleryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [initialValues, setInitialValues] = useState<IGalleryApiPayload | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const res = await apiRequest<IGalleryApiResponse, IGalleryApiPayload>(
        `/gallery/getgalleryById/${id}`,
        "GET",
        undefined,
        true
      );
      if (res && res.statusCode === 1) {
        const formattedData = {
          ...res.data,
          date: formatDateForInput(`${res?.data?.date}`),
        };
        setInitialValues(formattedData);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (values: IGalleryApiPayload) => {
    if (id) {
      await apiRequest<IGalleryApiResponse, IGalleryApiPayload>(
        `/gallery/updateGallery/${id}`,
        "PUT",
        values,
        true
      );
      await dispatch(fetchAllGallery());
      navigate("/admin/gallery-dashboard");
    }
  };
  if (!initialValues) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Edit Gallery
      </h1>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
                val
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean)
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
                name="Update Gallery"
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
