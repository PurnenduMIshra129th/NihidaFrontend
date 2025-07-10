import { IUpcomingEventAdminCard } from "../../../../types/component/component.types";
import Button from "../../../Button/Button";

// eslint-disable-next-line @typescript-eslint/naming-convention
const UpcomingEventAdminCard = ({
  data,
  onView,
  onEdit,
  onDelete,
  onUpload,
  onViewImages,
}: IUpcomingEventAdminCard) => {
  return (
    <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[28rem] bg-white rounded-lg shadow-md border border-orange-100 p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
      {/* Title + Subtitle */}
      <div>
        <h3 className="text-xl font-semibold text-custom_orange_1 mb-1 break-words">
          {data?.title || "No title"}
        </h3>
        {data.subtitle && (
          <p className="text-sm text-gray-600 mb-2">{data.subtitle}</p>
        )}

        {/* Date + Status */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>
            {data?.date ? new Date(data.date).toLocaleDateString() : "No date"}
          </span>
          {data?.status && (
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                data.status === "upcoming"
                  ? "bg-yellow-100 text-yellow-700"
                  : data.status === "ongoing"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {data.status}
            </span>
          )}
        </div>

        {/* Description Preview */}
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {data?.description || ""}
        </p>

        {/* Location + Impact Goals */}
        <div className="text-sm text-gray-600 mb-4">
          📍 {data?.location || "Unknown location"}
          <br />
          🎯 {data?.impactGoals?.length || 0} impact goal
          {data?.impactGoals?.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* No images found message */}
      {(!data?.files || data?.files?.length === 0) && (
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

export default UpcomingEventAdminCard;
