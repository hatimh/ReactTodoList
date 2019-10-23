import React from 'react';
import { Message, Checkbox, Icon } from 'semantic-ui-react';

export default ({ completed, text, updateTodos }) => (
  <Message
    {...(completed
      ? { success: true}
      : { info: true }
    )} 
  >
    <Checkbox
      checked={completed}
      onChange={() => updateTodos({ type: 'updateTodo', text })}
      label={text}
      {...completed
        ? { style: { textDecoration: 'line-through' } }
        : {}
      }
    />
    <Icon
      onClick={() => updateTodos({ type: 'removeTodo', text })}
      style={{ float: 'right', cursor: 'pointer' }}
      name="trash"
      color="red"
    />
  </Message>
)