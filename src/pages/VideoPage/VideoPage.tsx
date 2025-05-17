import ViewAllButton from "../../components/Button/ViewAllButton"
import VideoCard from "../../components/Cards/VideoCard"
import Heading from "../../components/Text/Heading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function VideoPage() {
    return (
        <>
            <div className="flex justify-center items-center flex-col sm:w-[80%] w-full p-[1rem] sm:p-0 m-3">
                <Heading text="Webinar Videos"/>
                <div className="flex sm:justify-end justify-center w-full my-3">
                    <ViewAllButton text="View All Videos" />
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap w-full sm:gap-[4.5rem] gap-2 my-3">
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