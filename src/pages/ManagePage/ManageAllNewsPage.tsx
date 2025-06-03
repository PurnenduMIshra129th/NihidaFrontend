import { useEffect, useState } from "react";

import EditDeleteNewsCard from "../../components/Cards/AdminCard/EditDeleteNewsCard";
import useFetch from "../../hooks/useFetch";
import { apiRequest } from "../../services/apiService";
import { IApiResponse, INewsApiData,  } from "../../types/api/news.types";
import { trimText } from "../../utils/trimText";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageAllNewsPage() {
  const { data, error, isLoading, fetchData } = useFetch<IApiResponse>("news/getAllNews");
  const [apiData, setApiData] = useState<INewsApiData[]>();

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
      await apiRequest(`news/deleteNews/${id}`, "DELETE");
      // eslint-disable-next-line no-console
      console.log("Deleted news:", id);
      fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting news:", err);
    }
  };

  return (
    <div className="mt-[4rem] px-[1rem]">
      <div className="flex flex-row justify-center flex-wrap gap-[1.5rem] ">
        {apiData && apiData.map((item, index) => (
          <EditDeleteNewsCard key={index} textHeading={trimText(item.heading, 6)} textDescription={trimText(item.description, 10)} imageURL={item.imagePath} onDelete={() => handleDelete(item._id)} id={item._id}/>
        ))}
      </div>
    </div>
  )
}

export default ManageAllNewsPage