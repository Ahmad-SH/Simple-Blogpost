import { Button, makeStyles, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import bookImg from "../tools/book1.jpeg";
import LoginPage from "./LoginPage";

const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const signupClickedHandler = () => {
    setIsPressed(true);
  };
  const classes = styles();
  const content = (
    <div className={classes.welcome}>
      <img className={classes.img} src={bookImg} alt="books" />
      <Typography className={classes.text} variant="h1">
        Tech Geeks
        <br /> Favorite Place!
      </Typography>
      <Typography className={classes.secondaryText} variant="h6">
        we provide latest news on tech trends,just sign-up and you are all set.
      </Typography>
      <Button onClick={signupClickedHandler} className={classes.SignUpbutton}>
        Sign Up
      </Button>
    </div>
  );
  return <Fragment>{isPressed ? <LoginPage /> : content}</Fragment>;
};

export default Home;
const styles = makeStyles((theme) => ({
  signUpDiv: {
    margin: "auto",
    width: "60%",
    border: "1px solid black",
    padding: "10px",
  },

  secondaryText: {
    color: "grey",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },

  button: {
    color: "#fff",
  },
  img: {
    display: "block",
    marginLeft: " auto",
    marginRight: "auto",
    width: "10%",
    height: "10%",
  },
  welcome: {
    display: "block",
    marginLeft: " auto",
    marginRight: "auto",
    textAlign: "center",
    marginTop: "3rem",
  },
  text: {
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      fontSize: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      fontSize: "30px",
    },
  },
  SignUpbutton: {
    color: "white",
    backgroundColor: "#1c9c9c",
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
}));
