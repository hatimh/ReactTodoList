import React, { useState } from 'react';

import { Form, Grid, GridColumn } from 'semantic-ui-react';

const TodoForm = ({ updateTodos }) => {
  const [currentValue, setCurrentValue] = useState('');

  const updateCurrentValue = (e, data) => {
    setCurrentValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentValue) {
      setCurrentValue('');
      updateTodos({ type: 'addTodo', text: currentValue, completed: false });
    }
  }

  return (
    <Grid>
      <Grid.Row centered>
        <GridColumn mobile={16} tablet={12} computer={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              value={currentValue}
              onChange={updateCurrentValue}
              placeholder="Enter title or description"
              action="Add Todo"
            />
          </Form>
        </GridColumn>
      </Grid.Row>
    </Grid>
  )
}

export default TodoForm;