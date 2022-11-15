import List from "./to-do-components/List";
import "../scss/components/_toDo.scss";
import Header from "./to-do-components/Header";
import HandleInput from "./to-do-components/HandleInput";
import Categories from "./to-do-components/Categories";


function ToDo(props) {

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
    localStorage.setItem("theme", "dark");
  }








  return (
    <div className="main-app width-limit">
      <Header theme={props.theme} />
      <div className="main-app__body">
        <HandleInput />
        <List />
        <Categories />
      </div>
    </div>
  );
}
export default ToDo;
