import React, { useReducer } from 'react';
import { Header, Container } from 'semantic-ui-react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoReducer = (state, payload) => {
  const { type, ...todo } = payload;

  switch (type) {
    case 'addTodo':
      const exists = state.find(currTodo => currTodo.text === todo.text);
      return (
        exists
          ? state
          : [...state, todo]
      );
    case 'removeTodo':
      return state.filter(todo => todo.text !== payload.text);
    case 'updateTodo':
      return state.map(
        currTodo => currTodo.text !== payload.text
          ? currTodo
          : {...todo, completed: !currTodo.completed }
      );
    default:
      return state; 
  }
}

const App = () => {
  const [todos, updateTodos] = useReducer(todoReducer, []);

  return (
    <div style={{ marginTop: 20 }}>
      <Container>
        <Header as='h2' textAlign="center" size="huge">Todo List App</Header>
        <TodoList todos={todos} updateTodos={updateTodos} />
        <TodoForm updateTodos={updateTodos} />
      </Container>
    </div>
  );
}

export default App;
