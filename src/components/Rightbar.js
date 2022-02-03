import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
    marginBottom: theme.spacing(2),
  },
  link: {
    marginRight: theme.spacing(1),
    fontSize: 16,
    color: "#555",
  },
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Friends</Typography>
      <AvatarGroup max={8} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title}>Gallery</Typography>
      <ImageList cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="img"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="img"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="img"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="img"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="img"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="img"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title}>Categories</Typography>
      <Link href="#" underline="hover" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" underline="hover" className={classes.link} variant="body2">
        Music
      </Link>
      <Link href="#" underline="hover" className={classes.link} variant="body2">
        Lifestyle
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" underline="hover" className={classes.link} variant="body2">
        Movie
      </Link>
      <Link href="#" underline="hover" className={classes.link} variant="body2">
        Anime
      </Link>
      <Link href="#" underline="hover" className={classes.link} variant="body2">
        Gaming
      </Link>
    </Container>
  );
}

export default Rightbar;
