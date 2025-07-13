import { useSelector } from "react-redux";

import { selectDocument } from "../../../../contexts/slice/getAllDocument.slice";
import NoDataComponent from "../../../EmptyState/NoData";
import PDFDocumentCardUser from "../../../Pdf/PdfPreviewCardUser";
import SectionDivider from "../../../SectionDivider/SectionDivider";

// eslint-disable-next-line @typescript-eslint/naming-convention
function DocumentScreen() {
  const data  = useSelector(selectDocument);
  return (
    <>
      <div className="flex justify-center items-center flex-col sm:w-[80%] w-full">
        <SectionDivider
          textHeading="Documents Section"
          routePath="/user/view-all-document"
        />
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center w-full my-3">
          {!data || data.length === 0 ? (
            <NoDataComponent message="No document available at the moment" />
          ) : null}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.slice(0, 3)?.map((item, index) => (
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
