import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { app } from "./fireBase/FirebaseAuth";
import { logedInHandler, userDataHandler } from "../store/userSlice";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { useState } from "react";
import GithubIcon from '@material-ui/icons/GitHub'



const LoginPage = (props) => {
  const classes = styles();
  const dispatch = useDispatch();
  const [isDone, setIsDone] = useState(false);
  const auth = getAuth(app);

  const google_provider = new GoogleAuthProvider();
  const gitHub_provider = new GithubAuthProvider();
  const googleSignupHandler = () => {
    signInWithPopup(auth, google_provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const userData = result.user;
        // console.log(userData);
        dispatch(userDataHandler(userData));
        dispatch(logedInHandler(true));
        setIsDone(true)
        //TODO!!!!
        //possible to  redirect to home page after done!
      })
      .catch((error) => {
        console.log(error);
        setIsDone(false)
      });
  };


  //TODO!!!!!!!!
  // catch (auth/account-exists-with-different-credential).
  const githubSignupHandler = () => {
    signInWithPopup(auth, gitHub_provider)
      .then((result) => {
        const userData = result.user;
        console.log(userData);
        dispatch(userDataHandler(userData));
        dispatch(logedInHandler(true));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      {!isDone && (
        <>
          <Typography className={classes.text} variant="h4">
            Please choose a sign-up method:
          </Typography>
          <div className={classes.signUpDiv}>
            <br />
            <Button onClick={googleSignupHandler} variant="outlined">
              Signup with Google
            </Button>
            <br />
            <br />
            <Button startIcon={<GithubIcon/>} onClick={githubSignupHandler} variant="outlined">
              Signup with Github
            </Button>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default LoginPage;
const styles = makeStyles((theme) => ({
  signUpDiv: {
    margin: "auto",
    width: "50%",
    padding: "0px",
    textAlign: "center",
  },
  text: {
    marginTop: "3rem",
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));
