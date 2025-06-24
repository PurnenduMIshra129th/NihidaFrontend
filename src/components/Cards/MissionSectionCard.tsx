import { useNavigate } from "react-router";

import { IMissionSectionCard } from "../../types/cards/card.type";
import { trimText } from "../../utils/trimText";
import { getTextLength } from "../../utils/util";
import Button from "../Button/Button";
import Heading_2 from "../Text/Heading_2";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function MissionSectionCard(props: IMissionSectionCard) {
  const { textHeading = "no Heading", textDescription = "no Description" ,routePath ="/" } =
    props;
    const navigate = useNavigate()
  const descriptionLength = getTextLength(textDescription);
  return (
    <>
      <div className="bg-custom_white_3 md:max-w-[30rem] min-h-[25rem] p-10 shadow-lg rounded-md w-full m-3">
        <Heading_2 text={textHeading} className="mb-4 text-custom_orange_1" />
        <Typography
          className="text-custom_grey_1 text-justify md:text-sm"
          text={trimText(textDescription, 600)}
        />
        {descriptionLength > 350 && <Button name="Read More" className="bg-custom_orange_1  text-custom_white_1 mt-4" onClick={()=> navigate(`${routePath}`)}/>}
      </div>
    </>
  );
}

export default MissionSectionCard;
