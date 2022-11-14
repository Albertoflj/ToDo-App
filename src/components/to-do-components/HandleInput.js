import { useRef } from "react";

function HandleInput() {
  const inputRef = useRef(null);
  const checkedRef = useRef(null);
  // every item ls should hold an id, checked and content

 

  function createId() {
    return Math.floor(Math.random() * 100000000);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      let id = createId();
      let content = inputRef.current.value;
      let checked = checkedRef.current.checked;
      const items = JSON.parse(localStorage.getItem("items")) || [];
      items.unshift({ id, content, checked });
      localStorage.setItem("items", JSON.stringify(items));
      window.dispatchEvent(new Event("storage"));
      inputRef.current.value = "";
    }
  }
  return (
    <div className="main-app__input">
      <div className="main-app__input__check">
        <input
          ref={checkedRef}
          type="checkbox"
          name="done"
          className="done-checkbox"
          id="main-input"
        />
        <label className="done-label" htmlFor="main-input" />
      </div>
      <input
        ref={inputRef}
        type="text"
        name="todo"
        id="todo-input"
        className="todo"
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo..."
      />
    </div>
  );
}
export default HandleInput;
