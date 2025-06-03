import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Heading from "../../components/Text/Heading";
import Typography from "../../components/Text/Typography";
import useFetch from "../../hooks/useFetch";
import { IMediaResponseById } from "../../types/api/media.types";
import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewMediaByIdUsersPage() {
  const { id } = useParams();
  const [mediaDetails, setMediaDetails] = useState({ heading: "", description: "", imagePath: "" });

  const { data, error, isLoading } = useFetch<IMediaResponseById>(`media/getMediaById/${id}`);

  useEffect(() => {
    if (data && data.statusCode === 1) {
      setMediaDetails(data.data);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading media</p>;

  return (
    <div className="mt-[4rem] px-[1rem] flex justify-center flex-col items-center pb-[3rem]">
      {mediaDetails ? (
        <>
          {mediaDetails.imagePath && <img src={mediaDetails.imagePath || defaultImage} alt="Media" className="mt-4 rounded-lg w-[90%] h-[30rem] object-cover" />}
          <div className="w-[90%]">
          <Heading text={mediaDetails.heading} className="my-[3rem]"/>
          <Typography text={mediaDetails.description} className="break-words text-[25px]"/>
          </div>
        </>
      ) : (
        <p>No media details found.</p>
      )}
    </div>
  );
}

export default ViewMediaByIdUsersPage;