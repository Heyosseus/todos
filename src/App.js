import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import useLocalStorage from './components/useLocalStorage';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useLocalStorage('todos', []);
  // const [status, setStatus] = useState('all');

  // UseEffects
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);

  // useEffect(() => {
  //   saveLocalTodos();
  // }, [todos]);

  // const saveLocalTodos = () => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //     setTodos(todoLocal);
  //   }
  // };
  
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        // setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
