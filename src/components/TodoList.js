import React from 'react';

import Todo from './Todo';
import { Grid } from 'semantic-ui-react';

const TodoList = ({ todos, updateTodos }) => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column mobile={16} tablet={12} computer={10}>
          {
            todos.map(todo => (
              <Todo
                updateTodos={updateTodos}
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
              )
            ) 
          }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default TodoList;