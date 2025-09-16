import "./ourPartnerScreen.css";

import { useEffect, useState } from "react";

import useFetch from "../../../../hooks/useFetch";
import { IOurPartnerApiResponse } from "../../../../types/api/api.type";
import NoDataComponent from "../../../EmptyState/NoData";
import Image from "../../../Image/Image";

// eslint-disable-next-line @typescript-eslint/naming-convention
function PartnerScreen() {
  const [apiData, setApiData] = useState<IOurPartnerApiResponse[]>([]);
  const { data } = useFetch<IOurPartnerApiResponse[]>("/partner/getAllPartner");

  useEffect(() => {
    if (data?.statusCode === 1) {
      setApiData(data.data);
    }
  }, [data]);
  const extendedData = [...apiData, ...apiData, ...apiData];
  if (apiData?.length === 0) {
    return <NoDataComponent message="No partner available at the moment" />;
  }

  return (
    <div className="w-[80%] px-4 pt-[3rem] pb-16 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl  font-bold text-custom_orange_1 mb-[4rem] text-center ">
        Our Partners
      </h1>
      <div className="relative overflow-hidden">
        {/* Container with exact width calculation */}
        <div className="scroll-container">
          <div className="scroll-track">
            {extendedData.map((partner, idx) => (
              <div
                key={`${partner._id}-${idx}`}
                className="partner-card min-w-[16rem] max-w-[18rem] bg-white rounded-xl shadow-md border border-orange-100 p-4 flex flex-col items-center justify-between hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {partner.files?.[0]?.publicFilePath ? (
                  <Image
                    imagePath={partner.files[0].publicFilePath}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-100 shadow-sm mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4 border border-dashed border-gray-300">
                    No Image
                  </div>
                )}
                <h3 className="text-lg font-semibold text-custom_orange_1 text-center break-words">
                  {partner.name || "Unnamed Partner"}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerScreen;
