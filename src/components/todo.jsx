import { useState } from "react";
import "./todo.css";
import TodoItem from "./todoItem";

const Todo = () => {
  const [text, setText] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddItem = () => {
    let copy = [...shoppingList];
    copy.push(text);
    setShoppingList(copy);
  };

  return (
    <div className="todo">
      <h3>Shopping List</h3>

      <div className="form">
        <input onChange={handleTextChange} placeholder="Add to shopping list" type="text"></input>
        <button onClick={handleAddItem} className="btn btn-sm btn-primary">
          Add
        </button>
      </div>

      <div className="list">
        <h6>There are {shoppingList.length} items in your list</h6>

        {shoppingList.map((t, index) => (
          <TodoItem key={index} content={t}></TodoItem>
        ))}
      </div>
    </div>
  );
};

export default Todo;
