import { useEffect, useState } from "react";

import EditMangeCard from "../../components/Cards/EditMangeCard";
import useFetch from "../../hooks/useFetch";
import { apiRequest } from "../../services/apiService";
import { trimText } from "../../utils/trimText";
interface IApiResponse {
  statusCode: number;
  message: string;
  data: IApiData[]
}
interface IApiData {
  _id: string;
  heading: string;
  description: string;
  time: string;
  __v: number;
  imagePath: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewAllMediaPage() {
  const { data, error, isLoading, fetchData } = useFetch<IApiResponse>("media/getAllMedia");
  const [apiData, setApiData] = useState<IApiData[]>();

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
          <EditMangeCard key={index} textHeading={trimText(item.heading, 6)} textDescription={trimText(item.description, 10)} imageURL={item.imagePath} onDelete={() => handleDelete(item._id)} />
        ))}
      </div>
    </div>
  )
}

export default ViewAllMediaPage