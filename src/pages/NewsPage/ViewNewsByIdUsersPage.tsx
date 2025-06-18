import { useEffect, useState } from "react";
import { useParams } from "react-router";

import EmptyState from "../../components/EmptyState/EmptyState";
import Heading from "../../components/Text/Heading";
import Typography from "../../components/Text/Typography";
import useFetch from "../../hooks/useFetch";
import { INewsApiData } from "../../types/api/news.types";
import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewNewsByIdUsersPage() {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState({ heading: "", description: "", imagePath: "" });

  const { data } = useFetch<INewsApiData>(`news/getNewsById/${id}`, "GET", undefined, true);

  useEffect(() => {
    if (data && data.statusCode === 1) {
      setNewsDetails(data.data);
    }
  }, [data]);

 
  return (
    <div className="mt-[4rem] px-[1rem] flex justify-center flex-col items-center pb-[3rem]">
      {newsDetails ? (
        <>
          {newsDetails.imagePath && <img src={newsDetails.imagePath || defaultImage} alt="Media" className="mt-4 rounded-lg w-[90%] h-[30rem] object-cover" />}
          <div className="w-[90%]">
            <Heading text={newsDetails.heading} className="my-[3rem]" />
            <Typography text={newsDetails.description} className="break-words text-[25px]" />
          </div>
        </>
      ) : (
        <EmptyState/>
      )}
    </div>
  );
}

export default ViewNewsByIdUsersPage;