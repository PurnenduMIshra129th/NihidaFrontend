import { useEffect, useState } from "react";

import TeamMemberProfileCard from "../../../components/Cards/TeamMemberCard";
import EmptyState from "../../../components/EmptyState/EmptyState";
import useFetch from "../../../hooks/useFetch";
import { ITeamMemberApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const TeamMemberListPage = () => {
  const { data } = useFetch<ITeamMemberApiResponse[]>(
    "teamMember/getAllTeamMember"
  );
  const [teamMember, setTeamMember] = useState<ITeamMemberApiResponse[]>([]);

  useEffect(() => {
    if (data && data.statusCode == 1 && data.data.length > 0) {
      setTeamMember(data.data);
    }
  }, [data]);
  if (teamMember.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pt-[8rem] pb-16">
  <h1 className="text-3xl font-bold text-custom_orange_1 mb-12 text-center tracking-wide">
    Our Team Members
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamMember.map((member, index) => (
      <TeamMemberProfileCard
        key={index}
        id={member._id}
        name={member.name || "Team Member"}
        designation={member.designation || "Team Contributor"}
        bio={member.bio || "Team Member"}
        focusArea={member.focusArea || "education"}
        dateJoined={member.createdAt}
        imagePath={member?.files?.[0]?.publicFilePath || ""}
        extraImagePath={member?.files?.[1]?.publicFilePath || ""} // optional 2nd image
        readMoreRouting="/our-team/view-teamMember"
      />
    ))}
  </div>
</div>

  );
};

export default TeamMemberListPage;
