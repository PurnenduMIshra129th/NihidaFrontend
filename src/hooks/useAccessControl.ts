import { matchPath, useLocation, useNavigate } from "react-router";

import { userRole } from "../utils/constant";
import { decodeToken, getStorageItem } from "../utils/util";


type AccessResult = {
    canAccess: boolean;
    reason?: "NO_TOKEN" | "GUEST_PAGE_BLOCKED" | "NOT_ADMIN" | "UNKNOWN_ROUTE";
    redirectTo?: string;
};

const guestOnlyRoutes = ["/login", "/signup"];
const userRoutes = [

    "/user/view-focus-activity/:id",
    "/user/view-all-focus-activity",

    "/user/view-document/:id",
    "/user/view-all-document",

    "/user/view-upcoming-event/:id",
    "/user/view-all-upcoming-event",

    "/user/view-gallery/:id",
    "/user/view-all-gallery",

    "/user/view-news/:id",
    "/user/view-all-news",

    "/user/view-all-image",
];
const adminRoutes = [
    "/manage",

    "/admin/add-focus-activity",
    "/admin/focus-activity-dashboard",
    "/admin/edit-focus-activity/:id",
    "/admin/view-focus-activity/:id",

    "/admin/add-upcoming-event",
    "/admin/upcoming-event-dashboard",
    "/admin/edit-upcoming-event/:id",
    "/admin/view-upcoming-event/:id",

    "/admin/add-document",
    "/admin/document-dashboard",
    "/admin/edit-document/:id",
    "/admin/view-document/:id",

    "/admin/add-gallery",
    "/admin/gallery-dashboard",
    "/admin/edit-gallery/:id",
    "/admin/view-gallery/:id",

    "/admin/add-news",
    "/admin/news-dashboard",
    "/admin/edit-news/:id",
    "/admin/view-news/:id",
    
    "/admin/image-management/:id",
    "/admin/file-management/:id",
    ...userRoutes,
];

const matchesRoute = (patterns: string[], pathname: string) =>
    patterns.some((pattern) => matchPath(pattern, pathname));

export const useAccessControl = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const token = getStorageItem("token");
    const role = getStorageItem("role");
    const decoded = decodeToken<{ exp: number; role: string }>(token || "");

    const getAccess = (): AccessResult => {
        if (pathname === "/") return { canAccess: true };

        if (!token) {
            if (guestOnlyRoutes.includes(pathname)) return { canAccess: true };
            return { canAccess: false, reason: "NO_TOKEN", redirectTo: "/login" };
        }

        if (guestOnlyRoutes.includes(pathname)) {
            return { canAccess: false, reason: "GUEST_PAGE_BLOCKED", redirectTo: "/notAccessible" };
        }

        if (role === userRole.admin &&  decoded?.role === userRole.admin) {
            if (matchesRoute([...adminRoutes], pathname)) return { canAccess: true };
            return { canAccess: false, reason: "UNKNOWN_ROUTE", redirectTo: "/notAccessible" };
        }

        if (matchesRoute(userRoutes, pathname)) return { canAccess: true };

        return { canAccess: false, reason: "NOT_ADMIN", redirectTo: "/notAccessible" };
    };

    const enforceAccess = () => {
        const { canAccess, redirectTo } = getAccess();
        if (!canAccess && redirectTo) navigate(redirectTo);
    };

    return {
        isAuthorized: getAccess().canAccess,
        accessDetails: getAccess(),
        enforceAccess,
    };
};