import { IFocusActivityAdminCard } from "../../../../types/component/component.types";
import { calculateDuration, formatToLocalTime } from "../../../../utils/util";
import Button from "../../../Button/Button";

// eslint-disable-next-line @typescript-eslint/naming-convention
const FocusActivityAdminCard = ({
  data,
  onView,
  onEdit,
  onDelete,
  onUpload,
  onViewImages,
}: IFocusActivityAdminCard) => {
  return (
    <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[28rem] bg-white rounded-lg shadow-md border border-orange-100 p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
      {/* Title + Date */}
      <div>
        <h3 className="text-xl font-semibold text-custom_orange_1 mb-1 break-words">
          {data.title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:gap-4 mb-3 text-sm text-gray-600">
          <div className="bg-orange-50 px-3 py-2 rounded-lg w-full sm:w-auto">
            <span className="font-medium text-custom_orange_1">From:</span>{" "}
            {data.fromDate ? formatToLocalTime(data.fromDate) : "No date"}
          </div>
          <div className="bg-orange-50 px-3 py-2 rounded-lg w-full sm:w-auto mt-2 sm:mt-0">
            <span className="font-medium text-custom_orange_1">To:</span>{" "}
            {data.toDate ? formatToLocalTime(data.toDate) : "No date"}
          </div>
        </div>
        <div className="mb-3">
          <p className="text-sm text-gray-700">
            🕒 <span className="font-medium">Duration:</span>{" "}
            {calculateDuration(data.fromDate, data.toDate)}
          </p>
        </div>

        {/* Description Preview */}
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {data.description}
        </p>

        {/* Location + Stats Count */}
        <div className="text-sm text-gray-600 mb-4">
          📍 {data.location || "Unknown location"}
          <br />
          📊 {data.impactStats?.length || 0} impact stat
          {data.impactStats?.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* No images found message */}
      {data.files?.length === 0 && (
        <div className="text-sm text-red-500 font-medium mb-4">
          ⚠️ No images found. Please upload some images.
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
          name="Upload Images"
          onClick={onUpload}
          className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
        />
        <Button
          name="View Images"
          onClick={onViewImages}
          className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
        />
      </div>
    </div>
  );
};

export default FocusActivityAdminCard;
