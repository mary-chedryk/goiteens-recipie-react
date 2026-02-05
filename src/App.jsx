import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import initialTodos from './components/ToDo/todo.json';
import { Container } from './components/ToDo/Styles';
import TodoList from './components/ToDo/TodoList';
import TodoEditor from './components/ToDo/TodoEditor';
import { Filter, Info } from './components/ToDo/FilterInfo';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = (text) => {
    const todo = { id: nanoid(), text, completed: false };
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo => 
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    return todos.filter(todo => 
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodos = todos.length;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <h1>Мій Список Завдань 📝</h1>
        <Info total={totalTodos} completed={completedTodos} />
        <TodoEditor onAdd={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList 
          todos={visibleTodos} 
          onDelete={this.deleteTodo} 
          onToggle={this.toggleCompleted} 
        />
      </Container>
    );
  }
}

export default App;