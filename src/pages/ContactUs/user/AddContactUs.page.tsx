import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import { getUser } from "../../../contexts/slice/getUser.slice";
import { apiRequest } from "../../../services/apiService";
import {
  IContactUsApiPayload,
  IContactUsApiResponse,
} from "../../../types/api/api.type";

const initialValues: IContactUsApiPayload = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  subject: "",
  type: "general",
  responded: false,
  createdBy: "",
};

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
export default function AddContactUsPage() {
  const userDetails = useSelector(getUser);
  const handleSubmit = async (values: IContactUsApiPayload) => {
    values.createdBy = userDetails?._id;
    await apiRequest<IContactUsApiResponse, IContactUsApiPayload>(
      "/contactUs/createContactUs",
      "POST",
      values,
      true
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Add Query
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
            <FormikInput label="Full Name" name="fullName" required />
            <FormikInput label="Email" name="email" type="email" required />
            <FormikInput label="Phone (optional)" name="phone" type="text" />

            <FormikInput
              label="Subject (optional)"
              name="subject"
              placeholder="e.g. Partnership inquiry"
            />

            {/* Type */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Type <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="type"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="">Select type</option>
                <option value="volunteer">Volunteer</option>
                <option value="donation">Donation</option>
                <option value="partnership">Partnership</option>
                <option value="general">General</option>
                <option value="feedback">Feedback</option>
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Message */}
            <FormikInput
              label="Message"
              name="message"
              isTextArea
              rows={6}
              required
            />

            {/* Submit */}
            <div className="pt-6">
              <Button
                name="Submit ContactUs"
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
