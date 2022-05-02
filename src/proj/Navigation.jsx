import LeftDrawer from "./LeftDrawer";
import Navbar, { NavItems } from "./Navbar";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const drawerToggler = (value) => {
    if (value !== undefined) {
      setOpen(value);
      return;
    }
    setOpen((prev) => !prev);
  };
  return (
    <>
      <LeftDrawer open={open} toggler={drawerToggler}></LeftDrawer>
      <Navbar drawerToggler={drawerToggler}>
        <NavItems>Home</NavItems>
        <NavItems>Home</NavItems>
      </Navbar>
    </>
  );
};

export default Navigation;
