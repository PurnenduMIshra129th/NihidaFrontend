import { useEffect, useState } from "react";

import useFetch from "../../../../hooks/useFetch";
import { IDocumentApiResponse } from "../../../../types/api/api.type";
import NoDataComponent from "../../../EmptyState/NoData";
import PDFDocumentCardUser from "../../../Pdf/PdfPreviewCardUser";
import SectionDivider from "../../../SectionDivider/SectionDivider";

// eslint-disable-next-line @typescript-eslint/naming-convention
function DocumentScreen() {
  const { data } = useFetch<IDocumentApiResponse[]>("document/getAllDocument");
  const [apiData, setApiData] = useState<IDocumentApiResponse[]>();

  useEffect(() => {
    const manageData = () => {
      if (data && data.statusCode == 1 && data.data.length > 0) {
        setApiData(data.data);
      }
    };
    manageData();
  }, [data]);
  return (
    <>
      <div className="flex justify-center items-center flex-col sm:w-[80%] w-full">
        <SectionDivider
          textHeading="Documents Section"
          routePath="/user/view-all-document"
        />
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center w-full my-3">
          {!apiData || apiData.length === 0 ? (
            <NoDataComponent message="No document available at the moment" />
          ) : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiData?.slice(0, 3)?.map((item, index) => (
              <PDFDocumentCardUser
                key={index}
                document={item}
                readMoreRouting="/user/view-document"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentScreen;
