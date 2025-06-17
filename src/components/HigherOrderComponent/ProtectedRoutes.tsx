import { JSX } from "react";
import { Navigate, useLocation } from "react-router";

import { getStorageItem } from "../../utils/util";

const guestOnlyRoutes = ["/login", "/signUp"];
const adminRestrictedRoutes = [
    "/manage",
    "/manage/manage-all-blog",
    "/manage/manage-all-news",
    "/manage/manage-all-media",
    "/manage/manage-all-video",
    "/manage/manage-all-carousel",
    "/manage/manage-all-service",
];


interface IProtectedRouteProps {
    children: JSX.Element;
    requiredRole?: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProtectedRoute = ({ children, }: IProtectedRouteProps) => {
    const location = useLocation();
    const token = getStorageItem("token");
    const role = getStorageItem("role");
    const path = location.pathname;

    if (!token && adminRestrictedRoutes.includes(path)) {
        return <Navigate to="/login" replace />;
    }

    if (token && guestOnlyRoutes.includes(path)) {
        return <Navigate to="/notAccessible" replace />;
    }

    if (token && adminRestrictedRoutes.includes(path) && role !== "admin") {
        return <Navigate to="/notAccessible" replace />;
    }


    return children;
};

// eslint-disable-next-line react-refresh/only-export-components
export const withAuth = <P extends object>(
    WrappedComponent: React.ComponentType<P>,

): React.FC<P> => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const ComponentWithAuth: React.FC<P> = (props) => (
        <ProtectedRoute >
            <WrappedComponent {...props} />
        </ProtectedRoute>
    );
    return ComponentWithAuth;
};
