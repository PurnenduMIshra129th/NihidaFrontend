import { useEffect, useState } from "react";
import { useParams } from "react-router";

import EmptyState from "../../components/EmptyState/EmptyState";
import Image from "../../components/Image/Image";
import Heading from "../../components/Text/Heading";
import Typography from "../../components/Text/Typography";
import useFetch from "../../hooks/useFetch";
import { IMediaApiData } from "../../types/api/media.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewMediaByIdUsersPage() {
  const { id } = useParams();
  const [mediaDetails, setMediaDetails] = useState({ heading: "", description: "", imagePath: "" });

  const { data } = useFetch<IMediaApiData>(`media/getMediaById/${id}`, "GET", undefined, true);

  useEffect(() => {
    if (data && data.statusCode === 1) {
      setMediaDetails(data.data);
    }
  }, [data]);

  return (
    <div className="mt-[4rem] px-[1rem] flex justify-center flex-col items-center pb-[3rem]">
      {mediaDetails ? (
        <>
          {mediaDetails.imagePath && <Image imagePath={mediaDetails.imagePath} className="mt-4 rounded-lg w-[90%] h-[30rem] object-cover"/>}
          <div className="w-[90%]">
            <Heading text={mediaDetails.heading} className="my-[3rem]" />
            <Typography text={mediaDetails.description} className="break-words text-[25px]" />
          </div>
        </>
      ) : (
        <EmptyState/>
      )}
    </div>
  );
}

export default ViewMediaByIdUsersPage;