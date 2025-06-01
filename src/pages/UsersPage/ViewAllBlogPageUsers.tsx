import { useEffect,useState } from "react";

import Card from "../../components/Cards/Card"
import useFetch from "../../hooks/useFetch";
import { IApiResponse, IBlogApiData } from "../../types/api/blog.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewAllBlogPageUsers() {
  const { data, error, isLoading} = useFetch<IApiResponse>("blog/getAllBlog");
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
  return (
    <>
    <div className="mt-[4rem] px-[1rem] pb-[3rem]">
      <div  className="flex flex-row justify-center flex-wrap gap-[1.5rem]">
        {apiData?.map((item, index) => (
          <Card key={index} textTime={item.createdAt} textHeading={item.heading} textDescription={item.description} imagePath={item.imagePath} id={item._id} readMoreRouting="/users/blog"/>
        ))}
      </div>
    </div>
    </>
  )
}

export default ViewAllBlogPageUsers