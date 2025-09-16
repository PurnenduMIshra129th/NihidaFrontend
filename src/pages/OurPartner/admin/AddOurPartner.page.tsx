import { Form, Formik } from "formik";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import { apiRequest } from "../../../services/apiService";
import {
  IOurPartnerApiPayload,
  IOurPartnerApiResponse,
} from "../../../types/api/api.type";

const initialValues: IOurPartnerApiPayload = {
  name: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AddOurPartnerPage() {
  const handleSubmit = async (values: IOurPartnerApiPayload) => {
    await apiRequest<IOurPartnerApiResponse, IOurPartnerApiPayload>(
      "/partner/createPartner",
      "POST",
      values,
      true
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Add OurPartner
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

            {/* Submit */}
            <div className="pt-6">
              <Button
                name="Submit OurPartner"
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
