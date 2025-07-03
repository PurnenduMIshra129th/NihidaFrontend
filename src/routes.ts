import { createBrowserRouter } from "react-router";

import App from "./App";
import { AddDocumentPageWrapper, AddFocusActivityPageWrapper, AddUpcomingEventPageWrapper, AdminControlPanelPageWrapper, DocumentDashboardPageWrapper, EditDocumentPageWrapper, EditFocusActivityPageWrapper, EditUpcomingEventPageWrapper, EditUpdateFilePageWrapper, EditUpdateImagePageWrapper, FocusActivityDashboardPageWrapper, LoginPageWrapper, ManageAllBlogPageWrapper, ManageAllCarouselPageWrapper, ManageAllMediaPageWrapper, ManageAllNewsPageWrapper, ManageAllServicePageWrapper, ManageAllVideoPageWrapper, SignUpPageWrapper, UpcomingEventDashboardPageWrapper, ViewAllBlogPageUsersWrapper, ViewAllDocumentForUserPageWrapper, ViewAllFocusActivityForUserPageWrapper, ViewAllImagePageWrapper, ViewAllMediaPageUsersWrapper, ViewAllNewsPageUsersWrapper, ViewAllUpcomingEventForUserPageWrapper, ViewAllVideoPageUsersWrapper, ViewBlogByIdUsersPageWrapper, ViewDocumentForUserPageWrapper, ViewDocumentPageWrapper, ViewFocusActivityForUserPageWrapper, ViewFocusActivityPageWrapper, ViewMediaByIdUsersPageWrapper, ViewNewsByIdUsersPageWrapper, ViewUpcomingEventForUserPageWrapper, ViewUpcomingEventPageWrapper } from "./components/HigherOrderComponent/Wrapper";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ApprochPage from "./pages/AboutUsPage/ApprochPage";
import FuturePlanPage from "./pages/AboutUsPage/FuturePlanPage";
import MissionPage from "./pages/AboutUsPage/MissionPage";
import VisionPage from "./pages/AboutUsPage/VisionPage";
import HomePage from "./pages/HomePage/user/HomePage";
import { Parent } from "./pages/Learning/Example";
import PageNotAccessible from "./pages/NotFoundPage/PageNotAccessible";
import PageNotFound from "./pages/NotFoundPage/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPageWrapper },
      { path: "signup", Component: SignUpPageWrapper },
      
      { path: "manage", Component: AdminControlPanelPageWrapper,},
      { path: "admin/image-management/:id", Component: EditUpdateImagePageWrapper },
      { path: "admin/file-management/:id", Component: EditUpdateFilePageWrapper },
      { path: "user/view-all-image", Component: ViewAllImagePageWrapper },

      { path: "admin/add-focus-activity", Component: AddFocusActivityPageWrapper },
      { path: "admin/focus-activity-dashboard", Component: FocusActivityDashboardPageWrapper },
      { path: "admin/edit-focus-activity/:id", Component: EditFocusActivityPageWrapper },
      { path: "admin/view-focus-activity/:id", Component: ViewFocusActivityPageWrapper },
      { path: "user/view-focus-activity/:id", Component: ViewFocusActivityForUserPageWrapper },
      { path: "user/view-all-focus-activity", Component: ViewAllFocusActivityForUserPageWrapper },

      { path: "admin/add-document", Component: AddDocumentPageWrapper },
      { path: "admin/document-dashboard", Component: DocumentDashboardPageWrapper },
      { path: "admin/edit-document/:id", Component: EditDocumentPageWrapper },
      { path: "admin/view-document/:id", Component: ViewDocumentPageWrapper },
      { path: "user/view-document/:id", Component: ViewDocumentForUserPageWrapper },
      { path: "user/view-all-document", Component: ViewAllDocumentForUserPageWrapper },

      { path: "admin/add-upcoming-event", Component: AddUpcomingEventPageWrapper },
      { path: "admin/upcoming-event-dashboard", Component:UpcomingEventDashboardPageWrapper },
      { path: "admin/edit-upcoming-event/:id", Component: EditUpcomingEventPageWrapper },
      { path: "admin/view-upcoming-event/:id", Component: ViewUpcomingEventPageWrapper },
      { path: "user/view-upcoming-event/:id", Component: ViewUpcomingEventForUserPageWrapper },
      { path: "user/view-all-upcoming-event", Component: ViewAllUpcomingEventForUserPageWrapper },

      { path: "manage/manage-all-media", Component: ManageAllMediaPageWrapper },
      { path: "manage/manage-all-blog", Component: ManageAllBlogPageWrapper },
      { path: "manage/manage-all-news", Component: ManageAllNewsPageWrapper },
      { path: "manage/manage-all-service", Component: ManageAllServicePageWrapper },
      { path: "manage/manage-all-video", Component: ManageAllVideoPageWrapper },
      { path: "manage/manage-all-carousel", Component: ManageAllCarouselPageWrapper },
      { path: "users/view-all-media", Component: ViewAllMediaPageUsersWrapper },
      { path: "users/view-all-blog", Component: ViewAllBlogPageUsersWrapper },
      { path: "users/view-all-news", Component: ViewAllNewsPageUsersWrapper },
      { path: "users/view-all-video", Component: ViewAllVideoPageUsersWrapper },
      { path: "users/media/:id", Component: ViewMediaByIdUsersPageWrapper },
      { path: "users/blog/:id", Component: ViewBlogByIdUsersPageWrapper},
      { path: "users/news/:id", Component: ViewNewsByIdUsersPageWrapper },
      { path: "learning", Component: Parent },

      { path:"about/mission", Component: MissionPage },
      { path:"about/vision", Component: VisionPage },
      { path:"about/approch", Component: ApprochPage },
      { path:"about/plan", Component: FuturePlanPage },
      { path:"about", Component: AboutUsPage },
      
      { path: "notAccessible", Component: PageNotAccessible },
      { path: "*", Component: PageNotFound },

    ],
  },
]);