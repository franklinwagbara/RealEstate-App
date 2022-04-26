import {
  HearingOutlined,
  HeartBrokenRounded,
  Home,
  Settings,
} from "@mui/icons-material";
import "./styles.scss";
import { useState } from "react";

const Appt = () => {
  return (
    <>
      <Navbar>
        <NavItem icon={<HeartBrokenRounded />} />
        <NavItem icon={<HeartBrokenRounded />} />
        <NavItem icon={<HeartBrokenRounded />} />
        <NavItem icon={<HeartBrokenRounded />}>
          <DropdownMenu>
            <DropdownMenuItem leftIcon={<Home />} rightIcon={<Home />}>
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem leftIcon={<Settings />} rightIcon={<Settings />}>
              Setting
            </DropdownMenuItem>
          </DropdownMenu>
        </NavItem>
      </Navbar>
    </>
  );
};

export default Appt;

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item" onClick={() => setOpen((prev) => !prev)}>
      <a hre="#">{props.icon}</a>
      {open && props.children}
    </li>
  );
};

const DropdownMenu = (props) => {
  return <ul className="dropdown">{props.children}</ul>;
};

const DropdownMenuItem = (props) => {
  return (
    <li className="menu-item">
      <span className="nav-item">{props.leftIcon}</span>
      {props.children}
      <span className="nav-item icon-right">{props.leftIcon}</span>
    </li>
  );
};
