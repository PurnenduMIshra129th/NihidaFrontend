import moment from "moment";
import { useNavigate } from "react-router";

import { ICardProps } from "../../types/cards/card.type";
import { trimText } from "../../utils/trimText";
import { formatToLocalTime } from "../../utils/util";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Heading_2 from "../Text/Heading_2";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function InformationCard(props: ICardProps) {
  const {
    textTime = moment().toString(),
    textHeading = "No Heading",
    textDescription = "No Description",
    imagePath = "",
    id = "noID",
    readMoreRouting = "/",
  } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full  flex flex-col p-3 sm:p-0">
        <Image imagePath={imagePath} className="rounded-lg" />
        <div className="bg-custom_orange_2 p-2 mt-6 rounded-2xl w-[60%]">
          <Typography
            text={formatToLocalTime(textTime)}
            className=" text-custom_orange_1 lg:text-sm"
          />
        </div>
        <Heading_2 text={trimText(textHeading, 50)} className="mt-4" />
        <div className=" break-words md:min-h-24 flex-grow">
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
    </>
  );
}

export default InformationCard;
