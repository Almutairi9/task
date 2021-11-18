import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line
import TodoItem from "../TodoItem";
// import "./style.css";

const BASE_URL = "http://localhost:5000";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const getTodos = async () => {
    const res = await axios.post(`${BASE_URL}/res`, {});
    setTodos(res.data);
  };

//   const NweUser = () => {
//     const ob = {
//       id: todos.length + 1,
//       email: AddinputSignvalue,
//       password: AddinputSignPass,
//     };  
//     axios.post(`${BASE_URL}/users/addNew`, ob)
//     .then(() => console.log(" item Created "))
//     .catch((err) => {
//       console.error(err);
//     });
//   console.log(todos);
// };

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
