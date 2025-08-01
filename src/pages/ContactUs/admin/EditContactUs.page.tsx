import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FormikInput from "../../../components/Input/FormikInput";
import { apiRequest } from "../../../services/apiService";
import {
  IContactUsApiPayload,
  IContactUsApiResponse,
} from "../../../types/api/api.type";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-()\s]*$/, "Invalid phone number")
    .nullable(),
  message: Yup.string().required("Message is required"),
  subject: Yup.string().nullable(),
  type: Yup.mixed<IContactUsApiPayload["type"]>()
    .oneOf(["volunteer", "donation", "partnership", "general", "feedback"])
    .required("Type is required"),
  responded: Yup.boolean().default(false),
  createdBy: Yup.string().nullable(),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function EditContactUsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] =
    useState<IContactUsApiPayload | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const res = await apiRequest<IContactUsApiResponse, IContactUsApiPayload>(
        `/contactUs/getContactUsById/${id}`,
        "GET",
        undefined,
        true
      );
      if (res && res.statusCode === 1) {
        setInitialValues(res?.data);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (values: IContactUsApiPayload) => {
    if (id) {
      await apiRequest<IContactUsApiResponse, IContactUsApiPayload>(
        `/contactUs/updateContactUs/${id}`,
        "PUT",
        values,
        true
      );
      navigate("/admin/contactUs-dashboard");
    }
  };
  if (!initialValues) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Edit ContactUs
      </h1>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form className="space-y-6">
            {/* Full Name (disabled) */}
            <FormikInput label="Full Name" name="fullName" disabled required />

            {/* Email (disabled) */}
            <FormikInput
              label="Email"
              name="email"
              type="email"
              disabled
              required
            />

            {/* Phone (optional but editable) */}
            <FormikInput label="Phone" name="phone" />

            {/* Subject (editable if needed) */}
            <FormikInput label="Subject" name="subject" />

            {/* Message (disabled) */}
            <FormikInput
              label="Message"
              name="message"
              isTextArea
              rows={6}
              disabled
              required
            />

            {/* Type (disabled) */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Type
              </label>
              <Field
                as="select"
                name="type"
                disabled
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm cursor-not-allowed"
              >
                <option value="volunteer">Volunteer</option>
                <option value="donation">Donation</option>
                <option value="partnership">Partnership</option>
                <option value="general">General</option>
                <option value="feedback">Feedback</option>
              </Field>
            </div>

            {/* Responded (admin-controlled toggle) */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-semibold text-gray-800">
                Responded
              </label>
              <Field type="checkbox" name="responded" className="h-4 w-4" />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <Button
                name="Update ContactUs"
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
