import List from "./to-do-components/List";
import "../scss/components/_toDo.scss";
import Header from "./to-do-components/Header";
import HandleInput from "./to-do-components/HandleInput";
import Categories from "./to-do-components/Categories";
function ToDo(props) {


  // on storage change update items
  //! BUG
  function onStorageChange() {
    // setItems(JSON.parse(localStorage.getItem("items")));
    // items ? itemsLeft = filterItemsLeft() : null;
  }
  window.addEventListener("storage", onStorageChange);





  return (
    <div className="main-app width-limit">
      <Header theme={props.theme} />
      <div className="main-app__body">
        {/* input */}

        <HandleInput />
        <List />
        {/* categories */}
        <Categories />
      </div>
    </div>
  );
}
export default ToDo;
