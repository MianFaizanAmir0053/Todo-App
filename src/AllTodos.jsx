import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import DeleteTodo from "./DeleteTodo";

function AllTodos({ todos, onRemoveTodo }) {
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      columns={{ xs: 4, sm: 8, md: 12 }}
      wrap="wrap"
    >
      {todos.map((todo) => (
        <Grid item xs={2} sm={4} md={4} key={todo.id}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography>{todo.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{todo.detail}</Typography>
            </AccordionDetails>
          </Accordion>
          <DeleteTodo deleteHandler={() => onRemoveTodo(todo.id)} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AllTodos;
