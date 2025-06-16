import ManageAllBlogPage from "../../pages/BlogPage/ManageAllBlogPage";
import ManageAllCarouselPage from "../../pages/Carousel/ManageAllCarouselPage";
import ManageAllMediaPage from "../../pages/MediaPage/ManageAllMediaPage"
import ManageAllNewsPage from "../../pages/NewsPage/ManageAllNewsPage";
import ManageAllProductAndServicePage from "../../pages/ProductAndServicePage/ManageAllProductAndServicePage";
import ManageAllVideoPage from "../../pages/VideoPage/ManageAllVideoPage";
import { withDataProvider } from "./WithDataProvider";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllMediaPageWrapper = withDataProvider(ManageAllMediaPage, "media/getAllMedia");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllBlogPageWrapper = withDataProvider(ManageAllBlogPage, "blog/getAllBlog");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllNewsPageWrapper = withDataProvider(ManageAllNewsPage, "news/getAllNews");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllServicePageWrapper = withDataProvider(ManageAllProductAndServicePage, "productAndService/getAllProductAndService");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllVideoPageWrapper = withDataProvider(ManageAllVideoPage, "video/getAllVideo");
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ManageAllCarouselPageWrapper = withDataProvider(ManageAllCarouselPage, "carousel/getAllCarousel");

