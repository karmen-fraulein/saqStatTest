import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {api} from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
    margin: "auto",
    marginTop: "100px",
  },

  cards: {
    maxWidth: 240,
    borderRadius: "14px",
    boxShadow: "2px 4px 9px 1px #88888894;",

    ["@media (max-width:607px)"]: {
      height: "299px",
    },
  },
  media: {
    height: 100,
    borderRadius: "14px",
    border: "8px  #fff solid",
  },
  cardItem: {
    display: "flex",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "15px",
  },
  cardContent: {
    width: "auto",
    height: "auto",
  },
}));

export default function CardsInfo() {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    api.then((dataFetch) => {
      setData(dataFetch.arr.children);
    });
  }, []);
  console.log(data);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data[0] &&
          data[0].name &&
          data.map((el) => (
            <Grid
              item
              md={5}
              sm={6}
              xs={12}
              xl={4}
              className={classes.cardItem}
            >
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://thumbs.dreamstime.com/z/greek-food-background-traditional-different-dishes-top-view-close-up-143835881.jpg"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h5"
                      className={classes.cardTitle}
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      ჯგუფის წონა: {el.weight}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      ფასის ცვლილება: {el.children[0].pricechange} %
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
