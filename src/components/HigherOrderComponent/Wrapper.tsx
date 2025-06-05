import ManageAllBlogPage from "../../pages/ManagePage/ManageAllBlogPage";
import ManageAllCarouselPage from "../../pages/ManagePage/ManageAllCarouselPage";
import ManageAllMediaPage from "../../pages/ManagePage/ManageAllMediaPage"
import ManageAllNewsPage from "../../pages/ManagePage/ManageAllNewsPage";
import ManageAllServicePage from "../../pages/ManagePage/ManageAllServicePage";
import ManageAllVideoPage from "../../pages/ManagePage/ManageAllVideoPage";
import { withDataProvider } from "./WithDataProvider";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllMediaPageWrapper = withDataProvider(ManageAllMediaPage, "media/getAllMedia");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllBlogPageWrapper = withDataProvider(ManageAllBlogPage, "blog/getAllBlog");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllNewsPageWrapper = withDataProvider(ManageAllNewsPage, "news/getAllNews");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllServicePageWrapper = withDataProvider(ManageAllServicePage, "productAndService/getAllProductAndService");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllVideoPageWrapper = withDataProvider(ManageAllVideoPage, "video/getAllVideo");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllCarouselPageWrapper = withDataProvider(ManageAllCarouselPage, "carousel/getAllCarousel");

