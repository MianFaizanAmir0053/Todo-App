import { Grid } from "@mui/material";
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import { useEffect, useState } from "react";
import AllTodos from "./AllTodos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos((prevTodos) => prevTodos.concat(storedTodos || []));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function removeTodo(idToRemove) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToRemove));
  }

  function createTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <Header />
      <CreateTodo todos={todos} onCreateTodo={createTodo} />
      <AllTodos todos={todos} onRemoveTodo={removeTodo} />
    </Grid>
  );
}

export default App;
