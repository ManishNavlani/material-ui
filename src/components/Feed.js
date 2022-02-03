import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </Container>
  );
}

export default Feed;
