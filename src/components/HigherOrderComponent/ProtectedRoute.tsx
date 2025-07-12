import { useEffect, useRef, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

import { eventBus } from "../../contexts/context/eventBus";
import { useAccessControl } from "../../hooks/useAccessControl";
import AdminSidebar from "../SideMenu/AdminSidebar";

interface IProtectedRouteProps {
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const { isAuthorized, accessDetails } = useAccessControl();
  const [showRedirect, setShowRedirect] = useState(false);
  const hasEmitted = useRef(false);
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  // Check if current route is an admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    if (!isAuthorized && !hasEmitted.current) {
      hasEmitted.current = true;
      const messageMap: Record<string, string> = {
        NO_TOKEN: "You need to log in to access this page.",
        GUEST_PAGE_BLOCKED:
          "You're already logged in — this page is for guests only.",
        NOT_ADMIN: "You don't have permission to access this admin page.",
        UNKNOWN_ROUTE: "This page is not available.",
      };
      const reason = accessDetails.reason || "UNKNOWN_ROUTE";
      const message = messageMap[reason] || "Access denied.";
      eventBus.emit({ type: "warning", message });
      setShowRedirect(true);
    }
  }, [isAuthorized, accessDetails]);

  if (!isAuthorized && accessDetails.redirectTo && showRedirect) {
    return <Navigate to={accessDetails.redirectTo} replace />;
  }

  // If it's an admin route, render with admin layout
  if (isAdminRoute) {
    return (
      <div className="flex min-h-screen bg-gray-50 relative">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={() => setShowSidebar(true)}
          className="fixed bottom-4 right-4 md:hidden z-50 bg-orange-500 p-2 rounded-full text-white"
        >
          ☰
        </button>

        {/* Admin Sidebar */}
        <AdminSidebar
          showSidebar={showSidebar}
          onClose={() => setShowSidebar(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 w-full md:ml-64">
          {children}
          <Outlet />
        </div>
      </div>
    );
  }

  // For non-admin routes, render normally
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};
