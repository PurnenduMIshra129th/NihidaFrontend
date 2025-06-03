import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Heading from "../../components/Text/Heading";
import Typography from "../../components/Text/Typography";
import useFetch from "../../hooks/useFetch";
import { INewsResponseById } from "../../types/api/news.types";
import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewNewsByIdUsersPage() {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState({ heading: "", description: "", imagePath: "" });

  const { data, error, isLoading } = useFetch<INewsResponseById>(`news/getNewsById/${id}`);

  useEffect(() => {
    if (data && data.statusCode === 1) {
      setNewsDetails(data.data);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading media</p>;

  return (
    <div className="mt-[4rem] px-[1rem] flex justify-center flex-col items-center pb-[3rem]">
      {newsDetails ? (
        <>
          {newsDetails.imagePath && <img src={newsDetails.imagePath || defaultImage} alt="Media" className="mt-4 rounded-lg w-[90%] h-[30rem] object-cover" />}
          <div className="w-[90%]">
          <Heading text={newsDetails.heading} className="my-[3rem]"/>
          <Typography text={newsDetails.description} className="break-words text-[25px]"/>
          </div>
        </>
      ) : (
        <p>No News details found.</p>
      )}
    </div>
  );
}

export default ViewNewsByIdUsersPage;