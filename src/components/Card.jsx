import React from 'react';
import './styles/Card.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@material-ui/core';
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

export default function MediaCard({ click, name, price, description, ID }) {
  const classes = useStyles();

  return (
    <div className="Card" style={{ display: "inline-flex" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={{ height: "150px" }}
            className={classes.media}
            image={shopping}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <textarea style={{ resize: 'none', height: 100 }} name="textarea" rows="10" cols="32"
                defaultValue={description} disabled></textarea> <br />
              <b>{price} COP</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button id={ID} size="large" className="Button__Card" onClick={click}>
            <Box mr={1} id={ID}>Agregar al carrito</Box>
            <AddShoppingCartIcon />
          </Button>

        </CardActions>
      </Card>
    </div>
  );
}