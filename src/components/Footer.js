import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    minHeight: "170px",
    textAlign: "center",
  },
  icons: {
    fontSize: "26px",
    color: "#2d93ea",

    marginTop: "80px",
  },
  iconMedia: {
    marginRight: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#1f74be",
      transition: "0.5s",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.icons}>
        <span className={classes.iconMedia}>
          <i className="fab fa-facebook"></i>
        </span>
        <span className={classes.iconMedia}>
          {" "}
          <i className="fab fa-twitter"></i>
        </span>
      </div>
      <div>
        <h4>© 2019 ყველა უფლება დაცულია. </h4>
      </div>
      <div>
        <h4>საქართველოს სტატისტიკის ეროვნული სამსახური (საქსტატი)</h4>
      </div>
    </div>
  );
}

export default Footer;
