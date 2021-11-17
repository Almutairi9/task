import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./style.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const getTodos = async () => {
    const res = await axios.post("http://localhost:5000/todo/getAll", {});
    setTodos(res.data);
  };

//   const createTodo = async () => {
//     const res = await axios.post("http://localhost:5000/todo/getAll", {});
//     setTodos(res.data);
//   };

  return (
    <div className="todosWrapper">
      <div className="todosCon">
        <div>
          <input placeholder="Add a new todo" />
          <br></br>
          <button>ADD</button>
        </div>
        {todos ? (
          <ul>
            {todos.map((todo) => (
              <li>{todo}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Todos;
