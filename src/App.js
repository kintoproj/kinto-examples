import React, { useState } from 'react';

import { AppBar, Toolbar, Typography, Card, Paper, Divider, InputBase, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircleOutline'
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded'
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo';
import moment from 'moment';
import './App.css';

const GetTodos = gql`
{
  todo(order_by: {created_at: desc}) {
    id
    status
    task
    created_at
  }
}
`;

const InsertTodo = gql`
mutation insertTodo($todos: [todo_insert_input!]!) {
  insert_todo(objects: $todos) {
    returning {
      id
      status
      task
    }
  }
}
`;

const RemoveTodo = gql`
mutation removeTodo($id: Int!) {
  delete_todo_by_pk(id: $id) {
    id
  }
}
`;

const StyledDiv = styled.div`
  .content {
    padding: 48px;
  }
  .card {
    padding: 12px;
  }
  .todo-item {
    margin-bottom: 12px;
  }
  .input-form {
    padding: 4px 8px;
    display: flex;    
    margin-bottom: 48px;
  }
  form {
    display: flex;
    flex-direction: row;
    input {
      flex-grow: 1;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

function App() {
  // const [todos, setTodos] = useState();
  const [newTodo, setNewTodo] = useState('');
  const { loading, error, data, refetch } = useQuery(GetTodos);

  const [addTodo] = useMutation(InsertTodo, {
    onCompleted: () => {
      refetch();
    }
  });

  const [removeTodo] = useMutation(RemoveTodo, {
    onCompleted: () => {
      refetch();
    }
  });
  console.log(data);
  return (
    <StyledDiv>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            TODO Example
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <Paper component="form" className="input-form">
          <InputBase
            placeholder="Create New TODO"
            inputProps={{ 'aria-label': 'create new todo' }}
            fullWidth={true}
            value={newTodo}
            onChange={(evt) => { setNewTodo(evt.target.value) }}
          />
          <Divider orientation="vertical" />
          <IconButton color="primary" aria-label="directions" onClick={() => {
            addTodo({
              variables: {
                todos: [{
                  status: 'ACTIVE',
                  task: newTodo,
                  created_at: 'now()'
                }]
              },
            });
            setNewTodo('');
          }}>
            <AddIcon />
          </IconButton>
        </Paper>
        {data && data.todo.map(todo => (
          <div key={todo.id} className="todo-item">
            <Card className="card">
              <div className="row">
                <Typography variant="h6">{todo.task}</Typography>
                <IconButton color="primary" aria-label="directions" onClick={() => {
                  removeTodo({
                    variables: {
                      id: todo.id
                    },
                  });
                }}>
                  <DeleteIcon />
                </IconButton>
              </div>

              <Typography variant="overline">{moment(todo.created_at).format('YYYY-MM-DD hh:mm:ss')}</Typography>
            </Card>
          </div>
        ))}

      </div>

    </StyledDiv>
  );
}

export default App;
