import { Grid } from "@mui/material";
import classes from "./App.module.css";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { makeStyles } from "@mui/styles";
import Add from "./components/Add";
const useStyles = makeStyles((theme) => ({
  rightbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
