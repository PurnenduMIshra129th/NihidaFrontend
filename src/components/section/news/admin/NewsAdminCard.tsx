import { INewsAdminCard } from "../../../../types/component/component.types";
import Button from "../../../Button/Button";

// eslint-disable-next-line @typescript-eslint/naming-convention
const NewsAdminCard = ({
  data,
  onView,
  onEdit,
  onDelete,
  onUpload,
  onViewImages,
}: INewsAdminCard) => {
  return (
    <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[28rem] bg-white rounded-lg shadow-md border border-orange-100 p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
      {/* Title + Date */}
      <div>
        <h3 className="text-xl font-semibold text-custom_orange_1 mb-1 break-words">
          {data?.title || "No title"}
        </h3>
        <p className="text-sm text-gray-500 mb-1">
          {data?.date ? new Date(data.date).toLocaleDateString() : "No date"}
        </p>

        {/* Category + Visibility */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
          <span className="bg-orange-100 text-custom_orange_1 px-2 py-0.5 rounded-full capitalize">
            🗂 {data?.category?.replace("-", " ") || ''}
          </span>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full capitalize">
            🔒 {data?.visibility || ""}
          </span>
        </div>

        {/* Summary Preview */}
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {data?.summary || "No summary provided."}
        </p>
      </div>

      {/* No files found message */}
      {(!data?.files || data?.files?.length === 0) && (
        <div className="text-sm text-red-500 font-medium mb-4">
          ⚠️ No files found. Please upload supporting media.
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Button
          name="View"
          onClick={onView}
          className="border-custom_orange_1 text-custom_orange_1 hover:bg-custom_orange_1 hover:text-white"
        />
        <Button
          name="Edit"
          onClick={onEdit}
          className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        />
        <Button
          name="Delete"
          onClick={onDelete}
          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        />
        <Button
          name="Upload Files"
          onClick={onUpload}
          className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
        />
        <Button
          name="View Files"
          onClick={onViewImages}
          className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
        />
      </div>
    </div>
  );
};

export default NewsAdminCard;
