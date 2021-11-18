import React from "react";
// import './style.css'

const Todo  =(props)=>{

  return (
    <>
      <li>
        {props.todos.name}
        <span onClick={() => props.deletitem(props.todos.todoId)}>
          Delete
        </span>
        <i onClick={()=> props.editeitem(props.todos.todoName)}> edite</i>
      </li>
    </>
  );
}

export default Todo;
