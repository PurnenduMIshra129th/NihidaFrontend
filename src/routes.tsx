import { createBrowserRouter } from "react-router";

import App from "./App";
import { ProtectedRoute } from "./components/HigherOrderComponent/ProtectedRoute";
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
import DocumentListPage from "./pages/Documents/user/ViewAllDocument.page";
import ViewDocumentByIdPage from "./pages/Documents/user/ViewDocumentById.page";
import ImageManagementPage from "./pages/Files/admin/ImageManagement.page";
import PdfManagementPage from "./pages/Files/admin/PdfManagement.page";
import ViewAllImagePage from "./pages/Files/user/ViewAllImage.page";
import AddFocusActivityPage from "./pages/FocusActivity/admin/AddFocusActivity.page";
import EditFocusActivityPage from "./pages/FocusActivity/admin/EditFocusActivity.page";
import FocusActivityAdminDashboardPage from "./pages/FocusActivity/admin/FocusActivityAdminDashboard.page";
import FocusActivityListPage from "./pages/FocusActivity/user/ViewAllFocusActivity.page";
import ViewFocusActivityByIdPage from "./pages/FocusActivity/user/ViewFocusActivityById.page";
import AddGalleryPage from "./pages/Gallery/admin/AddGallery.page";
import EditGalleryPage from "./pages/Gallery/admin/EditGallery.page";
import GalleryAdminDashboardPage from "./pages/Gallery/admin/GalleryAdminDashboard.page";
import GalleryListPage from "./pages/Gallery/user/ViewAllGallery.page";
import ViewGalleryByIdPage from "./pages/Gallery/user/ViewGalleryById.page";
import AdminControlPanelPage from "./pages/Home/admin/AdminContolPanel.page";
import HomePage from "./pages/Home/user/Home.page";
import AddNewsPage from "./pages/News/admin/AddNews.page";
import EditNewsPage from "./pages/News/admin/EditNews.page";
import NewsAdminDashboardPage from "./pages/News/admin/NewsAdminDashboard.page";
import NewsListPage from "./pages/News/user/ViewAllNews.page";
import ViewNewsByIdPage from "./pages/News/user/ViewNewsById.page";
import PageNotAccessible from "./pages/NotFound/PageNotAccessible";
import PageNotFound from "./pages/NotFound/PageNotFound";
import EditSocialLinkAndCommonImagePage from "./pages/SocialLinkAndCommonImage/admin/EditSocialLinkAndCommonImage.page";
import SocialLinkAndCommonImageAdminDashboardPage from "./pages/SocialLinkAndCommonImage/admin/SocialLinkAndCommonImageAdminDashboard.page";
import AddUpcomingEventPage from "./pages/UpcomingEvent/admin/AddUpcomingEvent.page";
import EditUpcomingEventPage from "./pages/UpcomingEvent/admin/EditUpcomingEvent.page";
import UpcomingEventAdminDashboardPage from "./pages/UpcomingEvent/admin/UpcomingEventAdminDashboard.page";
import UpcomingEventListPage from "./pages/UpcomingEvent/user/ViewAllUpcomingEvent.page";
import ViewUpcomingEventByIdPage from "./pages/UpcomingEvent/user/ViewUpcomingEventById.page";
import AddVideoPage from "./pages/video/admin/AddVideo.page";
import EditVideoPage from "./pages/video/admin/EditVideo.page";
import VideoAdminDashboardPage from "./pages/video/admin/VideoAdminDashboard.page";
import VideoListPage from "./pages/video/user/ViewAllVideo.page";
import ViewVideoByIdPage from "./pages/video/user/ViewVideoById.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "login",
        element: (
          <ProtectedRoute>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <ProtectedRoute>
            <SignupPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "admin",
        element: <ProtectedRoute />,
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
        path: "user",
        element: <ProtectedRoute />,
        children: [
          {
            path: "view-focus-activity/:id",
            element: <ViewFocusActivityByIdPage />,
          },
          {
            path: "view-all-focus-activity",
            element: <FocusActivityListPage />,
          },
          { path: "view-gallery/:id", element: <ViewGalleryByIdPage /> },
          { path: "view-all-gallery", element: <GalleryListPage /> },
          { path: "view-news/:id", element: <ViewNewsByIdPage /> },
          { path: "view-all-news", element: <NewsListPage /> },
          { path: "view-document/:id", element: <ViewDocumentByIdPage /> },
          { path: "view-all-document", element: <DocumentListPage /> },
          {
            path: "view-upcoming-event/:id",
            element: <ViewUpcomingEventByIdPage />,
          },
          {
            path: "view-all-upcoming-event",
            element: <UpcomingEventListPage />,
          },
          { path: "view-video/:id", element: <ViewVideoByIdPage /> },
          { path: "view-all-video", element: <VideoListPage /> },
          { path: "view-all-image", element: <ViewAllImagePage /> },
        ],
      },
      {
        path: "about",
        children: [
          { index: true, element: <AboutUsPage /> },
          { path: "mission", element: <MissionPage /> },
          { path: "vision", element: <VisionPage /> },
          { path: "approch", element: <ApprochPage /> },
          { path: "plan", element: <FuturePlanPage /> },
        ],
      },

      { path: "notAccessible", element: <PageNotAccessible /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
