import {
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
} from '@material-ui/core';
import React from 'react';
import './Todo.css';

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default Todo;
