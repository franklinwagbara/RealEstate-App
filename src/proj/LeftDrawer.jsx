import "./LeftDrawer.scss";
import { useEffect, useRef } from "react";

const LeftDrawer = (props) => {
  const ref = useRef(null);

  /* useEffect(() => {
    const handleClickOut = (e) => {
      console.log("click some", ref.current, e.target, props.open);
      if (ref.current && !ref.current.contains(e.target) && !props.open) {
        console.log("fucnt was called");
        props.toggler(false);
      }
    };

    document.addEventListener("mousedown", handleClickOut);

    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [ref]); */

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
