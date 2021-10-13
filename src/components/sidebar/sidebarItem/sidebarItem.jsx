import React from "react"

const SidebarItem = ({ title, icon, active }) => {
  const activeClass = active ? "sidebar__item--active" : ""
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item__inner ${activeClass}`}>
        <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default SidebarItem
