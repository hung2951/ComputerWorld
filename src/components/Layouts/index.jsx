import React from 'react'
import HeaderClient from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <HeaderClient/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
