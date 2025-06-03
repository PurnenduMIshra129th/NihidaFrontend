import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import ViewAllButton from "../../components/Button/ViewAllButton"
import Card from "../../components/Cards/Card"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"
import useFetch from "../../hooks/useFetch"
import { IApiResponse, IBlogApiData } from "../../types/api/blog.types"
// eslint-disable-next-line @typescript-eslint/naming-convention
function BlogPage() {
    const navigate = useNavigate()
    const { data, error, isLoading } = useFetch<IApiResponse>("blog/getAllBlog");
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
            <div className="flex justify-center items-center flex-col sm:w-[80%] w-full p-[1rem] sm:p-0 m-3">
                <SubHeading text="Our Blog" />
                <Heading text="Latest news from our blog" className="text-custom_maroon" />
                <div className="flex sm:justify-end justify-center w-full my-3">
                    <ViewAllButton text="View All Blog Posts" onClick={() => navigate("/users/view-all-blog")} />
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[1.5rem] my-3">
                    {apiData?.slice(0, 4)?.map((item, index) => (
                        <Card key={index} textTime={item.createdAt} textHeading={item.heading} textDescription={item.description} imagePath={item.imagePath} id={item._id} readMoreRouting="/users/blog"/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPage