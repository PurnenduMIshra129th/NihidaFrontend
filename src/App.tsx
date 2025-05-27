import './App.css'

import { Outlet } from 'react-router'

import Navbar from './components/Navbar/Navbar'
// eslint-disable-next-line @typescript-eslint/naming-convention
function App() {
  return (
    <>
      <Navbar />
       <Outlet />
    </>
  )
}

export default App
