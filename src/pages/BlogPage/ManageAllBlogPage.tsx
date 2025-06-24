
import EmptyState from "../../components/EmptyState/EmptyState";
import { useData } from "../../contexts/context/data/DataContext";
import EditDeleteBlogCard from "../../screens/Blog/EditDeleteBlogCard";
import { apiRequest } from "../../services/apiService";
import { IBlogApiData } from "../../types/api/blog.types";
import { trimText } from "../../utils/trimText";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageAllBlogPage() {
  const { data: apiData, fetchData } = useData<IBlogApiData[]>();

  const handleDelete = async (id: string) => {
    try {
      await apiRequest(`blog/deleteBlog/${id}`, "DELETE" , undefined, true);
      await fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting Blog:", err);
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
          <EditDeleteBlogCard key={index} textHeading={trimText(item.heading, 6)} textDescription={trimText(item.description, 10)} imageURL={item.imagePaths?.[0]} onDelete={() => handleDelete(item._id ? item._id : "")} id={item._id} />
        ))}
      </div>
    </div>
  )
}

export default ManageAllBlogPage