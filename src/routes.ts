import { createBrowserRouter } from "react-router";

import App from "./App";
import { ManageAllBlogPageWrapper, ManageAllCarouselPageWrapper, ManageAllMediaPageWrapper, ManageAllNewsPageWrapper, ManageAllServicePageWrapper, ManageAllVideoPageWrapper } from "./components/HigherOrderComponent/Wrapper";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ManageHomePage from "./pages/ManagePage/ManageHomePage";
import ViewAllBlogPageUsers from "./pages/UsersPage/ViewAllBlogPageUsers";
import ViewAllMediaPageUsers from "./pages/UsersPage/ViewAllMediaPageUsers";
import ViewAllNewsPageUsers from "./pages/UsersPage/ViewAllNewsPageUsers";
import ViewAllVideoPageUsers from "./pages/UsersPage/ViewAllVideoPageUsers";
import ViewBlogByIdUsersPage from "./pages/UsersPage/ViewBlogByIdUsersPage";
import ViewMediaByIdUsersPage from "./pages/UsersPage/ViewMediaByIdUsersPage";
import ViewNewsByIdUsersPage from "./pages/UsersPage/viewNewsByIdUsersPage";

 
// const ManageAllMediaPageWithData = withDataProvider(ManageAllMediaPage, "media/getAllMedia");

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