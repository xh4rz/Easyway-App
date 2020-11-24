import React from 'react';
import './styles/Card.css';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Box} from '@material-ui/core';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
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
        <div className= "Card">
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
              Nombre del producto
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Descripción:</b> <br/>
              <b>Precio:</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" className="Button__Card">
            <Box mr={1}>Agregar al carrito</Box>
            <AddShoppingCartIcon/>
          </Button>

        </CardActions>
      </Card>
      </div>
    );
  }