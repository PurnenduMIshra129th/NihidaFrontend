import { Form, Formik } from "formik";

import { eventBus } from "../../contexts/context/eventBus";
import { multiPartAPI } from "../../services/apiService";
import { IUploadDocumentModalProps } from "../../types/component/component.types";
import FormikFileInput from "../Input/FormikFileInput";

// eslint-disable-next-line @typescript-eslint/naming-convention
const UploadDocumentModal = (props: IUploadDocumentModalProps) => {
  const {
    isOpen,
    onClose,
    note,
    warning,
    endpoint,
    onSuccess,
    ...fileInputProps
  } = props;
  if (!isOpen) return null;
  const handleSubmit = async (values: { files: File | File[] }) => {
    const selectedFiles = values.files;
    if (
      !selectedFiles ||
      (Array.isArray(selectedFiles) && selectedFiles.length === 0)
    ) {
      eventBus.emit({
        type: "warning",
        message: "Please select a file to upload.",
      });
      return;
    }
    const formData = new FormData();

    if (Array.isArray(selectedFiles)) {
      selectedFiles.forEach((file) => formData.append("files", file));
    } else {
      formData.append("files", selectedFiles);
    }

    try {
      onClose();
      await multiPartAPI(endpoint, formData, true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <Formik initialValues={{ files: [] }} onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <Form>
              <FormikFileInput {...fileInputProps} name="files" />

              {note && (
                <div className="mt-4 px-4 py-2 bg-orange-50 border-l-4 border-custom_orange_1 text-sm text-gray-800 rounded-sm">
                  <strong className="text-custom_orange_1 mr-1">Note:</strong>
                  {note}
                </div>
              )}

              {warning && (
                <div className="mt-3 px-4 py-2 bg-red-50 border-l-4 border-red-400 text-sm text-red-700 rounded-sm">
                  <strong className="text-red-600 mr-1">Warning:</strong>
                  {warning}
                </div>
              )}
              <div className="mt-6">
                <button
                  type="submit"
                  onClick={() => handleSubmit}
                  className="w-full bg-custom_orange_1 text-white py-2.5 px-4 rounded-md hover:bg-orange-600 transition duration-200"
                >
                  Upload
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="text-right mt-6">
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-custom_orange_1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentModal;
