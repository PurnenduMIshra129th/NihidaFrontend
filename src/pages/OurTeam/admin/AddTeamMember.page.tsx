import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchAllTeamMember } from "../../../contexts/slice/getAllTeamMember.slice";
import { getUser } from "../../../contexts/slice/getUser.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import {
  ITeamMemberApiPayload,
  ITeamMemberApiResponse,
} from "../../../types/api/api.type";
import { parseCommaSeparatedString } from "../../../utils/util";

const initialValues: ITeamMemberApiPayload = {
  name: "",
  designation: "",
  bio: "",
  contact: {
    email: "",
    phone: "",
  },
  socials: {
    linkedin: "",
    twitter: "",
  },
  focusArea: "other",
  dateJoined: "", // ISO format date string
  tags: [],
  visibility: "internal",
  createdBy: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  designation: Yup.string().required("Designation is required"),
  bio: Yup.string().required("Bio is required"),

  contact: Yup.object({
    email: Yup.string().email("Must be a valid email").nullable(),
    phone: Yup.string().nullable(),
  }),

  socials: Yup.object({
    linkedin: Yup.string().url("Must be a valid URL").nullable(),
    twitter: Yup.string().url("Must be a valid URL").nullable(),
  }),

  focusArea: Yup.mixed<ITeamMemberApiPayload["focusArea"]>()
    .oneOf(["education", "health", "environment", "livelihood", "other"])
    .required("Focus area is required"),

  dateJoined: Yup.date()
    .required("Date joined is required")
    .typeError("Invalid date format"),

  tags: Yup.array().of(Yup.string()),

  visibility: Yup.mixed<ITeamMemberApiPayload["visibility"]>()
    .oneOf(["public", "internal"])
    .required("Visibility is required"),

  createdBy: Yup.string().nullable(),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AddTeamMemberPage() {
  const userDetails = useSelector(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (values: ITeamMemberApiPayload) => {
    values.createdBy = userDetails?._id;
    await apiRequest<ITeamMemberApiResponse, ITeamMemberApiPayload>(
      "/teamMember/createTeamMember",
      "POST",
      values,
      true
    );
    await dispatch(fetchAllTeamMember());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Add Team Member
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
            <FormikInput label="Name" name="name" required />
            <FormikInput label="Designation" name="designation" required />
            <FormikInput label="Bio" name="bio" isTextArea rows={6} required />

            {/* Contact Info */}
            <FormikInput label="Email (optional)" name="contact.email" />
            <FormikInput label="Phone (optional)" name="contact.phone" />

            {/* Social Media */}
            <FormikInput
              label="LinkedIn URL (optional)"
              name="socials.linkedin"
            />
            <FormikInput
              label="Twitter URL (optional)"
              name="socials.twitter"
            />

            {/* Focus Area */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Focus Area <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="focusArea"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="education">Education</option>
                <option value="health">Health</option>
                <option value="environment">Environment</option>
                <option value="livelihood">Livelihood</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="focusArea"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Date Joined */}
            <FormikInput
              label="Date Joined"
              name="dateJoined"
              type="date"
              required
            />

            {/* Tags */}
            <FormikInput
              label="Tags (comma-separated)"
              name="tags"
              placeholder="e.g. education, outreach"
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
                name="Submit Team Member"
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
