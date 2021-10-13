import React from "react"
import { Link, useLocation } from "react-router-dom"

import SidebarItem from "./sidebarItem/sidebarItem"

import "./sidebar.css"
import sidebarItems from "../../assets/json/sidebarItems.json"
import Logo from "../../assets/images/logo.png"

const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        {sidebarItems.map((sidebarItem) => (
          <li key={sidebarItem.display_name}>
            <Link to={sidebarItem.route}>
              <SidebarItem
                icon={sidebarItem.icon}
                title={sidebarItem.display_name}
                active={pathname === sidebarItem.route}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
