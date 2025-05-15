import ViewAllButton from "../../components/Button/ViewAllButton"
import VideoCard from "../../components/Cards/VideoCard"
import Heading from "../../components/Text/Heading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function VideoPage() {
    return (
        <>
            <div className="flex justify-center items-center flex-col w-[80%] m-3">
                <Heading text="Webinar Videos"/>
                <div className="flex justify-end w-full my-3">
                    <ViewAllButton text="View All Videos" />
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[4.5rem] my-3">
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </div>
            </div>
        </>
    )
}

export default VideoPage