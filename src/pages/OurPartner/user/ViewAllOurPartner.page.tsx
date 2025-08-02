import { useEffect, useState } from "react";

import PartnerCard from "../../../components/Cards/PartnerCard";
import EmptyState from "../../../components/EmptyState/EmptyState";
import useFetch from "../../../hooks/useFetch";
import { IOurPartnerApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const OurPartnerListPage = () => {
  const { data } = useFetch<IOurPartnerApiResponse[]>(
    "partner/getAllPartner"
  );
  const [ourPartner, setOurPartner] = useState<IOurPartnerApiResponse[]>([]);

  useEffect(() => {
    if (data && data.statusCode == 1 && data.data.length > 0) {
      setOurPartner(data.data);
    }
  }, [data]);
  if (ourPartner.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-10 text-center">
        Explore OurPartner
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ourPartner.map((item, index) => (
          <PartnerCard
            key={index}
            textTime={item.createdAt}
            textHeading={item.description}
            textDescription={item.description}
            imagePath={item?.files?.[0]?.publicFilePath || ""}
            id={item._id}
            readMoreRouting="/user/view-ourPartner"
          />
        ))}
      </div>
    </div>
  );
};

export default OurPartnerListPage;
