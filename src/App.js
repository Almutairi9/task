import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import TodoItem from './components/TodoItem'
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div className="App"> 
    <Header />
      {/* <Login />
      <Signup /> */}
      <Routes>
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/" element={<Todos />} />
        <Route exact path="/todos" element={<TodoItem />} />
      </Routes> 
      <Footer />
    </div>
  );
};

export default App;

// const BASE_URL = "http://localhost:5000";
// const [todo, setTodo] = useState([]);

// useEffect(() => {
//   getAllTodos();
// }, []);

// const getAllTodos = async () => {
//   const todo = await axios.get(`${BASE_URL}/todo`);

//   setTodo(todo.data);
//   console.log(todo.data);
// };
