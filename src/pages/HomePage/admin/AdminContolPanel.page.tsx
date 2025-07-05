import DashboardSectionCard from "../../../components/Cards/DashboardCard";
import { ISocialServicesIcon, MediaIcon, NewsIcon } from "../../../components/Icons/Icon";
// eslint-disable-next-line @typescript-eslint/naming-convention
function AdminControlPanelPage() {
  return (
    <>
      <div className="pt-[8rem] pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-custom_orange_1 mb-10 text-center">
          Admin Control Panel
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <ManageBlogCard />
          <ManageNewsCard />
          <ManageServiceCard />
          <ManageVideoCard />
          <ManageCarouselCard />
          <ManageSocialLinkCard /> */}
          <DashboardSectionCard
            title="Focus Activity"
            route="/admin/focus-activity-dashboard"
            description="Edit, add and delete focus activities"
            icon={<MediaIcon/>}
          />
          <DashboardSectionCard
            title="Upcoming Event"
            route="/admin/upcoming-event-dashboard"
            description="Edit, add and delete upcoming events"
            icon={<ISocialServicesIcon/>}
          />
          <DashboardSectionCard
            title="Document"
            route="/admin/document-dashboard"
            description="Edit, add and delete documents"
            icon={<NewsIcon/>}
          />
          <DashboardSectionCard
            title="Gallery"
            route="/admin/gallery-dashboard"
            description="Edit, add and delete gallery"
            icon={<ISocialServicesIcon/>}
          />
        </div>
      </div>
    </>
  );
}

export default AdminControlPanelPage;
