import './App.css'

import { Outlet } from 'react-router'

import Alerts from './components/Alerts/Alerts'
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import { AlertProvider } from './contexts/context/alert/AlertContext'
import { LoaderProvider } from './contexts/context/loader/LoaderContext'
// eslint-disable-next-line @typescript-eslint/naming-convention
function App() {
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
