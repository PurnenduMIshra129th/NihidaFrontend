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
    "/users/view-all-media",
    "/users/view-all-blog",
    "/users/view-all-news",
    "/users/view-all-video",
    "/users/media/:id",
    "/users/blog/:id",
    "/users/news/:id",
];
const adminRoutes = [
    "/manage",
    "/manage/manage-all-blog",
    "/manage/manage-all-news",
    "/manage/manage-all-media",
    "/manage/manage-all-video",
    "/manage/manage-all-carousel",
    "/manage/manage-all-service",
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