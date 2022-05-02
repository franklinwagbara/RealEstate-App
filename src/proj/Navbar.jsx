import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = (props) => {
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faBars} onClick={() => props.drawerToggler()} />
      <ul className="nav-items">{props.children}</ul>
    </div>
  );
};
export default Navbar;

export const NavItems = (props) => {
  return <li className="nav-item">{props.children}</li>;
};
