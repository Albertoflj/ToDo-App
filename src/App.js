import logo from "./logo.svg";
import MainPage from "./pages/MainPage";
import "./scss/App.scss";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function onStorageChange(e) {
    setTheme(localStorage.getItem("theme"));
  }
  window.addEventListener("storage", onStorageChange);
  // let theme = localStorage.getItem("theme");
  if (theme === "light" && document.body.classList.contains("dark-theme")) {
    document.body.classList.toggle("dark-theme");
  }
  return (
    <div className="App">
      <MainPage theme={theme} />
    </div>
  );
}

export default App;
