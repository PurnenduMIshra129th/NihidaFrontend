import { createBrowserRouter } from "react-router";

import App from "./App";
import { LoginPageWrapper, ManageAllBlogPageWrapper, ManageAllCarouselPageWrapper, ManageAllMediaPageWrapper, ManageAllNewsPageWrapper, ManageAllServicePageWrapper, ManageAllVideoPageWrapper, ManageHomePageWrapper, ViewAllBlogPageUsersWrapper, ViewAllMediaPageUsersWrapper, ViewAllNewsPageUsersWrapper, ViewAllVideoPageUsersWrapper, ViewBlogByIdUsersPageWrapper, ViewMediaByIdUsersPageWrapper, ViewNewsByIdUsersPageWrapper } from "./components/HigherOrderComponent/Wrapper";
import HomePage from "./pages/HomePage/HomePage";
import PageNotAccessible from "./pages/NotFoundPage/PageNotAccessible";
import PageNotFound from "./pages/NotFoundPage/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPageWrapper },
      { path: "notAccessible", Component: PageNotAccessible },

      { path: "manage", Component: ManageHomePageWrapper,},
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

      { path: "*", Component: PageNotFound },

    ],
  },
]);