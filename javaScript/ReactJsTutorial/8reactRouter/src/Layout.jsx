import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { Link, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* this is variable component that is going to changed & replaced with router*/}
      <Footer />
    </>
  )
}

export default Layout