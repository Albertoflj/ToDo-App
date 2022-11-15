import logo from "./logo.svg";
import MainPage from "./pages/MainPage";
import "./scss/App.scss";
import { useEffect, useState } from "react";

function App() {
    //dummy data in case local storage is empty
    let dummyData = {
      items: [
        {
          id: 1,
          content:"Complete online JavaScript course",
          checked: false,
        },
        {
          id: 2,
          content:"Jog around the park 3x",
          checked: false,
        },
        {
          id: 3,
          content:"10 minutes meditation",
          checked: false,
        },
        {
          id: 4,
          content:"Read for 1 hour",
          checked: false,
        },
        {
          id: 5,
          content:"Pick up groceries",
          checked: false,
        },
        {
          id: 6,
          content:"Complete Todo App on Frontend Mentor",
          checked: false,
        },
      ]
    }
  
    //if user visits the page for the first time, set dummy data to local storage
    if(localStorage.getItem("firstTimeVisiting") === null){
      localStorage.setItem("firstTimeVisiting", "false");
      localStorage.setItem("items", JSON.stringify(dummyData.items));
      localStorage.setItem("currentCategory", "all");
      localStorage.setItem("theme", "light");
    }
  
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
