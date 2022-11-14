import "../../scss/components/_toDo.scss";

import { useEffect, useRef, useState } from "react";

function Header(props) {
  // handling body classlist and theme ----------------
  let darkTheme = true;
  if (props.theme === "light") {
    darkTheme = false;
  }
  const handleClick = () => {
    document.body.classList.toggle("dark-theme");
    darkTheme = !darkTheme;
    if (darkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    window.dispatchEvent(new Event("storage"));
  };
  // ----------------------------------------

  const ref = useRef(null);
  return (
    <div className="main-app__header">
      <h1>T O D O</h1>
      <input
        ref={ref}
        type="checkbox"
        name="theme"
        id="theme"
        defaultChecked={darkTheme}
        onClick={handleClick}
      />
    </div>
  );
}
export default Header;
