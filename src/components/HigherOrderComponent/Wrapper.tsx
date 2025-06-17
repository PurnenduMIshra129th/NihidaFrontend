import ManageAllBlogPage from "../../pages/BlogPage/ManageAllBlogPage";
import ViewAllBlogPageUsers from "../../pages/BlogPage/ViewAllBlogPageUsers";
import ViewBlogByIdUsersPage from "../../pages/BlogPage/ViewBlogByIdUsersPage";
import ManageAllCarouselPage from "../../pages/Carousel/ManageAllCarouselPage";
import ManageHomePage from "../../pages/HomePage/ManageHomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ManageAllMediaPage from "../../pages/MediaPage/ManageAllMediaPage"
import ViewAllMediaPageUsers from "../../pages/MediaPage/ViewAllMediaPageUsers";
import ViewMediaByIdUsersPage from "../../pages/MediaPage/ViewMediaByIdUsersPage";
import ManageAllNewsPage from "../../pages/NewsPage/ManageAllNewsPage";
import ViewAllNewsPageUsers from "../../pages/NewsPage/ViewAllNewsPageUsers";
import ViewNewsByIdUsersPage from "../../pages/NewsPage/ViewNewsByIdUsersPage";
import ManageAllProductAndServicePage from "../../pages/ProductAndServicePage/ManageAllProductAndServicePage";
import ManageAllVideoPage from "../../pages/VideoPage/ManageAllVideoPage";
import ViewAllVideoPageUsers from "../../pages/VideoPage/ViewAllVideoPageUsers";
import { withAuth } from "./ProtectedRoutes";
import { withDataProvider } from "./WithDataProvider";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllMediaPageWrapper = withAuth(withDataProvider(ManageAllMediaPage, "media/getAllMedia"), );
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllBlogPageWrapper = withAuth(withDataProvider(ManageAllBlogPage, "blog/getAllBlog"), );
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllNewsPageWrapper = withAuth(withDataProvider(ManageAllNewsPage, "news/getAllNews"), );
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllServicePageWrapper = withAuth(withDataProvider(ManageAllProductAndServicePage, "productAndService/getAllProductAndService"), );
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllVideoPageWrapper = withAuth(withDataProvider(ManageAllVideoPage, "video/getAllVideo"), );
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllCarouselPageWrapper = withAuth(withDataProvider(ManageAllCarouselPage, "carousel/getAllCarousel"), );
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
export const ManageHomePageWrapper = withAuth(ManageHomePage );
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LoginPageWrapper = withAuth(LoginPage);

