import React from "react"

import './badge.css'

const Badge = ({title,type}) => {
  return <span className={`badge badge--${type}`}>{title}</span>
}

export default Badge
