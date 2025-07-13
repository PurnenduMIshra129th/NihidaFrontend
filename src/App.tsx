import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";

import Alerts from "./components/Alerts/Alerts";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
import FooterScreen from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AlertProvider } from "./contexts/context/alert/AlertContext";
import { LoaderProvider } from "./contexts/context/loader/LoaderContext";
import { fetchAllDocument } from "./contexts/slice/getAllDocument.slice";
import { fetchAllFocusActivity } from "./contexts/slice/getAllFocusActivity.slice";
import { fetchAllGallery } from "./contexts/slice/getAllGallery.slice";
import { fetchAllNews } from "./contexts/slice/getAllNews.slice";
import { fetchAllUpcomingEvent } from "./contexts/slice/getAllUpcomingEvent.slice";
import { fetchAllVideo } from "./contexts/slice/getAllVideo.slice";
import { fetchUser } from "./contexts/slice/getUser.slice";
import { fetchSocialLinkAndCommonImage } from "./contexts/slice/socialLinkAndCommonImage.slice";
import { AppDispatch } from "./contexts/store";
import { setNavigator } from "./utils/navigator";
import { getStorageItem, validateTokenExpiry } from "./utils/util";
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
    if(token && token !== ""){
      dispatch(fetchUser());
    }
    dispatch(fetchSocialLinkAndCommonImage());
    dispatch(fetchAllDocument());
    dispatch(fetchAllGallery());
    dispatch(fetchAllUpcomingEvent());
    dispatch(fetchAllFocusActivity());
    dispatch(fetchAllVideo());
    dispatch(fetchAllNews());
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
              <main className="min-h-screen ">
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
