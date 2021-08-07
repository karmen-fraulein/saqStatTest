import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main_container: {
    width: "96%",
    height: "auto",
    backgroundColor: "rgb(172 192 193)",
    margin: "auto",
    position: "relative",
    top: "22px",
    borderRadius: "9px",
    boxShadow: "0px 3px 13px 1px #88888873",
    display: "flex",
    ["@media (max-width: 814px)"]: {
      flexDirection: "column",
    },
  },
}));

function Container({children}) {
  const classes = useStyles();
  return <div className={classes.main_container}>{children}</div>;
}

export default Container;
