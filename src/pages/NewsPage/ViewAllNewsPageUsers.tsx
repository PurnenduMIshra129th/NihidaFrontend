import { useEffect, useState } from "react";

import Card from "../../components/Cards/Card";
import EmptyState from "../../components/EmptyState/EmptyState";
import useFetch from "../../hooks/useFetch";
import { INewsApiData } from "../../types/api/news.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewAllNewsPageUsers() {
  const { data, error, isLoading } = useFetch<INewsApiData[]>("news/getAllNews");
  const [apiData, setApiData] = useState<INewsApiData[]>();

  useEffect(() => {
    const manageData = () => {
      if (data && data.statusCode == 1 && data.data.length > 0) {
        setApiData(data.data)
      }
    }
    manageData();
  }, [data, error, isLoading])
  
  if (!apiData || apiData.length === 0) {
    return (
      <EmptyState />
    )
  }
  return (
    <div className="mt-[4rem] px-[1rem] pb-[3rem]">
      <div className="flex flex-row justify-center flex-wrap gap-[1.5rem]">
        {apiData?.map((item, index) => (
          <Card key={index} textTime={item.createdAt} textHeading={item.heading} textDescription={item.description} imagePath={item.imagePath} id={item._id} readMoreRouting="/users/news" />
        ))}
      </div>
    </div>
  )
}

export default ViewAllNewsPageUsers