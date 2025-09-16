import { Formik } from "formik";
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

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
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
        setInitialValues(res.data);
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
