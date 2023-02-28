import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import "./App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 600,
    backgroundColor: "#E0E0E0 ",
  },
  form: {
    marginBottom: theme.spacing(2),
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
  },
  input: {
    fontSize: 16,
  }
}));

export const App = () => {
  const classes = useStyles();
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo.trim()]);
      setTodo('');
    }
  };

  const delTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper className={classes.root} style={{backgroundColor: "#F5F5F5"}}> 
      <Typography variant="h3" component="h3" style={{color: "#0B3C5D"}}align="center" gutterBottom>
        React Todo
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <TextField
              fullWidth
              label="Create a new to-do" 
              InputProps={{
                classes: {
                  input: classes.input, // apply font size to input text
                },
              }}
              InputLabelProps={{ classes: {
                root: classes.label, // apply font size to label text
              }}}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={addTodo}
              size="large"
              style={{ fontSize: '1.2rem' }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
      <List className={classes.list} style={{backgroundColor: "#E0E0E0 ", color: "#3c6382"}} >
        {todos.length > 0 ? (
          todos.map((todo, index) => (
          <ListItem key={index} style={{backgroundColor: '#E0E0E0'}}>

              <ListItemText primaryTypographyProps={{ style: { fontSize: '1.4rem' } }} primary={todo} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => delTodo(index)} > 
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        ) : (
          <ListItem >
            <ListItemText primary="No tasks" primaryTypographyProps={{ style: { fontSize: '1.4rem', backgroundColor: "#E0E0E0 " } }}/>
          </ListItem>
        )}
      </List>
    </Paper>
  );
};

export default App;
