import { useFormikContext } from "formik";

import { eventBus } from "../../contexts/context/eventBus";
import { IFormikFileInputProps } from "../../types/component/component.types";
import Image from "../Image/Image";

const FILE_TYPE_MAP: Record<"image" | "pdf", string[]> = {
  image: [".jpg", ".jpeg", ".png"],
  pdf: [".pdf"],
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const FormikFileInput = ({
  name = "files",
  label,
  className = "",
  currentFileName,
  accept = "image",
  isMultiple = false,
}: IFormikFileInputProps) => {
  const { setFieldValue } = useFormikContext();

  const extensions = FILE_TYPE_MAP[accept];
  const acceptString = extensions.join(",");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const invalidFile = fileArray.find((file) => {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      return !extensions.includes(ext);
    });

    if (invalidFile) {
      eventBus.emit({ type: "warning", message: `Only ${accept.toUpperCase()} files allowed: ${extensions.join(", ")}` });
      return;   
    }

    setFieldValue(name, isMultiple ? fileArray : fileArray[0]);
  };

  return (
    <div
      className={`border border-dashed border-custom_orange_1 bg-orange-50 rounded-md px-4 py-6 ${className}`}
    >
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-custom_orange_1 mb-3"
        >
          {label}
        </label>
      )}

      {currentFileName && (
        <div className="mb-4">
          {currentFileName.endsWith(".pdf") ? (
            <a
              href={currentFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              View current PDF
            </a>
          ) : (
            <Image imagePath={currentFileName} className="h-24 rounded-md" />
          )}
        </div>
      )}

      <input
        id={name}
        name={name}
        type="file"
        multiple={isMultiple}
        accept={acceptString}
        onChange={handleChange}
        className="block w-full text-sm text-gray-700 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-custom_orange_1 file:text-white hover:file:bg-orange-600 transition duration-200"
      />
    </div>
  );
};

export default FormikFileInput;
