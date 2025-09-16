import { useEffect, useState } from "react";
import { useParams } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { IOurPartnerApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function OurPartnerDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IOurPartnerApiResponse | null>(
    `partner/getPartnerById/${id}`,
    "GET",
    undefined,
    true
  );
  const [ourPartner, setOurPartner] = useState<IOurPartnerApiResponse | null>(
    null
  );

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setOurPartner(data.data);
    }
  }, [data]);

  if (!ourPartner)
    return (
      <EmptyState />
    );

  return (
  <div className="max-w-2xl mx-auto px-4 pt-[8rem] pb-16 text-center">
  {/* Image */}
  {ourPartner.files?.[0]?.mimeType?.startsWith("image/") && (
    <div className="mb-6 flex justify-center">
      <Image
        imagePath={ourPartner.files[0].publicFilePath}
        className="w-40 h-40 rounded-full object-cover border-4 border-orange-100 shadow-md transition-transform duration-300 hover:scale-105"
      />
    </div>
  )}

  {/* Name */}
  <h1 className="text-3xl font-bold text-custom_orange_1 mb-2">
    {ourPartner.name || "Unnamed Partner"}
  </h1>

  {/* No Files Fallback */}
  {(!ourPartner.files || ourPartner.files.length === 0) && (
    <div className="text-sm text-red-500 font-medium mt-4">
      ⚠️ No image found. Please upload supporting media.
    </div>
  )}
</div>
  );
}
