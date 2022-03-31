import { Button } from "@material-ui/core";
import React from "react";

const Buttons = (props) => {
  return (
    <Button
      onClick={props.onclick}
      startIcon={props.startIcon}
      className={props.class}
     
    >
      {props.children}
    </Button>
  );
};

export default Buttons;
