import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate, useParams } from "react-router";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchSocialLinkAndCommonImage } from "../../../contexts/slice/socialLinkAndCommonImage.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import {
  ISocialLinkAndCommonImageApiPayload,
  ISocialLinkAndCommonImageApiResponse,
} from "../../../types/api/api.type";
import { countries,indianStates } from "../../../utils/constant";

const validationSchema = Yup.object({
  instagramUrl: Yup.string()
    .url("Must be a valid Instagram URL")
    .required("Instagram URL is required"),

  facebookUrl: Yup.string()
    .url("Must be a valid Facebook URL")
    .required("Facebook URL is required"),

  twitterUrl: Yup.string()
    .url("Must be a valid Twitter URL")
    .required("Twitter URL is required"),

  linkedinUrl: Yup.string()
    .url("Must be a valid LinkedIn URL")
    .required("LinkedIn URL is required"),

  youtubeUrl: Yup.string()
    .url("Must be a valid YouTube URL")
    .required("YouTube URL is required"),

  whatsappUrl: Yup.string()
    .url("Must be a valid WhatsApp URL")
    .required("WhatsApp URL is required"),

  telegramUrl: Yup.string()
    .url("Must be a valid Telegram URL")
    .required("Telegram URL is required"),

  phoneNumber1: Yup.string()
    .matches(/^[0-9+\-()\s]{7,20}$/, "Must be a valid phone number")
    .required("Primary phone number is required"),

  phoneNumber2: Yup.string()
    .matches(/^[0-9+\-()\s]{7,20}$/, "Must be a valid phone number")
    .required("Secondary phone number is required"),
  email: Yup.string()
    .email("Must be a valid email address")
    .required("Email is required"),

  addressLine1: Yup.string()
    .min(5, "Address Line 1 must be at least 5 characters")
    .required("Address Line 1 is required"),

  addressLine2: Yup.string().notRequired(),

  city: Yup.string()
    .min(2, "City must be at least 2 characters")
    .required("City is required"),

  state: Yup.string().required("State is required"),

  country: Yup.string().required("Country is required"),

  postalCode: Yup.string()
    .matches(/^[A-Za-z0-9\s-]{3,10}$/, "Must be a valid postal code")
    .required("Postal code is required"),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function EditSocialLinkAndCommonImagePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [initialValues, setInitialValues] =
    useState<ISocialLinkAndCommonImageApiPayload | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const res = await apiRequest<
        ISocialLinkAndCommonImageApiResponse,
        ISocialLinkAndCommonImageApiPayload
      >(
        `/socialLinkAndCommonImage/getSocialLinkAndCommonImageById/${id}`,
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

  const handleSubmit = async (values: ISocialLinkAndCommonImageApiPayload) => {
    if (id) {
      await apiRequest<
        ISocialLinkAndCommonImageApiResponse,
        ISocialLinkAndCommonImageApiPayload
      >(
        `/socialLinkAndCommonImage/updateSocialLinkAndCommonImage/${id}`,
        "PUT",
        values,
        true
      );
      dispatch(fetchSocialLinkAndCommonImage());
      navigate("/admin/socialLinkAndCommonImage-dashboard");
    }
  };
  if (!initialValues) {
    return <EmptyState />;
  }
  return (
  <div className="max-w-4xl mx-auto px-4 pb-10 pt-[9rem]">
  <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
    Edit Social & Contact Information
  </h1>

  <Formik
    initialValues={initialValues}
    enableReinitialize
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ handleSubmit }) => (
      <Form className="space-y-6">
        {/* Social Links */}
        <FormikInput label="Instagram URL" name="instagramUrl" required />
        <FormikInput label="Facebook URL" name="facebookUrl" required />
        <FormikInput label="Twitter URL" name="twitterUrl" required />
        <FormikInput label="LinkedIn URL" name="linkedinUrl" required />
        <FormikInput label="YouTube URL" name="youtubeUrl" required />
        <FormikInput label="WhatsApp URL" name="whatsappUrl" required />
        <FormikInput label="Telegram URL" name="telegramUrl" required />

        {/* Contact Info */}
        <FormikInput label="Email" name="email" type="email" required />
        <FormikInput label="Phone Number 1" name="phoneNumber1" required />
        <FormikInput label="Phone Number 2" name="phoneNumber2" required />

        {/* Address */}
        <FormikInput label="Address Line 1" name="addressLine1" required />
        <FormikInput label="Address Line 2 (optional)" name="addressLine2" />
        <FormikInput label="City" name="city" required />

        {/* State Dropdown */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            State <span className="text-red-500">*</span>
          </label>
          <Field
            as="select"
            name="state"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Select a state</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="state"
            component="div"
            className="text-xs text-red-500 mt-1"
          />
        </div>

        {/* Country Dropdown */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            Country <span className="text-red-500">*</span>
          </label>
          <Field
            as="select"
            name="country"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="country"
            component="div"
            className="text-xs text-red-500 mt-1"
          />
        </div>

        <FormikInput label="Postal Code" name="postalCode" required />

        {/* Submit */}
        <div className="pt-6">
          <Button
            name="Update Information"
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
