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
    document.getElementById("theme-label").classList.toggle("icon-sun");
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
      <label htmlFor="theme" id="theme-label" className="theme-switch" onClick={handleClick}/> 
      <input
        ref={ref}
        type="checkbox"
        name="theme"
        id="theme"
        defaultChecked={darkTheme}
      />
    </div>
  );
}
export default Header;
