
import EditDeleteNewsCard from "../../components/Cards/AdminCard/EditDeleteNewsCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import { useData } from "../../contexts/context/data/DataContext";
import { apiRequest } from "../../services/apiService";
import { INewsApiData, } from "../../types/api/news.types";
import { trimText } from "../../utils/trimText";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageAllNewsPage() {
  const { data: apiData, fetchData } = useData<INewsApiData[]>();

  const handleDelete = async (id: string) => {
    try {
      await apiRequest(`news/deleteNews/${id}`, "DELETE" , undefined, true);
      await fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting news:", err);
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
          <EditDeleteNewsCard key={index} textHeading={trimText(item.heading, 6)} textDescription={trimText(item.description, 10)} imageURL={item.imagePath} onDelete={() => handleDelete(item._id)} id={item._id} />
        ))}
      </div>
    </div>
  )
}

export default ManageAllNewsPage