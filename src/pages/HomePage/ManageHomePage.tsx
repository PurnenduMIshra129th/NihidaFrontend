
import ManageSocialLinkCard from "../../components/Cards/ManageSocialLinkCard"
import ManageBlogCard from "../../screens/Blog/ManageBlogCard"
import ManageCarouselCard from "../../screens/Carousel/ManageCarouselCard"
import ManageMediaCard from "../../screens/Media/ManageMediaCard"
import ManageNewsCard from "../../screens/News/ManageNewsCard"
import ManageServiceCard from "../../screens/ProductAndService/ManageServiceCard"
import ManageVideoCard from "../../screens/Video/ManageVideoCard"
// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageHomePage() {
  return (
    <>
      <div className="mt-[4rem]">
        <div className="flex flex-row justify-center flex-wrap gap-[1.5rem]">
          <ManageMediaCard />
          <ManageBlogCard />
          <ManageNewsCard />
          <ManageServiceCard />
          <ManageVideoCard />
          <ManageCarouselCard />
          <ManageSocialLinkCard />
        </div>
      </div>
    </>
  )
}

export default ManageHomePage