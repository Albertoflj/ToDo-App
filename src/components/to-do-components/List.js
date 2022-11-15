import Item from "./Item";
import { useEffect, useState } from "react";


function List() {
  const [items, setItems] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");

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
  }

  let lastCategory = localStorage.getItem("currentCategory");
  window.addEventListener("storage", onStorageChange);

  //choses what to show depending on the current category
  function handleCategoryFunctions(category) {
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
