import { useSelector } from "react-redux";

import {
  selectTeamMember,
} from "../../../../contexts/slice/getAllTeamMember.slice";
import TeamMemberProfileCard from "../../../Cards/TeamMemberCard";
import NoDataComponent from "../../../EmptyState/NoData";
import SectionDivider from "../../../SectionDivider/SectionDivider";

// eslint-disable-next-line @typescript-eslint/naming-convention
function TeamMemberScreen() {
  const data = useSelector(selectTeamMember);
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full sm:w-[80%] mx-auto pt-16 pb-12 px-4">
  <SectionDivider
    textHeading="TeamMember Articles Section"
    routePath="/user/view-all-teamMember"
  />

  <div className="w-full mt-6">
    {(!data || data.length === 0) && (
      <NoDataComponent message="No teamMember available at the moment" />
    )}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
      {data?.slice(0, 3).map((item, index) => (
        <TeamMemberProfileCard
          key={index}
          id={item._id}
          name={item.name}
          designation={item.designation || "Team Contributor"}
          bio={item.bio}
          focusArea={item.focusArea || "education"}
          dateJoined={item.createdAt}
          imagePath={item?.files?.[0]?.publicFilePath || ""}
          extraImagePath={item?.files?.[1]?.publicFilePath || ""}
          readMoreRouting="/user/view-teamMember"
        />
      ))}
    </div>
  </div>
</div>

    </>
  );
}

export default TeamMemberScreen;
