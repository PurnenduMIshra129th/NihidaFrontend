import { IOurPartnerAdminCard } from "../../../../types/component/component.types";
import Button from "../../../Button/Button";
import Image from "../../../Image/Image";

// eslint-disable-next-line @typescript-eslint/naming-convention
const OurPartnerAdminCard = ({
  data,
  onView,
  onEdit,
  onDelete,
  onUpload,
  onViewImages,
}: IOurPartnerAdminCard) => {
  return (
  <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[28rem] bg-white rounded-lg shadow-md border border-orange-100 p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
  {/* Image + Name */}
  <div className="flex flex-col items-center text-center">
    {data?.files?.[0]?.publicFilePath ? (
      <Image
        imagePath={data.files[0].publicFilePath}
        className="w-24 h-24 rounded-full object-cover border-4 border-orange-100 shadow-sm mb-4 transition-transform duration-300 group-hover:scale-105"
      />
    ) : (
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4 border border-dashed border-gray-300">
        No Image
      </div>
    )}

    <h3 className="text-xl font-semibold text-custom_orange_1 break-words">
      {data?.name || "Unnamed Partner"}
    </h3>
  </div>

  {/* No Files Notice */}
  {(!data?.files || data?.files.length === 0) && (
    <div className="text-sm text-red-500 font-medium mt-4 text-center">
      ⚠️ No files found. Please upload supporting media.
    </div>
  )}

  {/* Actions */}
  <div className="flex flex-wrap gap-2 mt-6">
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

export default OurPartnerAdminCard;
