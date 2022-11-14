import Item from "./Item";
import { useEffect, useState } from "react";


function List() {
  const [items, setItems] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  let lastCategory = localStorage.getItem("currentCategory");
  window.addEventListener("storage", onStorageChange);
  function handleCategoryFunctions(category) {
    // return(
    //   <div className="list"></div>
    // )
    switch (category) {
      case "all":
        return (
          <div className="list">
             {items
              ? items.map((item) => {
                  return (
                    <Item
                      key={item.id}
                      content={item.content}
                      checked={item.checked}
                      id={item.id}
                    />
                  );
                })
              : null} 
          </div>
        );
      case "active":
        // return items.filter((item) => item.checked === false);
        return (
          <div className="list">
            {items
              ? items.filter((item) => item.checked === false).map((item) => {
                  return (
                    <Item
                      key={item.id}
                      content={item.content}
                      checked={item.checked}
                      id={item.id}
                    />
                  );
                })
              : null}
          </div>
        );
      case "completed":
        // return items.filter((item) => item.checked === true);
        return (
          <div className="list">
            {items
              ? items.filter((item) => item.checked === true).map((item) => {
                  return (
                    <Item
                      key={item.id}
                      content={item.content}
                      checked={item.checked}
                      id={item.id}
                    />
                  );
                })
              : null}
          </div>
        );
              }
            
    }
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
    if (lastCategory) {
      setCurrentCategory(lastCategory);
      handleCategoryFunctions(lastCategory);
    }
  }, []);
  // const [value, setValue] = useState("");
  function onStorageChange() {
    setItems(JSON.parse(localStorage.getItem("items")));
    setCurrentCategory(localStorage.getItem("currentCategory"));
    handleCategoryFunctions(currentCategory);
    }

    return (
      handleCategoryFunctions(currentCategory)
    );
  }

export default List;
