import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    textAlign: "center",
    margin: "20px auto",
    marginTop: "auto",
  },
  media: {
    height: 140,
  },
  typography: {
    fontSize: 12,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.reeds.co.uk/app/uploads/2019/07/Money.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h6"
              className={classes.typography}
            >
              პერსონალური ინფლაციის კალკულატორი
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://base.imgix.net/files/base/ebm/industryweek/image/2019/04/industryweek_12607_financial_background_w_bar_graphs595_t.png?auto=format&fit=crop&h=432&w=768"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h6"
              className={classes.typography}
            >
              სფი კალკულატორი
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
