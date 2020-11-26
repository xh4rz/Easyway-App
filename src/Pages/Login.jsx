import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField, Grid, Typography, Box, Button, Link } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '14vh',
    padding: theme.spacing(0, 8, 3, 8),
    backgroundColor: '#262236',
    color: '#ffffff',
    border: '5px solid',
    textAlign: 'center',
    "& label.Mui-focused": {
      color: '#ed7526'
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: '#3ee4ec'
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: '#ffffff'
    },
    "& label": {
      color: '#ffffff'
    },
  },
  input: {
    color: "#ed7526"
  },
}));

export default function FormLogin() {
  const classes = useStyles();

  return (

    <Box display="flex" justifyContent="center">
      <div className={classes.root}>
        <FormControl>

          <Typography variant="h3" gutterBottom>
            <Box fontWeight="fontWeightBold" m={3}>
              INICIAR SESIÓN
             </Box>
          </Typography>

          <Box my={0}>
            <Grid container spacing={1} my={1} alignItems="flex-end" className={classes.form}>
              <Grid item>
                <MailIcon />
              </Grid>
              <Grid item xs={11} >
                <TextField
                  className="CampoTexto"
                  id="input-with-icon-grid1"
                  label="Email"
                  type="email"
                  fullWidth
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3} mb={8}>
            <Grid container spacing={1} alignItems="flex-end" className={classes.form}>
              <Grid item>
                <VpnKeyIcon />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  className="CampoTexto"
                  id="input-with-icon-grid2"
                  label="Contraseña"
                  type="password"
                  fullWidth
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Grid>

              <Box style={{ width: '100%' }} display="flex" justifyContent="flex-end">
                <Link
                  style={{ textDecoration: 'none', filter: 'contrast(1)' }}
                  onClick={() => {
                    alert("Disponible Próximamente...");
                  }}
                >
                  <Button style={{ textTransform: 'none' }} variant="text" size="small" color="secondary" >
                    ¿Has olvidado tu contraseña?
                </Button>
                </Link>
              </Box>

            </Grid>
          </Box>

            <Button style={{ backgroundColor: '#3EE4EC' }}
              variant="contained"
              size="large" 
              color="primary"
              endIcon={<SendIcon></SendIcon>}
            >
              INGRESAR
            </Button>


          <Box mt={4} style={{ width: '100%' }} display="flex" justifyContent="center">
            <Link
              style={{ textDecoration: 'none', filter: 'contrast(1)' }}
            >
              <Button variant="contained" size="small" color="secondary"style={{ backgroundColor: '#ed7526' }}

                startIcon={<ArrowBackIosIcon ></ArrowBackIosIcon>}>
                  volver
                </Button>
            </Link>
          </Box>


        </FormControl>
      </div>
    </Box>
  );
}