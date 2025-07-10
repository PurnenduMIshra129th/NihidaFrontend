import { createBrowserRouter } from "react-router";

import App from "./App";
import { ProtectedRouteAdmin } from "./components/HigherOrderComponent/ProtectedRouteAdmin";
import { ProtectedRoute } from "./components/HigherOrderComponent/ProtectedRoutes";
import AboutUsPage from "./pages/AboutUs/AboutUs.page";
import ApprochPage from "./pages/AboutUs/Approch.page";
import FuturePlanPage from "./pages/AboutUs/FuturePlan.page";
import MissionPage from "./pages/AboutUs/Mission.page";
import VisionPage from "./pages/AboutUs/Vision.page";
import LoginPage from "./pages/Authentication/Login.page";
import SignupPage from "./pages/Authentication/Signup.page";
import AddDocumentPage from "./pages/Documents/admin/AddDocument.page";
import DocumentAdminDashboardPage from "./pages/Documents/admin/DocumentAdminDashboard.page";
import EditDocumentPage from "./pages/Documents/admin/EditDocument.page";
import ViewDocumentByIdPage from "./pages/Documents/user/ViewDocumentById.page";
import ImageManagementPage from "./pages/Files/admin/ImageManagement.page";
import PdfManagementPage from "./pages/Files/admin/PdfManagement.page";
import AddFocusActivityPage from "./pages/FocusActivity/admin/AddFocusActivity.page";
import EditFocusActivityPage from "./pages/FocusActivity/admin/EditFocusActivity.page";
import FocusActivityAdminDashboardPage from "./pages/FocusActivity/admin/FocusActivityAdminDashboard.page";
import FocusActivityListPage from "./pages/FocusActivity/user/ViewAllFocusActivity.page";
import ViewFocusActivityByIdPage from "./pages/FocusActivity/user/ViewFocusActivityById.page";
import AddGalleryPage from "./pages/Gallery/admin/AddGallery.page";
import EditGalleryPage from "./pages/Gallery/admin/EditGallery.page";
import GalleryAdminDashboardPage from "./pages/Gallery/admin/GalleryAdminDashboard.page";
import ViewGalleryByIdPage from "./pages/Gallery/user/ViewGalleryById.page";
import AdminControlPanelPage from "./pages/Home/admin/AdminContolPanel.page";
import HomePage from "./pages/Home/user/Home.page";
import AddNewsPage from "./pages/News/admin/AddNews.page";
import EditNewsPage from "./pages/News/admin/EditNews.page";
import NewsAdminDashboardPage from "./pages/News/admin/NewsAdminDashboard.page";
import ViewNewsByIdPage from "./pages/News/user/ViewNewsById.page";
import PageNotAccessible from "./pages/NotFound/PageNotAccessible";
import PageNotFound from "./pages/NotFound/PageNotFound";
import EditSocialLinkAndCommonImagePage from "./pages/SocialLinkAndCommonImage/admin/EditSocialLinkAndCommonImage.page";
import SocialLinkAndCommonImageAdminDashboardPage from "./pages/SocialLinkAndCommonImage/admin/SocialLinkAndCommonImageAdminDashboard.page";
import AddUpcomingEventPage from "./pages/UpcomingEvent/admin/AddUpcomingEvent.page";
import EditUpcomingEventPage from "./pages/UpcomingEvent/admin/EditUpcomingEvent.page";
import UpcomingEventAdminDashboardPage from "./pages/UpcomingEvent/admin/UpcomingEventAdminDashboard.page";
import ViewUpcomingEventByIdPage from "./pages/UpcomingEvent/user/ViewUpcomingEventById.page";
import AddVideoPage from "./pages/video/admin/AddVideo.page";
import EditVideoPage from "./pages/video/admin/EditVideo.page";
import VideoAdminDashboardPage from "./pages/video/admin/VideoAdminDashboard.page";
import ViewVideoByIdPage from "./pages/video/user/ViewVideoById.page";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: App,
//     children: [
//       { index: true, Component: HomePage },
//       { path: "login", Component: LoginPageWrapper },
//       { path: "signup", Component: SignUpPageWrapper },

