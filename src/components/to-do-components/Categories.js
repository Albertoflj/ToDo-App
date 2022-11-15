import {useState, useEffect, useRef} from "react";
// import "../../scss/_main.scss";

function Categories(){
  let categories = {
    all: "",
    active: "",
    completed: "",
  }
  // get how many items are left unchecked

  const [items, setItems] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  let lastCategory = localStorage.getItem("currentCategory");
  categories[currentCategory] = "selected-category";
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
    if(lastCategory){
      setCurrentCategory(lastCategory);
    }
    
  }, []);

  function handleCurrentCategory(e) {
    categories[currentCategory] = "";
    setCurrentCategory(e.target.id);
    localStorage.setItem("currentCategory", e.target.id);
    window.dispatchEvent(new Event("storage"));
    categories[currentCategory] = "selected-category";
  };
  
  const filterItemsLeft = () =>{
    return items.filter(item => item.checked === false).length;
  }
  let itemsLeft = 0;
  items ? itemsLeft = filterItemsLeft() : null;

  function onStorageChange() {
    setItems(JSON.parse(localStorage.getItem("items")));
    items ? itemsLeft = filterItemsLeft() : null;
  }
  window.addEventListener("storage", onStorageChange);

  function clearCompleted(){
    if(items){
      for(let i = 0; i < items.length; i++){
        if(items[i].checked === true){
          items.splice(i, 1);
          i--;
        }
      }
    }
    localStorage.setItem("items", JSON.stringify(items));
    window.dispatchEvent(new Event("storage"));
    }


    return (
      <div className="categories-container">

        <div className="main-app__categories ">
          <p className="items-left">{itemsLeft} items left </p>
          <div className="categories-status desktop">
          <button id="all" className={categories.all} data-text="All" onClick={(e) => {handleCurrentCategory(e)}}>All</button>
          <button id="active" className={categories.active} data-text="Active" onClick={(e) => {handleCurrentCategory(e)}}>Active</button>
          <button id="completed" className={categories.completed} data-text="Completed" onClick={(e) => {handleCurrentCategory(e)}}>Completed</button>
          </div>
          <button id="clear-completed" data-text="Clear Completed" onClick={() => {clearCompleted()}}>Clear Completed</button>
        </div>
        <div className="categories-status mob-cat mobile">
        <button id="all" className={categories.all} data-text="All" onClick={(e) => {handleCurrentCategory(e)}}>All</button>
          <button id="active" className={categories.active} data-text="Active" onClick={(e) => {handleCurrentCategory(e)}}>Active</button>
          <button id="completed" className={categories.completed} data-text="Completed" onClick={(e) => {handleCurrentCategory(e)}}>Completed</button>
        </div>    
      </div>
        // <div className="main-app__categories mobile-cat">

        // </div>
    );
}

export default Categories;