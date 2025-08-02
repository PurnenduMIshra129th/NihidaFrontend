import "./css/partner.css";

import { useNavigate } from "react-router";

import { ICardProps } from "../../types/component/component.types";
import { trimText } from "../../utils/trimText";
import { formatToLocalTime } from "../../utils/util";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Heading_2 from "../Text/Heading_2";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function PartnerCard(props: ICardProps) {
  const {
    textTime,
    fromDate,
    toDate,
    textHeading = "No Heading",
    textDescription = "No Description",
    imagePath = "",
    id = "noID",
    readMoreRouting = "/",
  } = props;

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-sm mx-auto [perspective:1000px] hover:cursor-pointer">
      {/* Ensure the parent has explicit height */}
      <div className="relative w-full h-[22rem] transition-transform duration-500 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden flex flex-col [backface-visibility:hidden]">
          {imagePath && (
            <Image
              imagePath={imagePath}
              className="h-[9rem] sm:h-[10rem] w-full object-cover rounded-t-xl"
            />
          )}
          <div className="p-4 flex flex-col justify-between flex-grow">
            <Heading_2
              text={trimText(textHeading, 50)}
              className="text-custom_orange_1 mb-1 text-lg font-bold"
            />
            <Typography
              className="text-sm text-gray-700 line-clamp-3 mb-2"
              text={trimText(textDescription, 150)}
            />
            {textTime && (
              <Typography
                className="text-xs text-gray-500 mt-auto"
                text={`📅 ${formatToLocalTime(textTime)}`}
              />
            )}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-orange-50 rounded-xl shadow-md border border-orange-200 overflow-hidden flex flex-col p-4 justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {fromDate && toDate && (
            <div className="text-sm text-orange-700 mb-3 space-y-1">
              <p>🕓 From: {formatToLocalTime(fromDate)}</p>
              <p>⏰ To: {formatToLocalTime(toDate)}</p>
            </div>
          )}
          <Typography
            className="text-gray-700 text-sm leading-snug line-clamp-4"
            text={trimText(textDescription, 150)}
          />
          <Button
            name="Visit"
            className="mt-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm"
            onClick={() => navigate(`${readMoreRouting}/${id}`)}
          />
        </div>
      </div>
    </div>
  );
}