//       { path: "admin", Component: AdminControlPanelPageWrapper,},
//       { path: "admin/image-management/:id", Component: EditUpdateImagePageWrapper },
//       { path: "admin/file-management/:id", Component: EditUpdateFilePageWrapper },
//       { path: "user/view-all-image", Component: ViewAllImagePageWrapper },

//       { path: "admin/add-focus-activity", Component: AddFocusActivityPageWrapper },
//       { path: "admin/focus-activity-dashboard", Component: FocusActivityDashboardPageWrapper },
//       { path: "admin/edit-focus-activity/:id", Component: EditFocusActivityPageWrapper },
//       { path: "admin/view-focus-activity/:id", Component: ViewFocusActivityPageWrapper },
//       { path: "user/view-focus-activity/:id", Component: ViewFocusActivityForUserPageWrapper },
//       { path: "user/view-all-focus-activity", Component: ViewAllFocusActivityForUserPageWrapper },

//       { path: "admin/add-document", Component: AddDocumentPageWrapper },
//       { path: "admin/document-dashboard", Component: DocumentDashboardPageWrapper },
//       { path: "admin/edit-document/:id", Component: EditDocumentPageWrapper },
//       { path: "admin/view-document/:id", Component: ViewDocumentPageWrapper },
//       { path: "user/view-document/:id", Component: ViewDocumentForUserPageWrapper },
//       { path: "user/view-all-document", Component: ViewAllDocumentForUserPageWrapper },

//       { path: "admin/add-gallery", Component: AddGalleryPageWrapper },
//       { path: "admin/gallery-dashboard", Component: GalleryDashboardPageWrapper },
//       { path: "admin/edit-gallery/:id", Component: EditGalleryPageWrapper },
//       { path: "admin/view-gallery/:id", Component: ViewGalleryPageWrapper },
//       { path: "user/view-gallery/:id", Component: ViewGalleryForUserPageWrapper },
//       { path: "user/view-all-gallery", Component: ViewAllGalleryForUserPageWrapper },

//       { path: "admin/add-news", Component: AddNewsPageWrapper },
//       { path: "admin/news-dashboard", Component: NewsDashboardPageWrapper },
//       { path: "admin/edit-news/:id", Component: EditNewsPageWrapper },
//       { path: "admin/view-news/:id", Component: ViewNewsPageWrapper },
//       { path: "user/view-news/:id", Component: ViewNewsForUserPageWrapper },
//       { path: "user/view-all-news", Component: ViewAllNewsForUserPageWrapper },

//       { path: "admin/socialLinkAndCommonImage-dashboard", Component: SocialLinkAndCommonImageDashboardPageWrapper },
//       { path: "admin/edit-socialLinkAndCommonImage/:id", Component: EditSocialLinkAndCommonImagePageWrapper },

//       { path: "admin/add-video", Component: AddVideoPageWrapper },
//       { path: "admin/video-dashboard", Component: VideoDashboardPageWrapper },
//       { path: "admin/edit-video/:id", Component: EditVideoPageWrapper },
//       { path: "admin/view-video/:id", Component: ViewVideoPageWrapper },
//       { path: "user/view-video/:id", Component: ViewVideoForUserPageWrapper },
//       { path: "user/view-all-video", Component: ViewAllVideoForUserPageWrapper },

//       { path: "admin/add-upcoming-event", Component: AddUpcomingEventPageWrapper },
//       { path: "admin/upcoming-event-dashboard", Component:UpcomingEventDashboardPageWrapper },
//       { path: "admin/edit-upcoming-event/:id", Component: EditUpcomingEventPageWrapper },
//       { path: "admin/view-upcoming-event/:id", Component: ViewUpcomingEventPageWrapper },
//       { path: "user/view-upcoming-event/:id", Component: ViewUpcomingEventForUserPageWrapper },
//       { path: "user/view-all-upcoming-event", Component: ViewAllUpcomingEventForUserPageWrapper },

