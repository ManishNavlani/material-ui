import React, { useState } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Typography,
  Tooltip,
  Button,
  IconButton,
  Modal,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Snackbar,
} from "@mui/material";
import Post from "./Post";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  icon: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));
function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <IconButton className={classes.icon}>
          <AddCircleIcon color="primary" fontSize="large" />
        </IconButton>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                size="small"
                fullWidth={true}
              />
            </div>
            <div className={classes.item}>
              <TextField
                fullWidth={true}
                id="standard-multiline-flexible"
                label="Description"
                multiline
                rows={4}
                variant="standard"
              />
            </div>
            <div className={classes.item}>
              <TextField
                select
                label="Visibility"
                value="Public"
                variant="standard"
                fullWidth={true}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who Can Comment ?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="Ony Friends"
                  control={<Radio size="small" />}
                  label="Ony Friends"
                />
                <FormControlLabel
                  value="No One"
                  control={<Radio size="small" />}
                  label="No One"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                style={{ marginRight: 20 }}
                onClick={handleClick}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={alert} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          color="primary"
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
