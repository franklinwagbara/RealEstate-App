import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { DeleteOutlined, Send } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import React, { useState, useEffect, createContext, useContext } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
//import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Layout from "./layout";
import { useNavigate } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const DeleteContext = createContext();

const axiosApi = axios.create({
  baseURL: "http://localhost:800/notes",
});

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#b53f9d",
      light: "#65c3bc",
    },
    secondary: {
      main: "#f5c500",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 800,
  },
});

const Mui = () => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title && details) {
      axiosApi.post("/", {
        title: title,
        details: details,
        category: category,
      });
      navigate("/");
    }
    if (title === "") setTitleError(true);
    if (details === "") setDetailsError(true);
    setTitle("");
    setDetails("");
    setCategory("money");
  };

  return (
    <>
      <Container>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={classes.field}
            required
            variant="outlined"
            label="Title"
            fullWidth
            error={titleError}
          />

          <TextField
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            className={classes.field}
            required
            variant="outlined"
            label="Details"
            multiline
            minRows={4}
            fullWidth
            error={detailsError}
          />

          <FormControl className={classes.field}>
            <FormLabel id="radio-groups">Note Category</FormLabel>
            <RadioGroup
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              aria-labelledby="radio-group"
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />

              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todos"
              />

              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminders"
              />

              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
          <Button
            color="primary"
            type="submit"
            endIcon={<Send />}
            variant="outlined"
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axiosApi
      .get("/")
      .then((resp) => setNotes(resp.data))
      .catch((resp) =>
        console.log("Something went wrong while trying to fetch data")
      );
  }, []);

  const deleteNote = (note) => {
    const originalNotes = [...notes];
    const newNotes = notes.filter((_note) => _note.id !== note.id);
    setNotes(newNotes);
    axiosApi.delete("/" + note.id).catch((resp) => {
      setNotes(originalNotes);
      console.log("something went wrong while trying to delete");
    });
    console.log("dete", notes);
  };

  console.log("re-rendering", notes);

  return (
    <DeleteContext.Provider value={deleteNote}>
      <div style={{ marginTop: 10 }}>
        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid key={note.id} xs={12} sm={6} md={3} item>
              <Note note={note} />
            </Grid>
          ))}
        </Grid>
      </div>
    </DeleteContext.Provider>
  );
};

const Note = ({ note }) => {
  const deleteNote = useContext(DeleteContext);
  return (
    <>
      <Card elevation={2} sx={{ minHeight: 300 }}>
        <CardHeader
          action={
            <IconButton onClick={() => deleteNote(note)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant={"body2"} color="GrayText">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export const App2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Mui />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default Mui;
