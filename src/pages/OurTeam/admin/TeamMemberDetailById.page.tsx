import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NoDataComponent from "../../../components/EmptyState/NoData";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { ITeamMemberApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function TeamMemberDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<ITeamMemberApiResponse | null>(
    `teamMember/getTeamMemberById/${id}`,
    "GET",
    undefined,
    true
  );
  const [teamMember, setTeamMember] = useState<ITeamMemberApiResponse | null>(
    null
  );

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setTeamMember(data.data);
    }
  }, [data]);

  if (!teamMember)
    return (
      <NoDataComponent message="No teamMember detail available at the moment" />
    );

  return (
    <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16 space-y-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-custom_orange_1 tracking-tight text-center">
          {teamMember.name || "Unnamed Member"}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
            🧭 {teamMember.designation || "No designation"}
          </span>
          <span className="px-3 py-1 bg-orange-100 text-custom_orange_1 rounded-full">
            🔒 {teamMember.visibility || "No visibility"}
          </span>
          {teamMember.dateJoined && (
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
              📅 Joined: {new Date(teamMember.dateJoined).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Focus Area */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Focus Area
          </h2>
          <p className="text-base text-gray-700">
            {teamMember.focusArea || "Not specified"}
          </p>
        </section>

        {/* Bio */}
        {teamMember.bio && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Bio</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line border-l-4 border-orange-200 pl-4">
              {teamMember.bio}
            </p>
          </section>
        )}

        {/* Contact Info */}
        {(teamMember.contact?.email || teamMember.contact?.phone) && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Contact
            </h2>
            <ul className="space-y-1 text-sm text-gray-700">
              {teamMember.contact.email && (
                <li>📧 {teamMember.contact.email}</li>
              )}
              {teamMember.contact.phone && (
                <li>📞 {teamMember.contact.phone}</li>
              )}
            </ul>
          </section>
        )}

        {/* Social Links */}
        {(teamMember.socials?.linkedin || teamMember.socials?.twitter) && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Social Profiles
            </h2>
            <div className="flex flex-wrap gap-3">
              {teamMember.socials.linkedin && (
                <a
                  href={teamMember.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                >
                  🔗 LinkedIn
                </a>
              )}
              {teamMember.socials.twitter && (
                <a
                  href={teamMember.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                >
                  🐦 Twitter
                </a>
              )}
            </div>
          </section>
        )}

        {/* Tags */}
        {teamMember.tags && teamMember.tags?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {teamMember.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-orange-100 text-custom_orange_1 rounded-full hover:bg-orange-200 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {teamMember.files?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {teamMember.files.map((file) =>
                file.mimeType?.startsWith("image/") ? (
                  <Image
                    key={file._id}
                    imagePath={file.publicFilePath}
                    className="w-full rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                  />
                ) : null
              )}
            </div>
          </section>
        )}
      </div>
  );
}
