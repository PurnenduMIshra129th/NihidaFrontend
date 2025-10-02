import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import PaymentGatewayScreen from "../../../components/section/payment/user/PaymentGateway.screen";

const initialValues = {
  name: "",
  email: "",
  amount: "",
  message: "",
  billingName: "",
  billingAddress: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};
export type DonationFormValues = typeof initialValues;

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than zero")
    .required("Donation amount is required"),
  message: Yup.string(),
  billingName: Yup.string().required("Billing name is required"),
  billingAddress: Yup.string().required("Billing address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  postalCode: Yup.string().required("Postal code is required"),
  country: Yup.string().required("Country is required"),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function DonationFormPage() {
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [values, setValues] = useState(initialValues);
  const handleSubmit = async (values: DonationFormValues) => {
    setValues(values);
    setShowPaymentGateway(true);
  };

  return (
    <>
      {showPaymentGateway ? (
        <PaymentGatewayScreen
          showPaymentGateway={showPaymentGateway}
          setShowPaymentGateway={setShowPaymentGateway}
          values={values}
        />
      ) : (
        <div className="max-w-4xl mx-auto px-2 pb-8 pt-[8rem]">
          <h1 className="text-2xl sm:text-3xl font-bold text-custom_orange_1 mb-6 text-center">
            Make a Donation
          </h1>

          <Formik
            initialValues={values}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              await handleSubmit(values);
              // actions.resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <Form className="space-y-4">
                {/* Donation Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormikInput label="Full Name" name="name" required />
                  <FormikInput
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <FormikInput
                    label="Donation Amount (INR)"
                    name="amount"
                    type="number"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <FormikInput
                    label="Message (Optional)"
                    name="message"
                    isTextArea
                    rows={3}
                  />
                </div>

                {/* Billing Details */}
                <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  Billing Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormikInput
                    label="Billing Name"
                    name="billingName"
                    required
                  />
                  <FormikInput
                    label="Billing Address"
                    name="billingAddress"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormikInput label="City" name="city" required />
                  <FormikInput label="State" name="state" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormikInput label="Postal Code" name="postalCode" required />
                  <FormikInput label="Country" name="country" required />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    name="Donate Now"
                    className="bg-custom_orange_1 text-white px-6 py-3 w-full"
                    onClick={handleSubmit}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
}
