import DashboardSectionCard from "../../../components/Cards/DashboardCard";
import {
  BackupOutline,
  Help,
  ISocialServicesIcon,
  MediaIcon,
  NewsIcon,
  Partnership,
  TeamLine,
  VideoIcon,
} from "../../../components/Icons/Icon";
// eslint-disable-next-line @typescript-eslint/naming-convention
function AdminControlPanelPage() {
  return (
    <>
      <div className="pt-[8rem] pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-custom_orange_1 mb-10 text-center">
          Admin Control Panel
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardSectionCard
            title="Focus Activity"
            route="/admin/focus-activity-dashboard"
            description="Edit, add and delete focus activities"
            icon={<MediaIcon />}
          />
          <DashboardSectionCard
            title="Upcoming Event"
            route="/admin/upcoming-event-dashboard"
            description="Edit, add and delete upcoming events"
            icon={<ISocialServicesIcon />}
          />
          <DashboardSectionCard
            title="Document"
            route="/admin/document-dashboard"
            description="Edit, add and delete documents"
            icon={<NewsIcon />}
          />
          <DashboardSectionCard
            title="Gallery"
            route="/admin/gallery-dashboard"
            description="Edit, add and delete gallery"
            icon={<ISocialServicesIcon />}
          />
          <DashboardSectionCard
            title="News"
            route="/admin/news-dashboard"
            description="Edit, add and delete news"
            icon={<NewsIcon />}
          />
          <DashboardSectionCard
            title="Video"
            route="/admin/video-dashboard"
            description="Edit, add and delete videos"
            icon={<VideoIcon />}
          />
          <DashboardSectionCard
            title="Social Link And Common Image"
            route="/admin/socialLinkAndCommonImage-dashboard"
            description="Edit, view and upload common Images and social links"
            icon={<ISocialServicesIcon />}
          />
          <DashboardSectionCard
            title="Team Member"
            route="/admin/teamMember-dashboard"
            description="Edit, view and upload team members"
            icon={<TeamLine />}
          />
          <DashboardSectionCard
            title="Contact Us"
            route="/admin/contactUs-dashboard"
            description="Edit, view and upload contact us"
            icon={<Help />}
          />
          <DashboardSectionCard
            title="Our Partner"
            route="/admin/ourPartner-dashboard"
            description="Edit, view and upload our partners"
            icon={<Partnership />}
          />
          <DashboardSectionCard
            title="Backup Image"
            route="/admin/backup-image"
            description="Backup Image By Folder Key"
            icon={<BackupOutline />}
          />
        </div>
      </div>
    </>
  );
}

export default AdminControlPanelPage;
