import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { searchInputHandler } from "../store/userSlice";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("tech");
  const classes = styles();
  const dispatch = useDispatch();

  const changeDataHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const searchDataHandler = () => {
    dispatch(searchInputHandler(searchInput));
  };
  return (
    <Fragment>
      <div>
        <TextField
          color="#FFFFFF"
          onChange={changeDataHandler}
          value={searchInput}
          className={classes.textInput}
        />
        <Button onClick={searchDataHandler}>Search</Button>
      </div>
    </Fragment>
  );
};

export default SearchBar;
const styles = makeStyles((theme) => ({
  textInput: {
    color: "inherit",
  },
}));
