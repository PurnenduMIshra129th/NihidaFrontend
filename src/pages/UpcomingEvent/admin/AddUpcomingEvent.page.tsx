import { Field, FieldArray, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchAllUpcomingEvent } from "../../../contexts/slice/getAllUpcomingEvent.slice";
import { getUser } from "../../../contexts/slice/getUser.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import {
  IUpcomingEventApiPayload,
  IUpcomingEventApiResponse,
} from "../../../types/api/api.type";
// import { parseCommaSeparatedString } from "../../../utils/util";

const initialValues: IUpcomingEventApiPayload = {
  title: "",
  subtitle: "",
  description: "",
  fromDate: new Date(),
  toDate: new Date(),
  location: "",
  tags: [],
  cta: {
    label: "",
    url: "",
  },
  impactGoals: [],
  contactPerson: {
    name: "",
    phone: "",
    email: "",
  },
  createdBy: "",
  status: "upcoming",
};
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  subtitle: Yup.string(),
  description: Yup.string().required("Description is required"),
  fromDate: Yup.date().required("Required").typeError("Invalid date format"),
  toDate: Yup.date()
    .required("Required")
    .typeError("Invalid date format")
    .min(Yup.ref("fromDate"), "To Date must be after From Date"),
  location: Yup.string().required("Location is required"),

  tags: Yup.array().of(Yup.string()),

  cta: Yup.object({
    label: Yup.string(),
    url: Yup.string().url("Must be a valid URL"),
  }),

  impactGoals: Yup.array().of(Yup.string()),

  contactPerson: Yup.object({
    name: Yup.string(),
    phone: Yup.string().matches(/^[0-9+\-()\s]*$/, "Invalid phone number"),
    email: Yup.string().email("Invalid email address"),
  }),

  createdBy: Yup.string(),
  status: Yup.mixed<"upcoming" | "ongoing" | "closed">()
    .oneOf(["upcoming", "ongoing", "closed"])
    .required("Status is required"),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AddUpcomingEventPage() {
  const userDetails = useSelector(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (values: IUpcomingEventApiPayload) => {
    values.createdBy = userDetails?._id;
    await apiRequest<IUpcomingEventApiResponse, IUpcomingEventApiPayload>(
      "/upcomingEvent/createUpcomingEvent",
      "POST",
      values,
      true
    );
    await dispatch(fetchAllUpcomingEvent());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Add Upcoming Event
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await handleSubmit(values);
          actions.resetForm();
        }}
      >
        {({ values, handleSubmit }) => (
          <Form className="space-y-6">
            <FormikInput label="Title" name="title" required />
            <FormikInput label="Subtitle" name="subtitle" />
            <FormikInput
              label="Description"
              name="description"
              isTextArea
              rows={5}
              required
            />
            <FormikInput label="Location" name="location" required />
            <div className="grid grid-cols-2 gap-4">
              <FormikInput label="from Date" name="fromDate" type="date" />
              <FormikInput label="to Date" name="toDate" type="date" />
            </div>

            {/* Tags */}
            {/* <FormikInput
              label="Tags (comma-separated)"
              name="tags"
              placeholder="e.g. education, health"
              transformOnBlur={(values) => parseCommaSeparatedString(values)}
            /> */}

            {/* CTA */}
            {/* <div className="grid grid-cols-2 gap-4">
              <FormikInput label="CTA Label" name="cta.label" />
              <FormikInput label="CTA URL" name="cta.url" />
            </div> */}

            {/* Impact Goals */}
            <FieldArray name="impactGoals">
              {({ push, remove }) => (
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Impact Goals
                  </h3>
                  {values.impactGoals?.map((_, index) => (
                    <div key={index} className="flex items-center gap-4 mb-2">
                      <FormikInput
                        name={`impactGoals[${index}]`}
                        placeholder="Goal"
                      />
                      <button
                        type="button"
                        className="text-red-500 text-sm"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <Button
                    name="Add Goal"
                    onClick={() => push("")}
                    className="bg-custom_orange_1 text-white mt-2"
                  />
                </div>
              )}
            </FieldArray>

            {/* Contact Person */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Contact Person
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FormikInput name="contactPerson.name" label="Name" />
                <FormikInput name="contactPerson.phone" label="Phone" />
                <FormikInput name="contactPerson.email" label="Email" />
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <Field
                as="select"
                name="status"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="closed">Closed</option>
              </Field>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                name="Submit Event"
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
