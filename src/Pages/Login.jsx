import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { TextField, Grid, Typography, Box, Button } from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';

import VpnKeyIcon from '@material-ui/icons/VpnKey';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '14vh',
    padding: theme.spacing(0, 10, 5, 10),
    // backgroundColor: '#262236',
    // color: '#ffffff',
    border: '5px solid',
    textAlign: 'center'
  },
  main: {
    height: '88vh'
  },
  form: {
    margin: '1vh 0vh'
  }

}));

export default function FormLogin() {
  const classes = useStyles();

  return (


    <Box className={classes.main} display="flex" justifyContent="center">
      <div className={classes.root}>

        <Typography variant="h3" gutterBottom>
          INICIAR SESIÓN
      </Typography>

        <Grid container spacing={1} alignItems="flex-end" className={classes.form}>
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

        <Grid container spacing={1} alignItems="flex-end" className={classes.form}>
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
