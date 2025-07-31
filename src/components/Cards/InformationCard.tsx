import { useNavigate } from "react-router";

import { ICardProps } from "../../types/component/component.types";
import { trimText } from "../../utils/trimText";
import { formatToLocalTime } from "../../utils/util";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Heading_2 from "../Text/Heading_2";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function InformationCard(props: ICardProps) {
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
    <div className="w-full flex flex-col p-3 sm:p-0">
      <Image imagePath={imagePath} className="rounded-lg h-[15rem]" />

      {textTime && (
        <div className="mt-6 w-full">
          <div className="bg-orange-50 border border-custom_orange_1 px-4 py-2 rounded-lg shadow-sm w-fit">
            <Typography
              className="text-sm font-medium text-custom_orange_1"
              text={`📅 Created At: ${formatToLocalTime(textTime)}`}
            />
          </div>
        </div>
      )}

      {/* Conditionally render From–To Date block */}
      {fromDate && toDate && (
        <div className="mt-4 w-full">
          <div className="bg-orange-50 border border-custom_orange_1 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-md h-[82px]">
            <Typography
              className="text-sm text-custom_orange_1 font-medium mb-2 sm:mb-0"
              text={`🕓 From: ${formatToLocalTime(fromDate)}`}
            />
            <Typography
              className="text-sm text-custom_orange_1 font-medium"
              text={`⏰ To: ${formatToLocalTime(toDate)}`}
            />
          </div>
        </div>
      )}

      <Heading_2 text={trimText(textHeading, 50)} className="mt-4" />

      <div className="break-words md:min-h-24 flex-grow">
        <Typography
          className="my-3 text-custom_grey break-words"
          text={trimText(textDescription, 150)}
        />
      </div>

      <Button
        className="w-full border-2 border-custom_orange_1 text-custom_orange_1 hover:text-custom_white_1 mt-4"
        name="Read More"
        onClick={() => navigate(`${readMoreRouting}/${id}`)}
      />
    </div>
  );
}

export default InformationCard;
