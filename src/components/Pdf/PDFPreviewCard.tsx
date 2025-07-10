import { IPDFPreviewCardProps } from "../../types/component/component.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function PDFPreviewCard(props: IPDFPreviewCardProps) {
    const { publicFilePath= "noFile",originalName ="noFile", } = props;
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md group transition-all duration-300 hover:shadow-xl bg-white">
      <div className="flex flex-col items-center justify-center h-[200px] px-4 text-center text-gray-600">
        <div className="text-5xl mb-2">📄</div>
        <a
          href={publicFilePath}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:underline break-words line-clamp-2"
        >
          {originalName}
        </a>
      </div>
    </div>
  );
}