import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button} from '@material-ui/core';

import shopping from './images/cards/shopping.jpeg'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 10,
    },

    media: {
      height: 140,
    },
  });

  export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className= "Card" style={{display: "inline-flex"}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={{height: "150px"}}
            className={classes.media}
            image={shopping}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
    );
  }