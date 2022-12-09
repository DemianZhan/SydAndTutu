import React from "react";

const NavItem = (props) => {
  const { title } = props
  return (
    <div className="nav-item">
      {title}
    </div>
  )
}
export default NavItem;