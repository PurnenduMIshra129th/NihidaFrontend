import { useEffect, useState } from "react";

import Card from "../../components/Cards/Card"
import useFetch from "../../hooks/useFetch";
import { IBlogApiData } from "../../types/api/blog.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewAllBlogPageUsers() {
  const { data, } = useFetch<IBlogApiData[]>("blog/getAllBlog");
  const [apiData, setApiData] = useState<IBlogApiData[]>();

  useEffect(() => {
    const manageData = () => {
      if (data && data.statusCode == 1 && data.data.length > 0) {
        setApiData(data.data)
      }
    }
    manageData();
  }, [data])
  return (
    <>
      <div className="mt-[4rem] px-[1rem] pb-[3rem]">
        <div className="flex flex-row justify-center flex-wrap gap-[1.5rem]">
          {apiData?.map((item, index) => (
            <Card key={index} textTime={item.createdAt} textHeading={item.heading} textDescription={item.description} imagePath={item.imagePath} id={item._id} readMoreRouting="/users/blog" />
          ))}
        </div>
      </div>
    </>
  )
}

export default ViewAllBlogPageUsers