//       { path: "learning", Component: Parent },

//       { path:"about/mission", Component: MissionPage },
//       { path:"about/vision", Component: VisionPage },
//       { path:"about/approch", Component: ApprochPage },
//       { path:"about/plan", Component: FuturePlanPage },
//       { path:"about", Component: AboutUsPage },

//       { path: "notAccessible", Component: PageNotAccessible },
//       { path: "*", Component: PageNotFound },

//     ],
//   },
// ]);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },

      {
        path: "admin",
        element: <ProtectedRouteAdmin />,
        children: [
          { index: true, element: <AdminControlPanelPage /> },
          { path: "add-focus-activity", element: <AddFocusActivityPage /> },
          {
            path: "focus-activity-dashboard",
            element: <FocusActivityAdminDashboardPage />,
          },
          {
            path: "edit-focus-activity/:id",
            element: <EditFocusActivityPage />,
          },
          {
            path: "view-focus-activity/:id",
            element: <ViewFocusActivityByIdPage />,
          },
          { path: "add-gallery", element: <AddGalleryPage /> },
          { path: "gallery-dashboard", element: <GalleryAdminDashboardPage /> },
          { path: "edit-gallery/:id", element: <EditGalleryPage /> },
          { path: "view-gallery/:id", element: <ViewGalleryByIdPage /> },
          { path: "add-news", element: <AddNewsPage /> },
          { path: "news-dashboard", element: <NewsAdminDashboardPage /> },
          { path: "edit-news/:id", element: <EditNewsPage /> },
          { path: "view-news/:id", element: <ViewNewsByIdPage /> },
          { path: "add-document", element: <AddDocumentPage /> },
          {
            path: "document-dashboard",
            element: <DocumentAdminDashboardPage />,
          },
          { path: "edit-document/:id", element: <EditDocumentPage /> },
          { path: "view-document/:id", element: <ViewDocumentByIdPage /> },
          { path: "add-upcoming-event", element: <AddUpcomingEventPage /> },
          {
            path: "upcoming-event-dashboard",
            element: <UpcomingEventAdminDashboardPage />,
          },
          {
            path: "edit-upcoming-event/:id",
            element: <EditUpcomingEventPage />,
          },
          {
            path: "view-upcoming-event/:id",
            element: <ViewUpcomingEventByIdPage />,
          },
          { path: "add-video", element: <AddVideoPage /> },
          { path: "video-dashboard", element: <VideoAdminDashboardPage /> },
          { path: "edit-video/:id", element: <EditVideoPage /> },
          { path: "view-video/:id", element: <ViewVideoByIdPage /> },
          { path: "image-management/:id", element: <ImageManagementPage /> },
          { path: "file-management/:id", element: <PdfManagementPage /> },
          {
            path: "socialLinkAndCommonImage-dashboard",
            element: <SocialLinkAndCommonImageAdminDashboardPage />,
          },
          {
            path: "edit-socialLinkAndCommonImage/:id",
            element: <EditSocialLinkAndCommonImagePage />,
          },
        ],
      },

      {
        path: "user/view-focus-activity/:id",
        element: (
          <ProtectedRoute>
            <ViewFocusActivityByIdPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "user/view-all-focus-activity",
        element: (
          <ProtectedRoute>
            <FocusActivityListPage />
          </ProtectedRoute>
        ),
      },
      { path: "about/mission", element: <MissionPage /> },
      { path: "about/vision", element: <VisionPage /> },
      { path: "about/approch", element: <ApprochPage /> },
      { path: "about/plan", element: <FuturePlanPage /> },
      { path: "about", element: <AboutUsPage /> },

      { path: "notAccessible", element: <PageNotAccessible /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
