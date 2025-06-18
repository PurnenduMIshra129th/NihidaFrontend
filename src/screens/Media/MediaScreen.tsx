import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import ViewAllButton from "../../components/Button/ViewAllButton"
import Card from "../../components/Cards/Card"
import NoDataComponent from "../../components/EmptyState/NoData"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"
import useFetch from "../../hooks/useFetch"
import { IMediaApiData } from "../../types/api/media.types"

// eslint-disable-next-line @typescript-eslint/naming-convention
function MediaScreen() {
    const navigate = useNavigate()
    const { data, } = useFetch<IMediaApiData[]>("media/getAllMedia");
    const [apiData, setApiData] = useState<IMediaApiData[]>();

    useEffect(() => {
        const manageData = () => {
            if (data && data.statusCode == 1 && data.data.length > 0) {
                setApiData(data.data)
            }
        }
        manageData();
    }, [data,])
    return (
        <>
            <div className="flex justify-center items-center flex-col sm:w-[80%] w-full p-[1rem] sm:p-0 m-3">
                <SubHeading text="Media" />
                <Heading text="Press & Media coverage" className="text-custom_maroon" />
                {
                    apiData && <div className="flex sm:justify-end justify-center w-full my-3" >
                        <ViewAllButton text="View All Media" onClick={() => navigate("/users/view-all-media")} />
                    </div>
                }

                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[1.5rem] my-3">
                    {!apiData || apiData.length === 0 ? <NoDataComponent message="No media available at the moment" /> : null}
                    {apiData?.slice(0, 4)?.map((item, index) => (
                        <Card key={index} textTime={item.createdAt} textHeading={item.heading} textDescription={item.description} imagePath={item.imagePath} id={item._id} readMoreRouting="/users/media" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MediaScreen