import { createBrowserRouter } from "react-router";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ManageHomePage from "./pages/ManagePage/ManageHomePage";
import ViewAllMediaPage from "./pages/ManagePage/viewAllMediaPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: "manage", Component: ManageHomePage,

      },
      { path: "manage/view-all-media", Component: ViewAllMediaPage }
    ],
  },
]);