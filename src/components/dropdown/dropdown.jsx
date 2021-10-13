import React, { useRef } from "react"

import "./dropdown.css"

const handleClickDropdown = (toggleRef, contentRef) => {
  document.addEventListener("click", (e) => {
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle("dropdown__content--active")
    } else {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList.remove("dropdown__content--active")
      }
    }
  })
}

const Dropdown = ({
  icon,
  badge,
  customToggle,
  renderItem,
  contentData,
  renderFooter,
}) => {
  const dropdownToggleRef = useRef(null)
  const dropdownContentRef = useRef(null)
  handleClickDropdown(dropdownToggleRef, dropdownContentRef)

  return (
    <div className="dropdown">
      <button ref={dropdownToggleRef} className="dropdown__toggle">
        {icon ? <i className={icon} /> : ""}
        {badge ? <span className="dropdown__toggle__badge">{badge}</span> : ""}
        {customToggle ? customToggle() : null}
      </button>
      <div ref={dropdownContentRef} className="dropdown__content">
        {renderItem && contentData
          ? contentData.map((item, index) => renderItem(item, index))
          : null}
        {renderFooter ? (
          <div className="dropdown__footer">
            {renderFooter ? renderFooter() : ""}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Dropdown
