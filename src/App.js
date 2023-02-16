import React, {useState} from 'react'
import './App.css'

export const App = () => {
  const[todo,setTodo]=useState("");
  const[todos,setTodos]=useState([]);
  const addTodo=()=>{
    if(todo!==""){
      setTodos([...todos,todo]);
      setTodo("sdfs");
    }
  };
  const delTodo=(text)=>{
    const newTodos=todos.filter((todo)=>{
        return todo!==text;
  });
  setTodos(newTodos);
  }
  return (
    <div className='container'>
      <h2>React Todo</h2>
      <input 
      type='text' 
      className='add-todo form-control' 
      placeholder='Create a new to-do'
      onChange={(e)=>{
        setTodo(e.target.value);
      }}
      />
      <button className='add-todo btn btn-primary' onClick={addTodo} >Add</button>
      {todos?.length>0?(
        <ul className='todo-list'>
          {todos.map((todo,index)=>(
            <div className='todo'>
              <li key={index}>{todo}</li>
              <button className='btn btn-danger' onClick={()=>{delTodo(todo)}}>Delete</button>
            </div>
          ))}
        </ul>):(
          <div className="empty">
            <p>No task</p>
          </div>)
      }
    </div>
  )
}
export default App;
