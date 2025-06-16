
import EmptyState from "../../components/EmptyState/EmptyState";
import { useData } from "../../contexts/context/data/DataContext";
import EditDeleteCarouselCard from "../../screens/Carousel/EditDelteCarouselCard";
import { apiRequest } from "../../services/apiService";
import { ICarouselApiData } from "../../types/api/carousel.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageAllCarouselPage() {
  const { data: apiData, fetchData } = useData<ICarouselApiData[]>();

  const handleDelete = async (id: string) => {
    try {
      await apiRequest(`carousel/deleteCarousel/${id}`, "DELETE" , undefined, true);
      await fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting carousel:", err);
    }
  };

  if (!apiData || apiData.length === 0) {
    return (
      <EmptyState />
    )
  }

  return (
    <div className="mt-[4rem] px-[1rem]">
      <div className="flex flex-row justify-center flex-wrap gap-[1.5rem] ">
        {apiData && apiData.map((item, index) => (
          <EditDeleteCarouselCard key={index} imageURL={item.imagePath} onDelete={() => handleDelete(item._id)} id={item._id} />
        ))}
      </div>
    </div>
  )
}

export default ManageAllCarouselPage