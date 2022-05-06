import "./LeftDrawer.scss";
import { useEffect, useRef } from "react";

const LeftDrawer = (props) => {
  const ref = useRef(null);

  const classes = `left-drawer ${props.open ? "open-drawer" : ""}`;
  return (
    <>
      <div id="left-drawer" className={classes}>
        LeftDrawer {props.children}
      </div>
      <div
        onClick={() => props.toggler()}
        className={props.open ? "overlay" : ""}
      ></div>
    </>
  );
};

export default LeftDrawer;
