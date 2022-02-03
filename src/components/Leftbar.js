import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    position: "sticky",
    top: 0,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      border: "1px solid #ece7e7",
      color: "#555",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <div className={classes.item}>
          <HomeIcon className={classes.icon} />
          <Typography className={classes.text}>Home</Typography>
        </div>
        <div className={classes.item}>
          <PersonIcon className={classes.icon} />
          <Typography className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
          <ListIcon className={classes.icon} />
          <Typography className={classes.text}>Lists</Typography>
        </div>
        <div className={classes.item}>
          <CameraAltIcon className={classes.icon} />
          <Typography className={classes.text}>Camera</Typography>
        </div>
        <div className={classes.item}>
          <OndemandVideoIcon className={classes.icon} />
          <Typography className={classes.text}>Video</Typography>
        </div>
        <div className={classes.item}>
          <AppsIcon className={classes.icon} />
          <Typography className={classes.text}>Apps</Typography>
        </div>
        <div className={classes.item}>
          <BookmarkIcon className={classes.icon} />
          <Typography className={classes.text}>Save</Typography>
        </div>
        <div className={classes.item}>
          <SettingsIcon className={classes.icon} />
          <Typography className={classes.text}>Settings</Typography>
        </div>
        <div className={classes.item}>
          <LogoutIcon className={classes.icon} />
          <Typography className={classes.text}>Logout</Typography>
        </div>
      </Container>
    </>
  );
}

export default Leftbar;
