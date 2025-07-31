import { ITeamMemberAdminCard } from "../../../../types/component/component.types";
import { formatToLocalTime } from "../../../../utils/util";
import Button from "../../../Button/Button";

// eslint-disable-next-line @typescript-eslint/naming-convention
const TeamMemberAdminCard = ({
  data,
  onView,
  onEdit,
  onDelete,
  onUpload,
  onViewImages,
}: ITeamMemberAdminCard) => {
  return (
    <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[28rem] bg-white rounded-lg shadow-md border border-orange-100 p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
      {/* Name + Designation + Date Joined */}
      <div>
        <h3 className="text-xl font-semibold text-custom_orange_1 mb-1 break-words">
          {data?.name || "No name"}
        </h3>
        <p className="text-sm text-gray-600 mb-1 italic">
          {data?.designation || "No designation"}
        </p>
        <p className="text-xs text-gray-500 mb-2">
          {data?.dateJoined
            ? `Joined on ${formatToLocalTime(data.dateJoined)}}`
            : "Join date not available"}
        </p>

        {/* Focus Area + Visibility */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-700 mb-3">
          <span className="bg-orange-100 text-custom_orange_1 px-2 py-0.5 rounded-full capitalize">
            🎯 {data?.focusArea || "Focus unknown"}
          </span>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full capitalize">
            🔒 {data?.visibility || ""}
          </span>
        </div>

        {/* Bio Preview */}
        <p className="text-gray-700 text-sm line-clamp-4 mb-4 whitespace-pre-wrap">
          {data?.bio || "No bio available."}
        </p>
      </div>

      {/* Media Feedback */}
      {(!data?.files || data?.files?.length === 0) && (
        <div className="text-sm text-red-500 font-medium mb-4">
          ⚠️ No files found. Upload photos or documents to enrich this profile.
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Button
          name="View Profile"
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

export default TeamMemberAdminCard;
