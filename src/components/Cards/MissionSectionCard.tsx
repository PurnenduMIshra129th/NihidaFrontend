import { useNavigate } from "react-router";

import { IMissionSectionCard } from "../../types/component/component.types";
import { trimText } from "../../utils/trimText";
import Button from "../Button/Button";
import Heading_2 from "../Text/Heading_2";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function MissionSectionCard(props: IMissionSectionCard) {
  const {
    textHeading = "no Heading",
    textDescription = "no Description",
    routePath = "/",
  } = props;
  const navigate = useNavigate();
  // const descriptionLength = getTextLength(textDescription);
  return (
    <>
      <div className="bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300 md:max-w-[30rem] min-h-[25rem] p-6 sm:p-8 rounded-xl w-full flex flex-col">
        <Heading_2
          text={textHeading}
          className="mb-4 text-custom_orange_1 text-xl sm:text-2xl"
        />

        <div className="flex-grow">
          <Typography
            className="text-gray-700  text-[15px] sm:text-[16px] leading-relaxed"
            text={trimText(textDescription, 350)}
          />
        </div>

        {textDescription?.length > 350 && (
          <div className="mt-6">
            <Button
              name="Read More"
              className="bg-custom_orange_1 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition w-full sm:w-fit"
              onClick={() => navigate(`${routePath}`)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MissionSectionCard;
