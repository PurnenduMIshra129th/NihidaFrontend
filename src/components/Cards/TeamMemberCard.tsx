import { useNavigate } from "react-router";

import { ITeamMemberCardProps } from "../../types/component/component.types";
import { formatToLocalTime } from "../../utils/util";
import Button from "../Button/Button";
import Image from "../Image/Image";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function TeamMemberProfileCard(props: ITeamMemberCardProps) {
  const {
    id,
    name,
    designation,
    bio,
    focusArea,
    dateJoined,
    imagePath = "",
    extraImagePath = "",
    readMoreRouting,
  } = props;

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-orange-100 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      {/* Primary Image */}
      {imagePath && (
        <Image
          imagePath={imagePath}
          className="w-[7rem] h-[7rem] rounded-full object-cover border-4 border-custom_orange_1 shadow-md mb-4"
        />
      )}

      {/* Optional Extra Image */}
      {extraImagePath && (
        <Image
          imagePath={extraImagePath}
          className="w-[2.5rem] h-[2.5rem] object-contain mb-2"
        />
      )}

      {/* Name + Designation */}
      <h3 className="text-xl font-semibold text-custom_orange_1 break-words mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{designation}</p>

      {/* Focus + Join Date */}
      <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-700 mb-4">
        {focusArea && (
          <span className="bg-orange-100 text-custom_orange_1 px-3 py-1 rounded-full">
            🎯 {focusArea}
          </span>
        )}
        {dateJoined && (
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            📅 {formatToLocalTime(dateJoined)}
          </span>
        )}
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-700 line-clamp-4 mb-4 max-w-[85%] whitespace-pre-line">
        {bio || "No biography available."}
      </p>

      {/* Read More */}
      <Button
        name="Read More"
        className="w-full mt-auto border-2 border-custom_orange_1 text-custom_orange_1 hover:bg-custom_orange_1 hover:text-white"
        onClick={() => navigate(`${readMoreRouting}/${id}`)}
      />
    </div>
  );
}
