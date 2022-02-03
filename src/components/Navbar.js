import { alpha, AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "90%",
    color: "white",
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  cancelIcon: {
    marginRight: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function NavBar() {
  const [open, setOpen] = useState(false);
  const styles = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" className={styles.logoLg}>
          MANISH NAVLANI
        </Typography>
        <Typography variant="h6" className={styles.logoSm}>
          MANISH
        </Typography>
        <div className={styles.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." className={styles.input} />
          <CancelIcon
            className={styles.cancelIcon}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={styles.icons}>
          <SearchIcon
            className={styles.searchBtn}
            onClick={() => setOpen(true)}
          />
          <Badge color="secondary" badgeContent={2} className={styles.badge}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={4} className={styles.badge}>
            <NotificationsActiveIcon />
          </Badge>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>MN</Avatar>
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
