import { Link, useLocation } from "react-router";

import {
  ISocialServicesIcon,
  MediaIcon,
  NewsIcon,
  VideoIcon,
} from "../Icons/Icon";

interface ISidebarItem {
  title: string;
  route: string;
  icon: React.ReactNode;
  description: string;
}

const sidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    route: "/admin",
    icon: <MediaIcon />,
    description: "Admin Control Panel",
  },
  {
    title: "Focus Activity",
    route: "/admin/focus-activity-dashboard",
    icon: <MediaIcon />,
    description: "Manage focus activities",
  },
  {
    title: "Upcoming Event",
    route: "/admin/upcoming-event-dashboard",
    icon: <ISocialServicesIcon />,
    description: "Manage upcoming events",
  },
  {
    title: "Document",
    route: "/admin/document-dashboard",
    icon: <NewsIcon />,
    description: "Manage documents",
  },
  {
    title: "Gallery",
    route: "/admin/gallery-dashboard",
    icon: <ISocialServicesIcon />,
    description: "Manage gallery",
  },
  {
    title: "News",
    route: "/admin/news-dashboard",
    icon: <NewsIcon />,
    description: "Manage news",
  },
  {
    title: "Video",
    route: "/admin/video-dashboard",
    icon: <VideoIcon />,
    description: "Manage videos",
  },
  {
    title: "Social & Images",
    route: "/admin/socialLinkAndCommonImage-dashboard",
    icon: <ISocialServicesIcon />,
    description: "Manage social links and images",
  },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 z-30">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-custom_orange_1">Admin Panel</h2>
      </div>

      {/* Navigation */}
      <nav className="p-4 pt-[4rem] space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.route}
            to={item.route}
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${
              location.pathname === item.route
                ? "bg-custom_orange_1 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div
              className={`mr-3 ${
                location.pathname === item.route
                  ? "text-white"
                  : "text-custom_orange_1"
              }`}
            >
              {item.icon}
            </div>
            <div>
              <div className="font-medium">{item.title}</div>
              <div
                className={`text-xs ${
                  location.pathname === item.route
                    ? "text-gray-200"
                    : "text-gray-500"
                }`}
              >
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
