import { useEffect, useState } from "react";
import { useParams } from "react-router";

import useFetch from "../../hooks/useFetch";
import GalleryScreenBySection from "../../screens/Image/GalleryScreenBySection";
import { IBlogApiData } from "../../types/api/blog.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewBlogByIdUsersPage() {
  const { id } = useParams();
  const [details, setDetails] = useState<IBlogApiData>({ heading: "", description: "", imagePaths: [],createdAt :'' });

  const { data, } = useFetch<IBlogApiData>(`blog/getBlogById/${id}`, "GET", undefined, true);

  useEffect(() => {
    if (data && data.statusCode === 1) {
      setDetails(data.data);
    }
  }, [data]);

  return (
    <>
    <GalleryScreenBySection heading={details?.heading} description={details?.description} createdAt={details?.createdAt} imagePaths={details.imagePaths || []}/>
    </>
  );
}

export default ViewBlogByIdUsersPage;