import { IContactUsAdminCard } from "../../../../types/component/component.types";
import Button from "../../../Button/Button";

// eslint-disable-next-line @typescript-eslint/naming-convention
const ContactUsAdminCard = ({
  data,
  onView,
  onEdit,
  onDelete,
}: IContactUsAdminCard) => {
  return (
    <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[28rem] bg-white rounded-lg shadow-md border border-orange-100 p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
      {/* Full Name + Email */}
      <div>
        <h3 className="text-xl font-semibold text-custom_orange_1 mb-1 break-words">
          {data?.fullName || "Anonymous"}
        </h3>
        <p className="text-sm text-gray-500 mb-1">
          📧 {data?.email || "No email provided"}
        </p>

        {/* Type + Responded */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
          {data?.type && (
            <span className="bg-orange-100 text-custom_orange_1 px-2 py-0.5 rounded-full capitalize">
              🧭 {data.type}
            </span>
          )}
          {typeof data.responded === "boolean" && (
            <span
              className={`px-2 py-0.5 rounded-full ${
                data.responded
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {data.responded ? "Responded" : "Pending"}
            </span>
          )}
        </div>

        {/* Subject (optional) */}
        {data?.subject && (
          <p className="text-sm text-gray-600 italic mb-2">
            📝 Subject: {data.subject}
          </p>
        )}

        {/* Message Preview */}
        <p className="text-gray-700 text-sm line-clamp-3 mb-4 whitespace-pre-line">
          {data?.message || "No message provided."}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Button
          name="View"
          onClick={onView}
          className="border-custom_orange_1 text-custom_orange_1 hover:bg-custom_orange_1 hover:text-white"
        />
        <Button
          name="Edit"
          onClick={onEdit}
          className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        />
        <Button
          name="Delete"
          onClick={onDelete}
          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        />
      </div>
    </div>
  );
};

export default ContactUsAdminCard;
