import React, { Component } from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

class App extends Component {
  render() {
    return (
    <div className="App">
    <TodoList />
    <TodoInput />
  </div>
  );
 }
}
export default App;