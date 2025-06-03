import ManageBlogCard from "../../components/Cards/AdminCard/ManageBlogCard"
import ManageCarouselCard from "../../components/Cards/AdminCard/ManageCarouselCard"
import ManageMediaCard from "../../components/Cards/AdminCard/ManageMediaCard"
import ManageNewsCard from "../../components/Cards/AdminCard/ManageNewsCard"
import ManageServiceCard from "../../components/Cards/AdminCard/ManageServiceCard"
import ManageSocialLinkCard from "../../components/Cards/AdminCard/ManageSocialLinkCard"
import ManageVideoCard from "../../components/Cards/AdminCard/ManageVideoCard"
// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageHomePage() {
  return (
    <>
      <div className="mt-[4rem]">
        <div className="flex flex-row justify-center flex-wrap gap-[1.5rem]">
          <ManageMediaCard />
          <ManageBlogCard />
          <ManageNewsCard/>
          <ManageServiceCard/>
          <ManageVideoCard/>
          <ManageCarouselCard/>
          <ManageSocialLinkCard/>
        </div>
      </div>
    </>
  )
}

export default ManageHomePage