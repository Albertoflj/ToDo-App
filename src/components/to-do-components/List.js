import Item from "./Item";
import { useEffect, useState } from "react";
function List() {
  const [items, setItems] = useState(null);
  // const [value, setValue] = useState("");
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);
  function onStorageChange() {
    setItems(JSON.parse(localStorage.getItem("items")));
  }
  window.addEventListener("storage", onStorageChange);
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
}
export default List;
