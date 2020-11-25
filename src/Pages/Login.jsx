import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { TextField, Grid, Typography, Box, Button } from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';

import VpnKeyIcon from '@material-ui/icons/VpnKey';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10),
    padding: theme.spacing(0, 10, 5, 10),
    // backgroundColor: '#262236',
    // color: '#ffffff',
    border: '5px solid',
    textAlign: 'center'
  }

}));

export default function FormLogin() {
  const classes = useStyles();

  return (


    <Box display="flex" justifyContent="center">
      <div className={classes.root}>

        <Typography variant="h3" gutterBottom>
          INICIAR SESIÓN
      </Typography>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MailIcon />
          </Grid>
          <Grid item xs={10} >
            <TextField
              id="input-with-icon-grid"
              label="Email"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VpnKeyIcon />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="input-with-icon-grid"
              label="Contraseña"
              fullWidth
            />
          </Grid>
        </Grid>

        <br /> <br/>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon>ENVIAR</SendIcon>}
        >
          ENVIAR
      </Button>
      </div>
    </Box>




  );
}
