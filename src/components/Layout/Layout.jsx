import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
