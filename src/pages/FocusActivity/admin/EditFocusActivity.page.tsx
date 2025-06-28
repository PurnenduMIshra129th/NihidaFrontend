import { FieldArray,Formik } from "formik";
import { useEffect,useState } from "react";
import { Form,useNavigate, useParams } from "react-router";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FormikInput from "../../../components/Input/FormikInput";
import { apiRequest } from "../../../services/apiService";
import { IFocusActivityApiPayload,IFocusActivityApiResponse } from "../../../types/api/api.type";


const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  subtitle: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  location: Yup.string(),
  date: Yup.date(),
  impactStats: Yup.array().of(
    Yup.object({
      label: Yup.string().required("Required"),
      value: Yup.number().required("Required"),
      unit: Yup.string(),
    })
  ),
  testimonials: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Required"),
      quote: Yup.string().required("Required"),
      role: Yup.string(),
    })
  ),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function EditFocusActivityPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<IFocusActivityApiPayload | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const res = await apiRequest<IFocusActivityApiResponse,IFocusActivityApiPayload>(
        `/focusActivity/getFocusActivityById/${id}`,
        "GET",
        undefined,
        true
      );
      if(res && res.statusCode === 1){
        setInitialValues(res.data);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (values: IFocusActivityApiPayload) => {
    if (id) {
      await apiRequest<IFocusActivityApiResponse,IFocusActivityApiPayload>(
        `/focusActivity/updateFocusActivity/${id}`,
        "PUT",
        values,
        true
      )
      navigate("/admin/focus-activity-dashboard");
    }
  };
  if(!initialValues){
    return <EmptyState />;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">Edit Focus Activity</h1>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit }) => (
          <Form className="space-y-6">
            <FormikInput label="Title" name="title" required />
            <FormikInput label="Subtitle" name="subtitle" required />
            <FormikInput label="Description" name="description" isTextArea rows={5} required />
            <FormikInput label="Location" name="location" />
            <FormikInput label="Date" name="date" type="date" />

            {/* Impact Stats */}
            <FieldArray name="impactStats">
              {({ push, remove }) => (
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Impact Stats</h3>
                  {values.impactStats.map((_, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                      <FormikInput name={`impactStats[${index}].label`} placeholder="Label" />
                      <FormikInput name={`impactStats[${index}].value`} type="number" placeholder="Value" />
                      <FormikInput name={`impactStats[${index}].unit`} placeholder="Unit (optional)" />
                      <button
                        type="button"
                        className="text-red-500 text-sm col-span-3 text-right"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <Button
                    name="Add Stat"
                    onClick={() => push({ label: "", value: 0, unit: "" })}
                    className="bg-custom_orange_1 text-white mt-2"
                  />
                </div>
              )}
            </FieldArray>

            {/* Testimonials */}
            <FieldArray name="testimonials">
              {({ push, remove }) => (
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Testimonials</h3>
                  {values.testimonials?.map((_, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                      <FormikInput name={`testimonials[${index}].name`} placeholder="Name" />
                      <FormikInput name={`testimonials[${index}].quote`} placeholder="Quote" />
                      <FormikInput name={`testimonials[${index}].role`} placeholder="Role (optional)" />
                      <button
                        type="button"
                        className="text-red-500 text-sm col-span-3 text-right"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <Button
                    name="Add Testimonial"
                    onClick={() => push({ name: "", quote: "", role: "" })}
                    className="bg-custom_orange_1 text-white mt-2"
                  />
                </div>
              )}
            </FieldArray>

            <div className="pt-6">
              <Button
                name="Update Focus Activity"
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