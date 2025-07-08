import { createBrowserRouter } from "react-router";

import App from "./App";
import { AddDocumentPageWrapper, AddFocusActivityPageWrapper, AddGalleryPageWrapper, AddNewsPageWrapper, AddUpcomingEventPageWrapper, AddVideoPageWrapper, AdminControlPanelPageWrapper, DocumentDashboardPageWrapper, EditDocumentPageWrapper, EditFocusActivityPageWrapper, EditGalleryPageWrapper, EditNewsPageWrapper, EditUpcomingEventPageWrapper, EditUpdateFilePageWrapper, EditUpdateImagePageWrapper, EditVideoPageWrapper, FocusActivityDashboardPageWrapper, GalleryDashboardPageWrapper, LoginPageWrapper, NewsDashboardPageWrapper, SignUpPageWrapper, UpcomingEventDashboardPageWrapper, VideoDashboardPageWrapper, ViewAllDocumentForUserPageWrapper, ViewAllFocusActivityForUserPageWrapper, ViewAllGalleryForUserPageWrapper, ViewAllImagePageWrapper, ViewAllNewsForUserPageWrapper, ViewAllUpcomingEventForUserPageWrapper, ViewAllVideoForUserPageWrapper, ViewDocumentForUserPageWrapper, ViewDocumentPageWrapper, ViewFocusActivityForUserPageWrapper, ViewFocusActivityPageWrapper, ViewGalleryForUserPageWrapper, ViewGalleryPageWrapper, ViewNewsForUserPageWrapper, ViewNewsPageWrapper, ViewUpcomingEventForUserPageWrapper, ViewUpcomingEventPageWrapper, ViewVideoForUserPageWrapper, ViewVideoPageWrapper } from "./components/HigherOrderComponent/Wrapper";
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
      
      { path: "admin", Component: AdminControlPanelPageWrapper,},
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

      { path: "admin/add-gallery", Component: AddGalleryPageWrapper },
      { path: "admin/gallery-dashboard", Component: GalleryDashboardPageWrapper },
      { path: "admin/edit-gallery/:id", Component: EditGalleryPageWrapper },
      { path: "admin/view-gallery/:id", Component: ViewGalleryPageWrapper },
      { path: "user/view-gallery/:id", Component: ViewGalleryForUserPageWrapper },
      { path: "user/view-all-gallery", Component: ViewAllGalleryForUserPageWrapper },

      { path: "admin/add-news", Component: AddNewsPageWrapper },
      { path: "admin/news-dashboard", Component: NewsDashboardPageWrapper },
      { path: "admin/edit-news/:id", Component: EditNewsPageWrapper },
      { path: "admin/view-news/:id", Component: ViewNewsPageWrapper },
      { path: "user/view-news/:id", Component: ViewNewsForUserPageWrapper },
      { path: "user/view-all-news", Component: ViewAllNewsForUserPageWrapper },

      { path: "admin/add-video", Component: AddVideoPageWrapper },
      { path: "admin/video-dashboard", Component: VideoDashboardPageWrapper },
      { path: "admin/edit-video/:id", Component: EditVideoPageWrapper },
      { path: "admin/view-video/:id", Component: ViewVideoPageWrapper },
      { path: "user/view-video/:id", Component: ViewVideoForUserPageWrapper },
      { path: "user/view-all-video", Component: ViewAllVideoForUserPageWrapper },

      { path: "admin/add-upcoming-event", Component: AddUpcomingEventPageWrapper },
      { path: "admin/upcoming-event-dashboard", Component:UpcomingEventDashboardPageWrapper },
      { path: "admin/edit-upcoming-event/:id", Component: EditUpcomingEventPageWrapper },
      { path: "admin/view-upcoming-event/:id", Component: ViewUpcomingEventPageWrapper },
      { path: "user/view-upcoming-event/:id", Component: ViewUpcomingEventForUserPageWrapper },
      { path: "user/view-all-upcoming-event", Component: ViewAllUpcomingEventForUserPageWrapper },

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