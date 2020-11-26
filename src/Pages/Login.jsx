import React, {useState} from 'react';
import  { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField, Grid, Typography, Box, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';
const api = axios.create({
  baseURL: `http://localhost:3001/gets`
});
import { Link } from 'react-router-dom';

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
  const [count, setCount] = useState({
    loading: false,
    Email: '',
    Contraseña: '',
  });

  const handleChange = (e) => {
    //console.log(e);
    setCount({
        ...count,
        [e.target.name]: e.target.value,
    });
  };
  const sumitb = async (e) => {
    //setCount({ loading: true});
    try {
      await api.get('/'+count.Email).then( (res) => {
        
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify({Email: res.data[0].Email}));
        setCount({ loading: true});
      });
      
    } catch (error) {
      console.log(error);
      setCount({ loading: false});
    }
  }
  if(count.loading === true){
    return <Redirect to='/'  />;
  }
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
                  name="Email"
                                      onChange={handleChange}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3} mb={5}>
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
                  name="Contraseña"
                                        onChange={handleChange}
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

          <Box mb={5} style={{ width: '100%' }} display="flex" justifyContent="center">
                <Link to="/Register"
                  style={{ textDecoration: 'none', filter: 'contrast(1)' }}
                >
                  <Button style={{ textTransform: 'none' }} variant="outlined" size="small" color="secondary" >
                    Si no tienes cuenta da clic acá
                </Button>
                </Link>
          </Box>

            <Button style={{ backgroundColor: '#3EE4EC' }}
              variant="contained"
              size="large"
                                        onClick={sumitb}
              color="primary"
              endIcon={<SendIcon></SendIcon>}
            >
              INGRESAR
            </Button>


          <Box mt={4} style={{ width: '100%' }} display="flex" justifyContent="center">
            <Link to="/"
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