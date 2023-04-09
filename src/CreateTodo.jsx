import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import {
  Button,
  FormControlLabel,
  Input,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function CreateTodo({ todos, onCreateTodo }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const saveTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      detail: detail,
      completed: false,
    };
    if (!title || !detail) {
      toast.remove();
      toast.error("Please fill all the fields");
      return;
    }
    onCreateTodo(newTodo);
    toast.remove();
    toast.success("Todo created successfully");
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const detailHandler = (e) => {
    setDetail(e.target.value);
  };
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Typography variant="body1" marginTop={5} color="initial">
            Title
          </Typography>
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Input value={title} onChange={titleHandler} />}
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Typography variant="body1" marginTop={5} color="initial">
            Detail
          </Typography>
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Input value={detail} onChange={detailHandler} />}
          />
        </FormGroup>
      </FormControl>

      <ButtonGroup variant="text" color="primary" aria-label="">
        <Button
          onClick={() => {
            setDetail("");
            setTitle("");
            saveTodo();
          }}
        >
          save
        </Button>
      </ButtonGroup>
      <Toaster />
    </>
  );
}

export default CreateTodo;
