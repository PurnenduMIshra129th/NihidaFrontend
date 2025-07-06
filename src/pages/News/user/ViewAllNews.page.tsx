import { useEffect, useState } from "react";

import InformationCard from "../../../components/Cards/InformationCard";
import EmptyState from "../../../components/EmptyState/EmptyState";
import useFetch from "../../../hooks/useFetch";
import { INewsApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const NewsListPage = () => {
  const { data } = useFetch<INewsApiResponse[]>(
    "news/getAllNews"
  );
  const [news, setNews] = useState<INewsApiResponse[]>([]);

  useEffect(() => {
    if (data && data.statusCode == 1 && data.data.length > 0) {
      setNews(data.data);
    }
  }, [data]);
  if (news.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-10 text-center">
        Explore News Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <InformationCard
            key={index}
            textTime={item.createdAt}
            textHeading={item.title}
            textDescription={item.summary}
            imagePath={item?.files?.[0]?.publicFilePath || ""}
            id={item._id}
            readMoreRouting="/user/view-news"
          />
        ))}
      </div>
    </div>
  );
};

export default NewsListPage;
