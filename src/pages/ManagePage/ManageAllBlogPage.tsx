import { useEffect, useState } from "react";

import EditDeleteBlogCard from "../../components/Cards/AdminCard/EditDeleteBlogCard";
import useFetch from "../../hooks/useFetch";
import { apiRequest } from "../../services/apiService";
import { IApiResponse, IBlogApiData } from "../../types/api/blog.types";
import { trimText } from "../../utils/trimText";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageAllBlogPage() {
  const { data, error, isLoading, fetchData } = useFetch<IApiResponse>("blog/getAllBlog");
  const [apiData, setApiData] = useState<IBlogApiData[]>();

  useEffect(() => {
    const manageData = () => {
      if (data && data.statusCode == 1 && data.data.length > 0) {
        setApiData(data.data)
      }
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
      if (isLoading) {
        // eslint-disable-next-line no-console
        console.log(isLoading)
      }
    }
    manageData();
  }, [data, error, isLoading])

  const handleDelete = async (id: string) => {
    try {
      await apiRequest(`blog/deleteBlog/${id}`, "DELETE");
      // eslint-disable-next-line no-console
      console.log("Deleted Blog:", id);
      fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting Blog:", err);
    }
  };

  return (
    <div className="mt-[4rem] px-[1rem]">
      <div className="flex flex-row justify-center flex-wrap gap-[1.5rem] ">
        {apiData && apiData.map((item, index) => (
          <EditDeleteBlogCard key={index} textHeading={trimText(item.heading, 6)} textDescription={trimText(item.description, 10)} imageURL={item.imagePath} onDelete={() => handleDelete(item._id)} id={item._id}/>
        ))}
      </div>
    </div>
  )
}

export default ManageAllBlogPage