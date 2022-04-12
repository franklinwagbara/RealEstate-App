import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
//import { Button } from "@mui/material";
//import { Button } from "@material-ui/core";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  RadioGroup,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import {
  DeleteOutlined,
  MoreVert,
  MoreVertOutlined,
  Send,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Radio } from "@mui/material";
import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const api = axios.create({
  baseURL: "http://localhost:800/notes",
});

const MAT = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [category, setCategory] = useState("money");
  const [data, setData] = useState([]);

  const handleDeleteNote = (note) => {
    const originalData = [...data];
    setData(data.filter((item) => item.id !== note.id));
    api.delete("/" + note.id).catch((res) => {
      console.log("errror");
      setData(originalData);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && detail)
      api
        .post("/", { title: name, details: detail, category: category })
        .then((res) => setData((prev) => [...prev, res.data]));

    if (name === "") setNameError(true);
    else setNameError(false);

    if (detail === "") setDetailError(true);
    else setDetailError(false);
  };

  useEffect(() => {
    api.get("/").then((res) => setData(res.data));
  }, []);

  console.table("data", data);
  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={classes.field}
          required
          color="primary"
          fullWidth
          label="name"
          variant="outlined"
          error={nameError}
        />

        <TextField
          onChange={(e) => setDetail(e.target.value)}
          value={detail}
          className={classes.field}
          required
          color="primary"
          fullWidth
          label="detail"
          multiline
          minRows={4}
          variant="outlined"
          error={detailError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          onClick={() => console.log("clicked submit")}
          type="submit"
          variant="outlined"
          endIcon={<Send />}
        >
          Submit
        </Button>
      </form>

      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} xs={12} sm={6} md={3} item>
            <NoteCard note={item} onDelete={handleDeleteNote}></NoteCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const NoteCard = ({ note, onDelete }) => {
  return (
    <>
      <Card elevation={2} sx={{ minHeight: 400 }}>
        <CardHeader
          action={
            <IconButton onClick={() => onDelete(note)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="GrayText">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MAT;
