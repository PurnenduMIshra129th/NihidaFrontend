import { useEffect, useState } from "react";

import EditDeleteCarouselCard from "../../components/Cards/AdminCard/EditDelteCarouselCard";
import useFetch from "../../hooks/useFetch";
import { apiRequest } from "../../services/apiService";
import { IApiResponse, ICarouselApiData } from "../../types/api/carousel.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageAllCarouselPage() {
  const { data, error, isLoading, fetchData } = useFetch<IApiResponse>("carousel/getAllCarousel");
  const [apiData, setApiData] = useState<ICarouselApiData[]>();

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
      await apiRequest(`carousel/deleteCarousel/${id}`, "DELETE");
      // eslint-disable-next-line no-console
      console.log("Deleted carousel:", id);
      fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting carousel:", err);
    }
  };

  return (
    <div className="mt-[4rem] px-[1rem]">
      <div className="flex flex-row justify-center flex-wrap gap-[1.5rem] ">
        {apiData && apiData.map((item, index) => (
          <EditDeleteCarouselCard key={index} imageURL={item.imagePath} onDelete={() => handleDelete(item._id)} id={item._id}/>
        ))}
      </div>
    </div>
  )
}

export default ManageAllCarouselPage