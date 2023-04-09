import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";

function DeleteTodo({ deleteHandler }) {
  return (
    <Button
      variant="text"
      color="primary"
      startIcon={<Delete />}
      onClick={deleteHandler}
    >
      Complete
    </Button>
  );
}

export default DeleteTodo;
