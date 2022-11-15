import List from "./to-do-components/List";
import "../scss/components/_toDo.scss";
import Header from "./to-do-components/Header";
import HandleInput from "./to-do-components/HandleInput";
import Categories from "./to-do-components/Categories";


function ToDo(props) {
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
