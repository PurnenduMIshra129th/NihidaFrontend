import { useEffect, useState } from "react";

import EditDeleteMediaCard from "../../components/Cards/AdminCard/EditDeleteMediaCard";
import useFetch from "../../hooks/useFetch";
import { apiRequest } from "../../services/apiService";
import { IApiResponse, IMediaApiData } from "../../types/api/media.types";
import { trimText } from "../../utils/trimText";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageAllMediaPage() {
  const { data, error, isLoading, fetchData } = useFetch<IApiResponse>("media/getAllMedia");
  const [apiData, setApiData] = useState<IMediaApiData[]>();

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
      await apiRequest(`media/deleteMedia/${id}`, "DELETE");
      // eslint-disable-next-line no-console
      console.log("Deleted media:", id);
      fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting media:", err);
    }
  };

  return (
    <div className="mt-[4rem] px-[1rem]">
      <div className="flex flex-row justify-center flex-wrap gap-[1.5rem] ">
        {apiData && apiData.map((item, index) => (
          <EditDeleteMediaCard key={index} textHeading={trimText(item.heading, 6)} textDescription={trimText(item.description, 10)} imageURL={item.imagePath} onDelete={() => handleDelete(item._id)} id={item._id}/>
        ))}
      </div>
    </div>
  )
}

export default ManageAllMediaPage