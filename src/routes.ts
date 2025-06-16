import { createBrowserRouter } from "react-router";

import App from "./App";
import { ManageAllBlogPageWrapper, ManageAllCarouselPageWrapper, ManageAllMediaPageWrapper, ManageAllNewsPageWrapper, ManageAllServicePageWrapper, ManageAllVideoPageWrapper } from "./components/HigherOrderComponent/Wrapper";
import ViewAllBlogPageUsers from "./pages/BlogPage/ViewAllBlogPageUsers";
import ViewBlogByIdUsersPage from "./pages/BlogPage/ViewBlogByIdUsersPage";
import HomePage from "./pages/HomePage/HomePage";
import ManageHomePage from "./pages/HomePage/ManageHomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ViewAllMediaPageUsers from "./pages/MediaPage/ViewAllMediaPageUsers";
import ViewMediaByIdUsersPage from "./pages/MediaPage/ViewMediaByIdUsersPage";
import ViewAllNewsPageUsers from "./pages/NewsPage/ViewAllNewsPageUsers";
import ViewNewsByIdUsersPage from "./pages/NewsPage/ViewNewsByIdUsersPage";
import ViewAllVideoPageUsers from "./pages/VideoPage/ViewAllVideoPageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: "manage", Component: ManageHomePage,

      },
      { path: "manage/manage-all-media",  Component:ManageAllMediaPageWrapper },
      { path: "manage/manage-all-blog", Component: ManageAllBlogPageWrapper },
      { path: "manage/manage-all-news", Component: ManageAllNewsPageWrapper },
      { path: "manage/manage-all-service", Component: ManageAllServicePageWrapper },
      { path: "manage/manage-all-video", Component: ManageAllVideoPageWrapper },
      { path: "manage/manage-all-carousel", Component: ManageAllCarouselPageWrapper },
      { path: "users/view-all-media", Component: ViewAllMediaPageUsers },
      { path: "users/view-all-blog", Component: ViewAllBlogPageUsers },
      { path: "users/view-all-news", Component: ViewAllNewsPageUsers },
      { path: "users/view-all-video", Component: ViewAllVideoPageUsers },
      { path: "users/media/:id", Component: ViewMediaByIdUsersPage },
      { path: "users/blog/:id", Component: ViewBlogByIdUsersPage },
      { path: "users/news/:id", Component: ViewNewsByIdUsersPage },


      { path: "login", Component: LoginPage },
    ],
  },
]);