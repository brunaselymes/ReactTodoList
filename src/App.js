import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "Be awesome", isCompleted: false, },
    { text: "Put on a face mask", isCompleted: false, },
    { text: "Watch funny videos", isCompleted: false, },
    { text: "Sip on my coffee", isCompleted: false, },
    { text: "Breath in and breath out", isCompleted: false, }
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}

      </div>
    </div>
  );

}

export default App;
