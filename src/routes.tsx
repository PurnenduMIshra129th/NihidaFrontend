import React from "react";
import { createBrowserRouter } from "react-router";

import App from "./App";
import { ProtectedRoute } from "./components/HigherOrderComponent/ProtectedRoute";
import RouteSuspense from "./components/HigherOrderComponent/RouteSuspense";

// eslint-disable-next-line @typescript-eslint/naming-convention
const BackupImagePage = React.lazy(
  () => import("./pages/Backup/admin/BackupImage.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const OurPartnerDetailByIdPage = React.lazy(
  () => import("./pages/OurPartner/admin/OurPartnerDetailById.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditOurPartnerPage = React.lazy(
  () => import("./pages/OurPartner/admin/EditOurPartner.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const AddOurPartnerPage = React.lazy(
  () => import("./pages/OurPartner/admin/AddOurPartner.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const OurPartnerAdminDashboardPage = React.lazy(
  () => import("./pages/OurPartner/admin/OurPartnerAdminDashboard.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const AddContactUsPage = React.lazy(
  () => import("./pages/ContactUs/user/AddContactUs.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ContactUsAdminDashboardPage = React.lazy(
  () => import("./pages/ContactUs/admin/ContactUsAdminDashboard.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditContactUsPage = React.lazy(
  () => import("./pages/ContactUs/admin/EditContactUs.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ContactUsDetailByIdPage = React.lazy(
  () => import("./pages/ContactUs/admin/ContactUsDetailById.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const AboutUsPage = React.lazy(() => import("./pages/AboutUs/AboutUs.page"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const ApprochPage = React.lazy(() => import("./pages/AboutUs/Approch.page"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const FuturePlanPage = React.lazy(
  () => import("./pages/AboutUs/FuturePlan.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const MissionPage = React.lazy(() => import("./pages/AboutUs/Mission.page"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const VisionPage = React.lazy(() => import("./pages/AboutUs/Vision.page"));

// eslint-disable-next-line @typescript-eslint/naming-convention
const LoginPage = React.lazy(() => import("./pages/Authentication/Login.page"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const SignupPage = React.lazy(
  () => import("./pages/Authentication/Signup.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const AddDocumentPage = React.lazy(
  () => import("./pages/Documents/admin/AddDocument.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const DocumentAdminDashboardPage = React.lazy(
  () => import("./pages/Documents/admin/DocumentAdminDashboard.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditDocumentPage = React.lazy(
  () => import("./pages/Documents/admin/EditDocument.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const DocumentListPage = React.lazy(
  () => import("./pages/Documents/user/ViewAllDocument.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewDocumentByIdPage = React.lazy(
  () => import("./pages/Documents/user/ViewDocumentById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const ImageManagementPage = React.lazy(
  () => import("./pages/Files/admin/ImageManagement.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const PdfManagementPage = React.lazy(
  () => import("./pages/Files/admin/PdfManagement.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewAllImagePage = React.lazy(
  () => import("./pages/Files/user/ViewAllImage.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const AddFocusActivityPage = React.lazy(
  () => import("./pages/FocusActivity/admin/AddFocusActivity.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditFocusActivityPage = React.lazy(
  () => import("./pages/FocusActivity/admin/EditFocusActivity.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const FocusActivityAdminDashboardPage = React.lazy(
  () => import("./pages/FocusActivity/admin/FocusActivityAdminDashboard.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewFocusActivityForAdminPage = React.lazy(
  () => import("./pages/FocusActivity/admin/FocusActivityDetailById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const FocusActivityListPage = React.lazy(
  () => import("./pages/FocusActivity/user/ViewAllFocusActivity.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewFocusActivityByIdPage = React.lazy(
  () => import("./pages/FocusActivity/user/ViewFocusActivityById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const AddGalleryPage = React.lazy(
  () => import("./pages/Gallery/admin/AddGallery.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditGalleryPage = React.lazy(
  () => import("./pages/Gallery/admin/EditGallery.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const GalleryAdminDashboardPage = React.lazy(
  () => import("./pages/Gallery/admin/GalleryAdminDashboard.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const GalleryListPage = React.lazy(
  () => import("./pages/Gallery/user/ViewAllGallery.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewGalleryByIdPage = React.lazy(
  () => import("./pages/Gallery/user/ViewGalleryById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const AdminControlPanelPage = React.lazy(
  () => import("./pages/Home/admin/AdminContolPanel.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const HomePage = React.lazy(() => import("./pages/Home/user/Home.page"));

// eslint-disable-next-line @typescript-eslint/naming-convention
const AddNewsPage = React.lazy(() => import("./pages/News/admin/AddNews.page"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditNewsPage = React.lazy(
  () => import("./pages/News/admin/EditNews.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const NewsAdminDashboardPage = React.lazy(
  () => import("./pages/News/admin/NewsAdminDashboard.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const NewsListPage = React.lazy(
  () => import("./pages/News/user/ViewAllNews.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewNewsByIdPage = React.lazy(
  () => import("./pages/News/user/ViewNewsById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const PageNotAccessible = React.lazy(
  () => import("./pages/NotFound/PageNotAccessible")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const PageNotFound = React.lazy(() => import("./pages/NotFound/PageNotFound"));

// eslint-disable-next-line @typescript-eslint/naming-convention
const EditSocialLinkAndCommonImagePage = React.lazy(
  () =>
    import(
      "./pages/SocialLinkAndCommonImage/admin/EditSocialLinkAndCommonImage.page"
    )
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const SocialLinkAndCommonImageAdminDashboardPage = React.lazy(
  () =>
    import(
      "./pages/SocialLinkAndCommonImage/admin/SocialLinkAndCommonImageAdminDashboard.page"
    )
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const AddUpcomingEventPage = React.lazy(
  () => import("./pages/UpcomingEvent/admin/AddUpcomingEvent.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditUpcomingEventPage = React.lazy(
  () => import("./pages/UpcomingEvent/admin/EditUpcomingEvent.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const UpcomingEventAdminDashboardPage = React.lazy(
  () => import("./pages/UpcomingEvent/admin/UpcomingEventAdminDashboard.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewUpcomingEventForAdminPage = React.lazy(
  () => import("./pages/UpcomingEvent/admin/UpcomingEventDetailById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const UpcomingEventListPage = React.lazy(
  () => import("./pages/UpcomingEvent/user/ViewAllUpcomingEvent.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewUpcomingEventByIdPage = React.lazy(
  () => import("./pages/UpcomingEvent/user/ViewUpcomingEventById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const AddTeamMemberPage = React.lazy(
  () => import("./pages/OurTeam/admin/AddTeamMember.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditTeamMemberPage = React.lazy(
  () => import("./pages/OurTeam/admin/EditTeamMember.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const TeamMemberAdminDashboardPage = React.lazy(
  () => import("./pages/OurTeam/admin/TeamMemberAdminDashboard.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewTeamMemberForAdminPage = React.lazy(
  () => import("./pages/OurTeam/admin/TeamMemberDetailById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const TeamMemberListPage = React.lazy(
  () => import("./pages/OurTeam/user/ViewAllTeamMember.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewTeamMemberByIdPage = React.lazy(
  () => import("./pages/OurTeam/user/ViewTeamMemberById.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const AddVideoPage = React.lazy(
  () => import("./pages/video/admin/AddVideo.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const EditVideoPage = React.lazy(
  () => import("./pages/video/admin/EditVideo.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const VideoAdminDashboardPage = React.lazy(
  () => import("./pages/video/admin/VideoAdminDashboard.page")
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const VideoListPage = React.lazy(
  () => import("./pages/video/user/ViewAllVideo.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const ViewVideoByIdPage = React.lazy(
  () => import("./pages/video/user/ViewVideoById.page")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
const DonationFormPage = React.lazy(
  () => import("./pages/Payment/user/DonationFormPage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <RouteSuspense>
            <HomePage />
          </RouteSuspense>
        ),
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "login",
            element: (
              <RouteSuspense>
                <LoginPage />
              </RouteSuspense>
            ),
          },
          {
            path: "signup",
            element: (
              <RouteSuspense>
                <SignupPage />
              </RouteSuspense>
            ),
          },
        ],
      },

      {
        path: "admin",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: (
              <RouteSuspense>
                <AdminControlPanelPage />
              </RouteSuspense>
            ),
          },
          //focus activity
          {
            path: "add-focus-activity",
            element: (
              <RouteSuspense>
                <AddFocusActivityPage />
              </RouteSuspense>
            ),
          },
          {
            path: "focus-activity-dashboard",
            element: (
              <RouteSuspense>
                <FocusActivityAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-focus-activity/:id",
            element: (
              <RouteSuspense>
                <EditFocusActivityPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-focus-activity/:id",
            element: (
              <RouteSuspense>
                <ViewFocusActivityForAdminPage />
              </RouteSuspense>
            ),
          },
          //team Member section
          {
            path: "add-teamMember",
            element: (
              <RouteSuspense>
                <AddTeamMemberPage />
              </RouteSuspense>
            ),
          },
          {
            path: "teamMember-dashboard",
            element: (
              <RouteSuspense>
                <TeamMemberAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-teamMember/:id",
            element: (
              <RouteSuspense>
                <EditTeamMemberPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-teamMember/:id",
            element: (
              <RouteSuspense>
                <ViewTeamMemberForAdminPage />
              </RouteSuspense>
            ),
          },
          //gallery section
          {
            path: "add-gallery",
            element: (
              <RouteSuspense>
                <AddGalleryPage />
              </RouteSuspense>
            ),
          },
          {
            path: "gallery-dashboard",
            element: (
              <RouteSuspense>
                <GalleryAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-gallery/:id",
            element: (
              <RouteSuspense>
                <EditGalleryPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-gallery/:id",
            element: (
              <RouteSuspense>
                <ViewGalleryByIdPage />
              </RouteSuspense>
            ),
          },
          //news section
          {
            path: "add-news",
            element: (
              <RouteSuspense>
                <AddNewsPage />
              </RouteSuspense>
            ),
          },
          {
            path: "news-dashboard",
            element: (
              <RouteSuspense>
                <NewsAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-news/:id",
            element: (
              <RouteSuspense>
                <EditNewsPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-news/:id",
            element: (
              <RouteSuspense>
                <ViewNewsByIdPage />
              </RouteSuspense>
            ),
          },
          //document Section
          {
            path: "add-document",
            element: (
              <RouteSuspense>
                <AddDocumentPage />
              </RouteSuspense>
            ),
          },
          {
            path: "document-dashboard",
            element: (
              <RouteSuspense>
                <DocumentAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-document/:id",
            element: (
              <RouteSuspense>
                <EditDocumentPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-document/:id",
            element: (
              <RouteSuspense>
                <ViewDocumentByIdPage />
              </RouteSuspense>
            ),
          },
          //upcoming event
          {
            path: "add-upcoming-event",
            element: (
              <RouteSuspense>
                <AddUpcomingEventPage />
              </RouteSuspense>
            ),
          },
          {
            path: "upcoming-event-dashboard",
            element: (
              <RouteSuspense>
                <UpcomingEventAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-upcoming-event/:id",
            element: (
              <RouteSuspense>
                <EditUpcomingEventPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-upcoming-event/:id",
            element: (
              <RouteSuspense>
                <ViewUpcomingEventForAdminPage />
              </RouteSuspense>
            ),
          },
          //video section
          {
            path: "add-video",
            element: (
              <RouteSuspense>
                <AddVideoPage />
              </RouteSuspense>
            ),
          },
          {
            path: "video-dashboard",
            element: (
              <RouteSuspense>
                <VideoAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-video/:id",
            element: (
              <RouteSuspense>
                <EditVideoPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-video/:id",
            element: (
              <RouteSuspense>
                <ViewVideoByIdPage />
              </RouteSuspense>
            ),
          },
          //our partner section
          {
            path: "add-ourPartner",
            element: (
              <RouteSuspense>
                <AddOurPartnerPage />
              </RouteSuspense>
            ),
          },
          {
            path: "ourPartner-dashboard",
            element: (
              <RouteSuspense>
                <OurPartnerAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-ourPartner/:id",
            element: (
              <RouteSuspense>
                <EditOurPartnerPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-ourPartner/:id",
            element: (
              <RouteSuspense>
                <OurPartnerDetailByIdPage />
              </RouteSuspense>
            ),
          },
          //contactUs section
          {
            path: "contactUs-dashboard",
            element: (
              <RouteSuspense>
                <ContactUsAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-contactUs/:id",
            element: (
              <RouteSuspense>
                <EditContactUsPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-contactUs/:id",
            element: (
              <RouteSuspense>
                <ContactUsDetailByIdPage />
              </RouteSuspense>
            ),
          },
          //image and File section
          {
            path: "image-management/:id",
            element: (
              <RouteSuspense>
                <ImageManagementPage />
              </RouteSuspense>
            ),
          },
          {
            path: "file-management/:id",
            element: (
              <RouteSuspense>
                <PdfManagementPage />
              </RouteSuspense>
            ),
          },
          {
            path: "backup-image",
            element: (
              <RouteSuspense>
                <BackupImagePage />
              </RouteSuspense>
            ),
          },
          //socialLinkAndCommonImage section
          {
            path: "socialLinkAndCommonImage-dashboard",
            element: (
              <RouteSuspense>
                <SocialLinkAndCommonImageAdminDashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "edit-socialLinkAndCommonImage/:id",
            element: (
              <RouteSuspense>
                <EditSocialLinkAndCommonImagePage />
              </RouteSuspense>
            ),
          },
        ],
      },

      {
        path: "user",
        element: <ProtectedRoute />,
        children: [
          {
            path: "view-focus-activity/:id",
            element: (
              <RouteSuspense>
                <ViewFocusActivityByIdPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-all-focus-activity",
            element: (
              <RouteSuspense>
                <FocusActivityListPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-gallery/:id",
            element: (
              <RouteSuspense>
                <ViewGalleryByIdPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-all-gallery",
            element: (
              <RouteSuspense>
                <GalleryListPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-news/:id",
            element: (
              <RouteSuspense>
                <ViewNewsByIdPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-all-news",
            element: (
              <RouteSuspense>
                <NewsListPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-document/:id",
            element: (
              <RouteSuspense>
                <ViewDocumentByIdPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-all-document",
            element: (
              <RouteSuspense>
                <DocumentListPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-upcoming-event/:id",
            element: (
              <RouteSuspense>
                <ViewUpcomingEventByIdPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-all-upcoming-event",
            element: (
              <RouteSuspense>
                <UpcomingEventListPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-video/:id",
            element: (
              <RouteSuspense>
                <ViewVideoByIdPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-all-video",
            element: (
              <RouteSuspense>
                <VideoListPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-all-image",
            element: (
              <RouteSuspense>
                <ViewAllImagePage />
              </RouteSuspense>
            ),
          },
        ],
      },

      {
        path: "about",
        children: [
          {
            index: true,
            element: (
              <RouteSuspense>
                <AboutUsPage />
              </RouteSuspense>
            ),
          },
          {
            path: "mission",
            element: (
              <RouteSuspense>
                <MissionPage />
              </RouteSuspense>
            ),
          },
          {
            path: "vision",
            element: (
              <RouteSuspense>
                <VisionPage />
              </RouteSuspense>
            ),
          },
          {
            path: "approch",
            element: (
              <RouteSuspense>
                <ApprochPage />
              </RouteSuspense>
            ),
          },
          {
            path: "plan",
            element: (
              <RouteSuspense>
                <FuturePlanPage />
              </RouteSuspense>
            ),
          },
        ],
      },
      {
        path: "our-team",
        children: [
          {
            path: "view-all-teamMember",
            element: (
              <RouteSuspense>
                <TeamMemberListPage />
              </RouteSuspense>
            ),
          },
          {
            path: "view-teamMember/:id",
            element: (
              <RouteSuspense>
                <ViewTeamMemberByIdPage />
              </RouteSuspense>
            ),
          },
        ],
      },
      {
        path: "add-contactUs",
        element: (
          <RouteSuspense>
            <AddContactUsPage />
          </RouteSuspense>
        ),
      },
      {
        path: "donationForm",
        element: (
          <RouteSuspense>
            <DonationFormPage />
          </RouteSuspense>
        ),
      },
      {
        path: "notAccessible",
        element: (
          <RouteSuspense>
            <PageNotAccessible />
          </RouteSuspense>
        ),
      },
      {
        path: "*",
        element: (
          <RouteSuspense>
            <PageNotFound />
          </RouteSuspense>
        ),
      },
    ],
  },
]);
