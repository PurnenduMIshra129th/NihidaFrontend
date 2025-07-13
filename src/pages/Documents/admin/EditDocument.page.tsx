import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate, useParams } from "react-router";
import * as Yup from "yup";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FormikInput from "../../../components/Input/FormikInput";
import { fetchAllDocument } from "../../../contexts/slice/getAllDocument.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
import {
  IDocumentApiPayload,
  IDocumentApiResponse,
} from "../../../types/api/api.type";
import { formatDateForInput, parseCommaSeparatedString } from "../../../utils/util";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),

  type: Yup.mixed<
    | "certificate"
    | "recognition"
    | "legal"
    | "media"
    | "annual-report"
    | "other"
  >()
    .oneOf([
      "certificate",
      "recognition",
      "legal",
      "media",
      "annual-report",
      "other",
    ])
    .required("Document type is required"),

  description: Yup.string(),

  issuedBy: Yup.string(),

  issueDate: Yup.date().nullable().typeError("Issue date must be a valid date"),

  expiresAt: Yup.date()
    .nullable()
    .typeError("Expiry date must be a valid date"),

  visibility: Yup.mixed<"public" | "internal">()
    .oneOf(["public", "internal"])
    .required("Visibility is required"),

  tags: Yup.array().of(Yup.string()),

  highlighted: Yup.boolean(),

  createdBy: Yup.string(),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function EditDocumentPage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] =
    useState<IDocumentApiPayload | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const res = await apiRequest<IDocumentApiResponse, IDocumentApiPayload>(
        `/document/getDocumentById/${id}`,
        "GET",
        undefined,
        true
      );
      if (res && res.statusCode === 1) {
        const formattedData = {
          ...res.data,
          issueDate: formatDateForInput(`${res?.data?.issueDate}`),
          expiresAt: formatDateForInput(`${res?.data?.expiresAt}`),
        };
        setInitialValues(formattedData);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (values: IDocumentApiPayload) => {
    if (id) {
      await apiRequest<IDocumentApiResponse, IDocumentApiPayload>(
        `/document/updateDocument/${id}`,
        "PUT",
        values,
        true
      );
      await dispatch(fetchAllDocument());
      navigate("/admin/document-dashboard");
    }
  };
  if (!initialValues) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 pt-[9rem]">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8">
        Edit Document
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await handleSubmit(values);
          actions.resetForm();
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form className="space-y-6">
            <FormikInput label="Title" name="title" required />
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Document Type <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="type"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="certificate">Certificate</option>
                <option value="recognition">Recognition</option>
                <option value="legal">Legal</option>
                <option value="media">Media</option>
                <option value="annual-report">Annual Report</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            <FormikInput
              label="Description"
              name="description"
              isTextArea
              rows={5}
            />

            <FormikInput label="Issued By" name="issuedBy" />
            <FormikInput label="Issue Date" name="issueDate" type="date" />
            <FormikInput label="Expires At" name="expiresAt" type="date" />
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
            <FormikInput
              label="Tags (comma-separated)"
              name="tags"
              placeholder="e.g. legal, annual"
              transformOnBlur={(val) => parseCommaSeparatedString(val)}
            />
            <div className="flex items-center gap-2">
              <Field type="checkbox" name="highlighted" id="highlighted" />
              <label htmlFor="highlighted" className="text-sm text-gray-700">
                Highlight this document
              </label>
            </div>

            <div className="pt-6">
              <Button
                name="Submit Document"
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
