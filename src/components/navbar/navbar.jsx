import React from "react"
import { Link } from "react-router-dom"

import Dropdown from "../dropdown/dropdown"

import "./navbar.css"

import notfications from "../../assets/json/notfications.json"
import userMenu from "../../assets/json/userMenu.json"

import Profile from "../../assets/images/user.jpg"

const userInfo = {
  name: "Mina",
  profile: Profile,
}

const renderNotfications = (item, index) => (
  <div className="notfication-item" key={index}>
    <i className={item.icon} />
    <span>{item.content}</span>
  </div>
)

const renderUsermenu = (item, index) => (
  <Link to='/'>
    <div className="notfication-item" key={index}>
      <i className={item.icon} />
      <span>{item.content}</span>
    </div>
  </Link>
)

const renderUserToggle = () => (
  <div className="navbar__right__user">
    <div className="navbar__right__user__img">
      <img src={userInfo.profile} alt="profile" />
    </div>
    <div className="navbar__right__user__name">{userInfo.name}</div>
  </div>
)

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navabr__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__item">
          <Dropdown
            renderItem={renderUsermenu}
            contentData={userMenu}
            customToggle={renderUserToggle}
          />
        </div>
        <div className="navbar__right__item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            renderItem={renderNotfications}
            contentData={notfications}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="navbar__right__item">
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
