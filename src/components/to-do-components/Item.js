import deleteIcon from "../../assets/images/icon-cross.svg";
import { useState, useEffect } from "react";

function Item(props) {
  const [items, setItems] = useState(null);
  // cut text if it's checked  
  let checkedClass = "";
  props.checked ? (checkedClass = "checked cut-text") : (checkedClass = "");


  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  function createId() {
    return Math.floor(Math.random() * 100000000);
  }
  // on storage change update items
  function onStorageChange() {
    setItems(JSON.parse(localStorage.getItem("items")));
    
  }
  window.addEventListener("storage", onStorageChange);

  let id = createId();

  function handleChecked(){
    items ?
      items.map((item) => {
        if (item.id === props.id) {
          item.checked = !props.checked;
          item.checked ? (checkedClass = "checked cut-text") : (checkedClass = "");

        }  
      })
    : null;

    localStorage.setItem("items", JSON.stringify(items));    
    window.dispatchEvent(new Event("storage"));
  }

  function handleDelete() {
    items ?
      items.map((item) => {
        if (item.id === props.id) {
          items.splice(items.indexOf(item), 1);
        }
      })
    : null;
    localStorage.setItem("items", JSON.stringify(items));    
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className={"item " + checkedClass}>
      <div className="main-app__input__check">
        <input
          type="checkbox"
          name="done"
          className="done-checkbox"
          id={id}
          checked={props.checked}
          onChange={handleChecked}
        />

        <label className="done-label" htmlFor={id} />
      </div>

      <p className="item__content" onClick={handleChecked}>{props.content}</p>
      <div className="item__delete">
        <img src={deleteIcon} alt="delete" onClick={handleDelete}  />
      </div>
    </div>
  );
}
export default Item;
