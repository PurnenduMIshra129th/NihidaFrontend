import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";

import Alerts from "./components/Alerts/Alerts";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AlertProvider } from "./contexts/context/alert/AlertContext";
import { LoaderProvider } from "./contexts/context/loader/LoaderContext";
import { fetchUser } from "./contexts/slice/getUserSlice";
import { AppDispatch } from "./contexts/store";
import FooterScreen from "./screens/Footer/FooterScreen";
import { setNavigator } from "./utils/navigator";
import { validateTokenExpiry } from "./utils/util";
// eslint-disable-next-line @typescript-eslint/naming-convention
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    validateTokenExpiry(navigate);
  });

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

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
              <main className="flex-grow ">
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
