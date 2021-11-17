import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Todos />} />
        <Route exact path="/todos" element={<Todos />} />
      </Routes>
      {/* <Todos /> */}
      <Header />
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
