import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Heading from "../../components/Text/Heading";
import Typography from "../../components/Text/Typography";
import useFetch from "../../hooks/useFetch";
import { IBlogResponseById } from "../../types/api/blog.types";
import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewBlogByIdUsersPage() {
  const { id } = useParams();
  const [details, setDetails] = useState({ heading: "", description: "", imagePath: "" });

  const { data, error, isLoading } = useFetch<IBlogResponseById>(`blog/getBlogById/${id}`);

  useEffect(() => {
    if (data && data.statusCode === 1) {
      setDetails(data.data);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Blog</p>;

  return (
    <div className="mt-[4rem] px-[1rem] flex justify-center flex-col items-center pb-[3rem]">
      {details ? (
        <>
          {details.imagePath && <img src={details.imagePath || defaultImage} alt="Media" className="mt-4 rounded-lg w-[90%] h-[30rem] object-cover" />}
          <div className="w-[90%]">
          <Heading text={details.heading} className="my-[3rem]"/>
          <Typography text={details.description} className="break-words text-[25px]"/>
          </div>
        </>
      ) : (
        <p>No Blog details found.</p>
      )}
    </div>
  );
}

export default ViewBlogByIdUsersPage;