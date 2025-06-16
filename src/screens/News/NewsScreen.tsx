import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import ViewAllButton from "../../components/Button/ViewAllButton"
import Card from "../../components/Cards/Card"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"
import useFetch from "../../hooks/useFetch"
import { INewsApiData } from "../../types/api/news.types"

// eslint-disable-next-line @typescript-eslint/naming-convention
function NewsScreen() {
    const navigate = useNavigate()
    const { data, } = useFetch<INewsApiData[]>("news/getAllNews");
    const [apiData, setApiData] = useState<INewsApiData[]>();

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
            <div className="flex justify-center items-center flex-col sm:w-[80%] w-full p-[1rem] sm:p-0 m-3">
                <SubHeading text="Crowdfunding Campaigns" />
                <Heading text="Support causes you're passionate about" className="text-custom_maroon text-center" />
                <div className="flex sm:justify-end justify-center w-full my-3">
                    <ViewAllButton text="View All Campaigns" onClick={() => navigate("/users/view-all-news")} />
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[1.5rem] my-3">
                    {apiData?.slice(0, 4)?.map((item, index) => (
                        <Card key={index} textTime={item.createdAt} textHeading={item.heading} textDescription={item.description} imagePath={item.imagePath} id={item._id} readMoreRouting="/users/news" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewsScreen