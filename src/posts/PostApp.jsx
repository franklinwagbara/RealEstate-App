import "./styles.scss";
import { useState } from "react";

const PostApp = () => {
  const list = ["item 1", "item 2", "item 3"];

  return (
    <>
      <Dropdown list={list} />
    </>
  );
};

export default PostApp;

const Dropdown = ({ list }) => {
  const [display, setDisplay] = useState("none");

  return (
    <div className="dropdown">
      <p
        className="list-header"
        onClick={() => setDisplay(display === "none" ? "block" : "none")}
      >
        dropdown
      </p>
      <ul style={{ display: `${display}` }}>
        {list && list.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
};
