import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FormikInput from "../../../components/Input/FormikInput";
import { apiRequest } from "../../../services/apiService";
import {
  IOurPartnerApiPayload,
  IOurPartnerApiResponse,
} from "../../../types/api/api.type";
import {
  formatDateForInput,
  parseCommaSeparatedString,
} from "../../../utils/util";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  website: Yup.string().url("Must be a valid URL").nullable(),

  type: Yup.mixed<IOurPartnerApiPayload["type"]>()
    .oneOf([
      "funder",
      "collaborator",
      "institutional",
      "community",
      "strategic",
    ])
    .required("Partner type is required"),

  focusAreas: Yup.array().of(Yup.string()),
  visibility: Yup.mixed<IOurPartnerApiPayload["visibility"]>()
    .oneOf(["public", "internal"])
    .required("Visibility is required"),

  contactPerson: Yup.object({
    name: Yup.string().nullable(),
    email: Yup.string().email("Must be a valid email").nullable(),
    phone: Yup.string().nullable(),
  }),

  partnershipStart: Yup.string()
    .nullable()
    .test(
      "valid-date",
      "Invalid start date",
      (value) => !value || !isNaN(Date.parse(value))
    ),

  partnershipEnd: Yup.string()
    .nullable()
    .test(
      "valid-date",
      "Invalid end date",
      (value) => !value || !isNaN(Date.parse(value))
    ),

  tags: Yup.array().of(Yup.string()),
  createdBy: Yup.string().nullable(),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function EditOurPartnerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] =
    useState<IOurPartnerApiPayload | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const res = await apiRequest<
        IOurPartnerApiResponse,
        IOurPartnerApiPayload
      >(`/partner/getPartnerById/${id}`, "GET", undefined, true);
      if (res && res.statusCode === 1) {
        const formattedData = {
          ...res.data,
          partnershipEnd: formatDateForInput(res?.data?.partnershipEnd || ""),
          partnershipStart: formatDateForInput(
            res?.data?.partnershipStart || ""
          ),
        };
        setInitialValues(formattedData);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (values: IOurPartnerApiPayload) => {
    if (id) {
      await apiRequest<IOurPartnerApiResponse, IOurPartnerApiPayload>(
        `/partner/updatePartner/${id}`,
        "PUT",
        values,
        true
      );
      navigate("/admin/ourPartner-dashboard");
    }
  };
  if (!initialValues) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Edit OurPartner
      </h1>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form className="space-y-6">
            <FormikInput label="Name" name="name" required />
            <FormikInput
              label="Description"
              name="description"
              isTextArea
              rows={4}
              required
            />
            <FormikInput label="Website (optional)" name="website" />

            {/* Partner Type */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Partner Type <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="type"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="funder">Funder</option>
                <option value="collaborator">Collaborator</option>
                <option value="institutional">Institutional</option>
                <option value="community">Community</option>
                <option value="strategic">Strategic</option>
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Focus Areas */}
            <FormikInput
              label="Focus Areas (comma-separated)"
              name="focusAreas"
              placeholder="e.g. livelihoods, water, education"
              transformOnBlur={(val) => parseCommaSeparatedString(val)}
            />

            {/* Contact Person */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-800">
                Contact Person
              </label>
              <FormikInput label="Name" name="contactPerson.name" />
              <FormikInput label="Email" name="contactPerson.email" />
              <FormikInput label="Phone" name="contactPerson.phone" />
            </div>

            {/* Partnership Dates */}
            <FormikInput
              label="Start Date"
              name="partnershipStart"
              type="date"
            />
            <FormikInput label="End Date" name="partnershipEnd" type="date" />

            {/* Tags */}
            <FormikInput
              label="Tags (comma-separated)"
              name="tags"
              placeholder="e.g. innovation, community-driven"
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
                name="Update OurPartner"
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
