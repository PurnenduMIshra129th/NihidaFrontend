import './App.css'

import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Alerts from './components/Alerts/Alerts'
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import { AlertProvider } from './contexts/context/alert/AlertContext'
import { LoaderProvider } from './contexts/context/loader/LoaderContext'
import { setNavigator } from './utils/navigator'
import { validateTokenExpiry } from './utils/util'
// eslint-disable-next-line @typescript-eslint/naming-convention
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    validateTokenExpiry(navigate);
  },);

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <>
      <ErrorBoundary>
        <LoaderProvider>
          <AlertProvider>
            <Loader />
            <Alerts />
            <Navbar />
            <Outlet />
          </AlertProvider>
        </LoaderProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
