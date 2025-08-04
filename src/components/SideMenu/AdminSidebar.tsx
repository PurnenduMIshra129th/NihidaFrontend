import { Link, useLocation } from "react-router";

import {
  BackupOutline,
  Help,
  ISocialServicesIcon,
  MediaIcon,
  NewsIcon,
  Partnership,
  TeamLine,
  VideoIcon,
} from "../Icons/Icon";

interface ISidebarItem {
  title: string;
  route: string;
  icon: React.ReactNode;
  description: string;
  key: string;
}

const sidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    route: "/admin",
    icon: <MediaIcon />,
    description: "Admin Control Panel",
    key: "admin",
  },
  {
    title: "Focus Activity",
    route: "/admin/focus-activity-dashboard",
    icon: <MediaIcon />,
    description: "Manage focus activities",
    key: "focus-activity",
  },
  {
    title: "Upcoming Event",
    route: "/admin/upcoming-event-dashboard",
    icon: <ISocialServicesIcon />,
    description: "Manage upcoming events",
    key: "upcoming-event",
  },
  {
    title: "Document",
    route: "/admin/document-dashboard",
    icon: <NewsIcon />,
    description: "Manage documents",
    key: "document",
  },
  {
    title: "Gallery",
    route: "/admin/gallery-dashboard",
    icon: <ISocialServicesIcon />,
    description: "Manage gallery",
    key: "gallery",
  },
  {
    title: "News",
    route: "/admin/news-dashboard",
    icon: <NewsIcon />,
    description: "Manage news",
    key: "news",
  },
  {
    title: "Video",
    route: "/admin/video-dashboard",
    icon: <VideoIcon />,
    description: "Manage videos",
    key: "video",
  },
  {
    title: "Social & Images",
    route: "/admin/socialLinkAndCommonImage-dashboard",
    icon: <ISocialServicesIcon />,
    description: "Manage social links and images",
    key: "socialLinkAndCommonImage",
  },
  {
    title: "Team Member",
    route: "/admin/teamMember-dashboard",
    icon: <TeamLine />,
    description: "Manage team members",
    key: "teamMember",
  },
  {
    title: "Contact Us",
    route: "/admin/contactUs-dashboard",
    icon: <Help />,
    description: "Manage Raised Queries",
    key: "contactUs",
  },
  {
    title: "Our Partners",
    route: "/admin/ourPartner-dashboard",
    icon: <Partnership />,
    description: "Manage Our Partners",
    key: "ourPartner",
  },
  {
    title: "Backup Images",
    route: "/admin/backup-image",
    icon: <BackupOutline />,
    description: "Take backup of images",
    key: "backupImage",
  },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
function AdminSidebar({
  showSidebar,
  onClose,
}: {
  showSidebar: boolean;
  onClose: () => void;
}) {
  const location = useLocation();
  const checkActive = (item: ISidebarItem) => {
    const path = location.pathname;

    if (item.route === "/admin") {
      return path === "/admin";
    }

    return path.includes(item.key);
  };
  return (
    <div
      className={`fixed top-0 h-screen w-64 bg-white shadow-lg border-r border-gray-200 z-30 transition-transform duration-300
  overflow-y-auto
  ${showSidebar ? "translate-x-0 right-0" : "translate-x-full right-0"} 
  md:translate-x-0 md:right-auto md:left-0`}
    >
      {/* Close button for mobile */}
      <div className="md:hidden flex justify-end p-4 pt-[8rem]">
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          ✖
        </button>
      </div>

      {/* Navigation Section */}
      <div className="h-[calc(100vh-6rem)] overflow-hidden md:pt-[8rem]">
        <nav className="h-full p-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => {
            const isActive = checkActive(item);
            return (
              <Link
                key={item.route}
                to={item.route}
                onClick={onClose}
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${
                  isActive
                    ? "bg-custom_orange_1 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div
                  className={`mr-3 ${
                    isActive ? "text-white" : "text-custom_orange_1"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div
                    className={`text-xs ${
                      isActive ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default AdminSidebar;
