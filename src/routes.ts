import { createBrowserRouter } from "react-router";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ManageAllBlogPage from "./pages/ManagePage/ManageAllBlogPage";
import ManageAllMediaPage from "./pages/ManagePage/ManageAllMediaPage";
import ManageAllNewsPage from "./pages/ManagePage/ManageAllNewsPage";
import ManageAllServicePage from "./pages/ManagePage/ManageAllServicePage";
import ManageHomePage from "./pages/ManagePage/ManageHomePage";
import ViewAllBlogPageUsers from "./pages/UsersPage/ViewAllBlogPageUsers";
import ViewAllMediaPageUsers from "./pages/UsersPage/ViewAllMediaPageUsers";
import ViewAllNewsPageUsers from "./pages/UsersPage/ViewAllNewsPageUsers";
import ViewBlogByIdUsersPage from "./pages/UsersPage/ViewBlogByIdUsersPage";
import ViewMediaByIdUsersPage from "./pages/UsersPage/ViewMediaByIdUsersPage";
import ViewNewsByIdUsersPage from "./pages/UsersPage/viewNewsByIdUsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: "manage", Component: ManageHomePage,

      },
      { path: "manage/manage-all-media", Component: ManageAllMediaPage },
      { path: "manage/manage-all-blog", Component: ManageAllBlogPage },
      { path: "manage/manage-all-news", Component: ManageAllNewsPage },
      { path: "manage/manage-all-service", Component: ManageAllServicePage },
      { path: "users/view-all-media", Component: ViewAllMediaPageUsers },
      { path: "users/view-all-blog", Component: ViewAllBlogPageUsers },
      { path: "users/view-all-news", Component: ViewAllNewsPageUsers },
      { path: "users/media/:id", Component: ViewMediaByIdUsersPage },
      { path: "users/blog/:id", Component: ViewBlogByIdUsersPage },
      { path: "users/news/:id", Component: ViewNewsByIdUsersPage },
    ],
  },
]);