import ManageAllBlogPage from "../../pages/BlogPage/ManageAllBlogPage";
import ViewAllBlogPageUsers from "../../pages/BlogPage/ViewAllBlogPageUsers";
import ViewBlogByIdUsersPage from "../../pages/BlogPage/ViewBlogByIdUsersPage";
import AddDocumentPage from "../../pages/Documents/admin/AddDocument.page";
import DocumentAdminDashboardPage from "../../pages/Documents/admin/DocumentAdminDashboard.page";
import DocumentDetailByIdPage from "../../pages/Documents/admin/DocumentDetailById.page";
import EditDocumentPage from "../../pages/Documents/admin/EditDocument.page";
import ViewAllDocumentPage from "../../pages/Documents/user/ViewAllDocument.page";
import ViewDocumentByIdPage from "../../pages/Documents/user/ViewDocumentById.page";
import ImageManagementPage from "../../pages/Files/admin/ImageManagement.page";
import PdfManagementPage from "../../pages/Files/admin/PdfManagement.page";
import ViewAllImagePage from "../../pages/Files/user/ViewAllImage.page";
import AddFocusActivityPage from "../../pages/FocusActivity/admin/AddFocusActivity.page";
import EditFocusActivityPage from "../../pages/FocusActivity/admin/EditFocusActivity.page";
import FocusActivityAdminDashboardPage from "../../pages/FocusActivity/admin/FocusActivityAdminDashboard.page";
import FocusActivityDetailByIdPage from "../../pages/FocusActivity/admin/FocusActivityDetailById.page";
import ViewAllFocusActivityPage from "../../pages/FocusActivity/user/ViewAllFocusActivity.page";
import ViewFocusActivityByIdPage from "../../pages/FocusActivity/user/ViewFocusActivityById.page";
import AddGalleryPage from "../../pages/Gallery/admin/AddGallery.page";
import EditGalleryPage from "../../pages/Gallery/admin/EditGallery.page";
import GalleryAdminDashboardPage from "../../pages/Gallery/admin/GalleryAdminDashboard.page";
import GalleryDetailByIdPage from "../../pages/Gallery/admin/GalleryDetailById.page";
import ViewAllGalleryPage from "../../pages/Gallery/user/ViewAllGallery.page";
import ViewGalleryByIdPage from "../../pages/Gallery/user/ViewGalleryById.page";
import AdminControlPanelPage from "../../pages/HomePage/admin/AdminContolPanel.page";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ManageAllMediaPage from "../../pages/MediaPage/ManageAllMediaPage";
import ViewAllMediaPageUsers from "../../pages/MediaPage/ViewAllMediaPageUsers";
import ViewMediaByIdUsersPage from "../../pages/MediaPage/ViewMediaByIdUsersPage";
import AddNewsPage from "../../pages/News/admin/AddNews.page";
import EditNewsPage from "../../pages/News/admin/EditNews.page";
import NewsAdminDashboardPage from "../../pages/News/admin/NewsAdminDashboard.page";
import NewsDetailByIdPage from "../../pages/News/admin/NewsDetailById.page";
import ViewAllNewsPage from "../../pages/News/user/ViewAllNews.page";
import ViewNewsByIdPage from "../../pages/News/user/ViewNewsById.page";
import ManageAllNewsPage from "../../pages/NewsPage/ManageAllNewsPage";
import ViewAllNewsPageUsers from "../../pages/NewsPage/ViewAllNewsPageUsers";
import ViewNewsByIdUsersPage from "../../pages/NewsPage/ViewNewsByIdUsersPage";
import ManageAllProductAndServicePage from "../../pages/ProductAndServicePage/ManageAllProductAndServicePage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import EditSocialLinkAndCommonImagePage from "../../pages/SocialLinkAndCommonImage/admin/EditSocialLinkAndCommonImage.page";
import SocialLinkAndCommonImageAdminDashboardPage from "../../pages/SocialLinkAndCommonImage/admin/SocialLinkAndCommonImageAdminDashboard.page";
import AddUpcomingEventPage from "../../pages/UpcomingEvent/admin/AddUpcomingEvent.page";
import EditUpcomingEventPage from "../../pages/UpcomingEvent/admin/EditUpcomingEvent.page";
import UpcomingEventAdminDashboardPage from "../../pages/UpcomingEvent/admin/UpcomingEventAdminDashboard.page";
import UpcomingEventDetailByIdPage from "../../pages/UpcomingEvent/admin/UpcomingEventDetailById.page";
import ViewAllUpcomingEventPage from "../../pages/UpcomingEvent/user/ViewAllUpcomingEvent.page";
import ViewUpcomingEventByIdPage from "../../pages/UpcomingEvent/user/ViewUpcomingEventById.page";
import AddVideoPage from "../../pages/video/admin/AddVideo.page";
import EditVideoPage from "../../pages/video/admin/EditVideo.page";
import VideoAdminDashboardPage from "../../pages/video/admin/VideoAdminDashboard.page";
import VideoDetailByIdPage from "../../pages/video/admin/VideoDetailById.page";
import ViewAllVideoPage from "../../pages/video/user/ViewAllVideo.page";
import ViewVideoByIdPage from "../../pages/video/user/ViewVideoById.page";
import ManageAllVideoPage from "../../pages/VideoPage/ManageAllVideoPage";
import ViewAllVideoPageUsers from "../../pages/VideoPage/ViewAllVideoPageUsers";
import { withAuth } from "./ProtectedRoutes";
import { withDataProvider } from "./WithDataProvider";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AddFocusActivityPageWrapper = withAuth(AddFocusActivityPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FocusActivityDashboardPageWrapper = withAuth(
  withDataProvider(
    FocusActivityAdminDashboardPage,
    "focusActivity/getAllFocusActivity"
  )
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditFocusActivityPageWrapper = withAuth(EditFocusActivityPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewFocusActivityPageWrapper = withAuth(
  FocusActivityDetailByIdPage
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewFocusActivityForUserPageWrapper = withAuth(
  ViewFocusActivityByIdPage
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllFocusActivityForUserPageWrapper = withAuth(
  ViewAllFocusActivityPage
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AddGalleryPageWrapper = withAuth(AddGalleryPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GalleryDashboardPageWrapper = withAuth(
  withDataProvider(GalleryAdminDashboardPage, "gallery/getAllGallery")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditGalleryPageWrapper = withAuth(EditGalleryPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewGalleryPageWrapper = withAuth(GalleryDetailByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewGalleryForUserPageWrapper = withAuth(ViewGalleryByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllGalleryForUserPageWrapper = withAuth(ViewAllGalleryPage);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AddDocumentPageWrapper = withAuth(AddDocumentPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DocumentDashboardPageWrapper = withAuth(
  withDataProvider(DocumentAdminDashboardPage, "document/getAllDocument")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditDocumentPageWrapper = withAuth(EditDocumentPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewDocumentPageWrapper = withAuth(DocumentDetailByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewDocumentForUserPageWrapper = withAuth(ViewDocumentByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllDocumentForUserPageWrapper = withAuth(ViewAllDocumentPage);


// eslint-disable-next-line @typescript-eslint/naming-convention
export const AddNewsPageWrapper = withAuth(AddNewsPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NewsDashboardPageWrapper = withAuth(
  withDataProvider(NewsAdminDashboardPage, "news/getAllNews")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditNewsPageWrapper = withAuth(EditNewsPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewNewsPageWrapper = withAuth(NewsDetailByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewNewsForUserPageWrapper = withAuth(ViewNewsByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllNewsForUserPageWrapper = withAuth(ViewAllNewsPage);


// eslint-disable-next-line @typescript-eslint/naming-convention
export const SocialLinkAndCommonImageDashboardPageWrapper = withAuth(
  withDataProvider(SocialLinkAndCommonImageAdminDashboardPage, "socialLinkAndCommonImage/getAllSocialLinkAndCommonImage")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditSocialLinkAndCommonImagePageWrapper = withAuth(EditSocialLinkAndCommonImagePage);


// eslint-disable-next-line @typescript-eslint/naming-convention
export const AddVideoPageWrapper = withAuth(AddVideoPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const VideoDashboardPageWrapper = withAuth(
  withDataProvider(VideoAdminDashboardPage, "video/getAllVideo")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditVideoPageWrapper = withAuth(EditVideoPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewVideoPageWrapper = withAuth(VideoDetailByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewVideoForUserPageWrapper = withAuth(ViewVideoByIdPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllVideoForUserPageWrapper = withAuth(ViewAllVideoPage);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AddUpcomingEventPageWrapper = withAuth(AddUpcomingEventPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UpcomingEventDashboardPageWrapper = withAuth(
  withDataProvider(
    UpcomingEventAdminDashboardPage,
    "upcomingEvent/getAllUpcomingEvent"
  )
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditUpcomingEventPageWrapper = withAuth(EditUpcomingEventPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewUpcomingEventPageWrapper = withAuth(
  UpcomingEventDetailByIdPage
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewUpcomingEventForUserPageWrapper = withAuth(
  ViewUpcomingEventByIdPage
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllUpcomingEventForUserPageWrapper = withAuth(
  ViewAllUpcomingEventPage
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllImagePageWrapper = withAuth(ViewAllImagePage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditUpdateImagePageWrapper = withAuth(ImageManagementPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EditUpdateFilePageWrapper = withAuth(PdfManagementPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllMediaPageWrapper = withAuth(
  withDataProvider(ManageAllMediaPage, "media/getAllMedia")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllBlogPageWrapper = withAuth(
  withDataProvider(ManageAllBlogPage, "blog/getAllBlog")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllNewsPageWrapper = withAuth(
  withDataProvider(ManageAllNewsPage, "news/getAllNews")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllServicePageWrapper = withAuth(
  withDataProvider(
    ManageAllProductAndServicePage,
    "productAndService/getAllProductAndService"
  )
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllVideoPageWrapper = withAuth(
  withDataProvider(ManageAllVideoPage, "video/getAllVideo")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllMediaPageUsersWrapper = withAuth(ViewAllMediaPageUsers);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewMediaByIdUsersPageWrapper = withAuth(ViewMediaByIdUsersPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllBlogPageUsersWrapper = withAuth(ViewAllBlogPageUsers);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewBlogByIdUsersPageWrapper = withAuth(ViewBlogByIdUsersPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllNewsPageUsersWrapper = withAuth(ViewAllNewsPageUsers);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewNewsByIdUsersPageWrapper = withAuth(ViewNewsByIdUsersPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ViewAllVideoPageUsersWrapper = withAuth(ViewAllVideoPageUsers);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AdminControlPanelPageWrapper = withAuth(AdminControlPanelPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LoginPageWrapper = withAuth(LoginPage);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SignUpPageWrapper = withAuth(SignupPage);
