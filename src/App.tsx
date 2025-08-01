import "./App.css";

import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";

import FooterScreen from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AlertProvider } from "./contexts/context/alert/AlertContext";
import { LoaderProvider } from "./contexts/context/loader/LoaderContext";
import { fetchAllDocument } from "./contexts/slice/getAllDocument.slice";
import { fetchAllFocusActivity } from "./contexts/slice/getAllFocusActivity.slice";
import { fetchAllGallery } from "./contexts/slice/getAllGallery.slice";
import { fetchAllNews } from "./contexts/slice/getAllNews.slice";
import { fetchAllTeamMember } from "./contexts/slice/getAllTeamMember.slice";
import { fetchAllUpcomingEvent } from "./contexts/slice/getAllUpcomingEvent.slice";
import { fetchAllVideo } from "./contexts/slice/getAllVideo.slice";
import { fetchUser } from "./contexts/slice/getUser.slice";
import { fetchSocialLinkAndCommonImage } from "./contexts/slice/socialLinkAndCommonImage.slice";
import { AppDispatch } from "./contexts/store";
import { setNavigator } from "./utils/navigator";
import { getStorageItem, validateTokenExpiry } from "./utils/util";
// eslint-disable-next-line @typescript-eslint/naming-convention
const Loader = lazy(() => import("./components/Loader/Loader"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const Alerts = lazy(() => import("./components/Alerts/Alerts"));
// eslint-disable-next-line @typescript-eslint/naming-convention
const ErrorBoundary = lazy(
  () => import("./components/ErrorBoundry/ErrorBoundry")
);
// eslint-disable-next-line @typescript-eslint/naming-convention
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = getStorageItem("token");

  useEffect(() => {
    validateTokenExpiry(navigate);
  });

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  useEffect(() => {
    if (token && token !== "") {
      dispatch(fetchUser());
    }
    dispatch(fetchAllNews());
    dispatch(fetchAllDocument());
    dispatch(fetchAllGallery());
    dispatch(fetchAllFocusActivity());
    dispatch(fetchAllVideo());
    dispatch(fetchAllUpcomingEvent());
    dispatch(fetchSocialLinkAndCommonImage());
    dispatch(fetchAllTeamMember());
  }, [dispatch, token]);

  return (
    <>
      <ErrorBoundary>
        <LoaderProvider>
          <AlertProvider>
            <ScrollToTop />
            <Loader />
            <Alerts />
            <Navbar />
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">
                <Outlet />
              </main>
              <FooterScreen />
            </div>
          </AlertProvider>
        </LoaderProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
