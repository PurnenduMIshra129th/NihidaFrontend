import { JSX, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router";

import { eventBus } from "../../contexts/context/eventBus";
import { useAccessControl } from "../../hooks/useAccessControl";




interface IProtectedRouteProps {
    children: JSX.Element;
    requiredRole?: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
    const { isAuthorized, accessDetails } = useAccessControl();
    const [showRedirect, setShowRedirect] = useState(false);
    const hasEmitted = useRef(false);

    useEffect(() => {
        if (!isAuthorized && !hasEmitted.current) {
            hasEmitted.current = true;

            const messageMap: Record<string, string> = {
                NO_TOKEN: "You need to log in to access this page.",
                GUEST_PAGE_BLOCKED: "You're already logged in — this page is for guests only.",
                NOT_ADMIN: "You don't have permission to access this admin page.",
                UNKNOWN_ROUTE: "This page is not available.",
            };

            const reason = accessDetails.reason || "UNKNOWN_ROUTE";
            const message = messageMap[reason] || "Access denied.";

            eventBus.emit({ type: "warning", message });

            // Trigger redirect after state-safe delay
            setShowRedirect(true);
        }
    }, [isAuthorized, accessDetails]);

    if (!isAuthorized && accessDetails.redirectTo && showRedirect) {
        return <Navigate to={accessDetails.redirectTo} replace />;
    }

    return <>{children}</>;
};

