import React, { useState } from "react";
import "./App.css";
import uniqid from "uniqid";
import InputGroup from "./InputGroup";
import TodoCard from "./ToDo Card/TodoCard";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo Application</h1>
        <InputGroup todoList={todoList} setTodoList={setTodoList} />
        <hr />

        {todoList.map((todoItem) => {
          return (
            <TodoCard
              key={uniqid()}
              title={todoItem.title}
              description={todoItem.description}
            />
          );
        })}
      </header>
    </div>
  );
};

export default App;
