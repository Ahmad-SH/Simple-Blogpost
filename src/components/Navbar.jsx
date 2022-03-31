import { Fragment } from "react";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Buttons from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  logedInHandler,
  selectSignedIn,
  selectUserData,
  userDataHandler,
} from "../store/userSlice";
import { getAuth } from "@firebase/auth";
import { app } from "./fireBase/FirebaseAuth";
import { signOut } from "@firebase/auth";
import Home from "./Home";

import SearchBar from "./SearchBar";
import BlogSearch from "./BlogSearch";
const HomePage = (props) => {
  const classes = styles();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);
  const auth = getAuth(app);
  const logOutUserHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(logedInHandler(false));
        dispatch(userDataHandler(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">BLOG</Typography>
          {isSignedIn && <SearchBar />}
          <div className={classes.navButtons}>
            {isSignedIn && (
              <>
                <Avatar className={classes.avatar} src={userData.photoURL} />
                <Buttons onclick={logOutUserHandler} class={classes.button}>
                  Logout
                </Buttons>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {!isSignedIn && <Home />}
      {isSignedIn && <BlogSearch />}
    </Fragment>
  );
};

export default HomePage;

const styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1c9c9c",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: "#fff",
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    marginLeft: "10px",
  },
  navButtons: {
    display: "flex",
    alignItems: "center",
  },
}));
