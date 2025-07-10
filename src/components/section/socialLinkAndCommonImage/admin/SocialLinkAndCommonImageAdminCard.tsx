import { ISocialLinkAndCommonImageAdminCard } from "../../../../types/component/component.types";
import Button from "../../../Button/Button";

// eslint-disable-next-line @typescript-eslint/naming-convention
const SocialLinkAndCommonImageAdminCard = ({
  data,
  onEdit,
  onUpload,
  onViewImages,
}: ISocialLinkAndCommonImageAdminCard) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md border border-orange-100 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
      {/* Heading */}
      <h3 className="text-xl font-bold text-custom_orange_1 mb-4">
        Social & Contact Info
      </h3>

      {/* Social Links */}
      <div className="space-y-2 text-sm text-gray-700 mb-4">
        <p>
          <span className="font-semibold">📸 Instagram:</span>{" "}
          {data.instagramUrl || "N/A"}
        </p>
        <p>
          <span className="font-semibold">📘 Facebook:</span>{" "}
          {data.facebookUrl || "N/A"}
        </p>
        <p>
          <span className="font-semibold">🐦 Twitter:</span>{" "}
          {data.twitterUrl || "N/A"}
        </p>
        <p>
          <span className="font-semibold">💼 LinkedIn:</span>{" "}
          {data.linkedinUrl || "N/A"}
        </p>
        <p>
          <span className="font-semibold">📺 YouTube:</span>{" "}
          {data.youtubeUrl || "N/A"}
        </p>
        <p>
          <span className="font-semibold">💬 WhatsApp:</span>{" "}
          {data.whatsappUrl || "N/A"}
        </p>
        <p>
          <span className="font-semibold">📢 Telegram:</span>{" "}
          {data.telegramUrl || "N/A"}
        </p>
      </div>

      {/* Phone Numbers */}
      <div className="text-sm text-gray-700 mb-4">
        <p>
          <span className="font-semibold">📞 Phone 1:</span>{" "}
          {data.phoneNumber1 || "N/A"}
        </p>
        <p>
          <span className="font-semibold">📞 Phone 2:</span>{" "}
          {data.phoneNumber2 || "N/A"}
        </p>
      </div>

      {/* Email & Address */}
      <div className="text-sm text-gray-700 mb-4 space-y-1">
        <p>
          <span className="font-semibold">📧 Email:</span> {data.email || "N/A"}
        </p>
        <p>
          <span className="font-semibold">🏠 Address Line 1:</span>{" "}
          {data.addressLine1 || "N/A"}
        </p>
        {data.addressLine2 && (
          <p>
            <span className="font-semibold">🏠 Address Line 2:</span>{" "}
            {data.addressLine2}
          </p>
        )}
        <p>
          <span className="font-semibold">🏙️ City:</span> {data.city || "N/A"}
        </p>
        <p>
          <span className="font-semibold">🗺️ State:</span> {data.state || "N/A"}
        </p>
        <p>
          <span className="font-semibold">🌍 Country:</span>{" "}
          {data.country || "N/A"}
        </p>
        <p>
          <span className="font-semibold">📮 Postal Code:</span>{" "}
          {data.postalCode || "N/A"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <Button
          name="Edit"
          onClick={onEdit}
          className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
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

export default SocialLinkAndCommonImageAdminCard;
