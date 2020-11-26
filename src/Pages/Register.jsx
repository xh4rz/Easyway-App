import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  TextField,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = axios.create({
  baseURL: `http://localhost:3001/gets`
});
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
  dividerColor: {
    backgroundColor: 'white',
  },
  formControl: {
    minWidth: 205
  },
  selectEmpty: {
    marginTop: theme.spacing(2),

  },
  formSelect: {
    backgroundColor: 'red'
  }
}));

export default function FormRegister() {
  const classes = useStyles();
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  /*const [count, setCount] = React.useState({
    loading: false,
    Email: '',
    Contraseña: '',
    Nombres: '',
    Apellido: '',
    Telefono: '',
    Ciudad: '',
    Direccion: '',
  });

  const handleinputChange = (e) => {
    //console.log(e);
    setCount({
        ...count,
        [e.target.name]: e.target.value,
    });
  };
  const sumitb = async (e) => {
    //setCount({ loading: true});
    try {
      console.log("wait");
      let respost = await api.post('/newuser', {data: count.Nombres});
      console.log(respost);
    } catch (error) {
      console.log("wait2");
      console.log(error);
      setCount({ loading: false});
    }
  }*/
  /*if(count.loading === true){
    return <Redirect to='/'  />;
  }*/
  return (

    <Box display="flex" justifyContent="center" >
      <div className={classes.root}>
        <FormControl>

          <Box >
            <Typography variant="h3" gutterBottom>
              <Box fontWeight="fontWeightBold" m={3}>
                CREAR UNA CUENTA
             </Box>
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom>
            <Box display="flex" justifyContent="flex-start" fontWeight="fontWeightBold" >
              Información personal
             </Box>
          </Typography>
          <Divider classes={{ root: classes.dividerColor }} variant="fullWidth" />

          <Box mb={8}>
            <Box mt={3}>
              <Grid container spacing={1} my={1} alignItems="flex-end"  >
                <Grid item>
                  <PersonIcon />
                </Grid>
                <Grid item xs={5} >
                  <TextField
                    className="CampoTexto"
                    id="input-with-icon-grid1"
                    label="Nombres"
                    type="name"
                    fullWidth
                    InputProps={{
                      className: classes.input
                    }}
                  />
                </Grid>
                <Grid item>
                  <PersonAddIcon />
                </Grid>
                <Grid item xs={5} >
                  <TextField
                    className="CampoTexto"
                    id="input-with-icon-grid1"
                    label="Apellidos"
                    type="name"
                    fullWidth
                    InputProps={{
                      className: classes.input
                    }}
                  />
                </Grid>

              </Grid>
            </Box>

            <Box mt={3}>
              <Grid container spacing={1} my={1} alignItems="flex-end"  >
                <Grid item>
                  <PhoneIcon />
                </Grid>
                <Grid item xs={5} >
                  <TextField
                    className="CampoTexto"
                    id="input-with-icon-grid1"
                    label="Teléfono"
                    type="number"
                    fullWidth
                    InputProps={{
                      className: classes.input
                    }}
                  />
                </Grid>
                <Grid item>
                  <LocationCityIcon />
                </Grid>
                <Grid item xs={5} >
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Ciudad</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={city}
                      onChange={handleChange}
                    >
                      <MenuItem value="" >
                        <em>Seleccione:</em>
                      </MenuItem>
                      <MenuItem value={10}>Bogotá </MenuItem>
                      <MenuItem value={20}>Medellín</MenuItem>
                      <MenuItem value={30}>Cali</MenuItem>
                      <MenuItem value={40}>Barranquilla</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

              </Grid>
            </Box>

            <Box mt={3}>
              <Grid container spacing={1} my={1} alignItems="flex-end"  >
                <Grid item>
                  <RoomIcon />
                </Grid>
                <Grid item xs={11} >
                  <TextField
                    className="CampoTexto"
                    id="input-with-icon-grid1"
                    label="Dirección"
                    type="text"
                    fullWidth
                    InputProps={{
                      className: classes.input
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box mt={5}>
              <Typography variant="h6" gutterBottom>
                <Box display="flex" justifyContent="flex-start" fontWeight="fontWeightBold" >
                  Información de Acceso
             </Box>
              </Typography>
              <Divider classes={{ root: classes.dividerColor }} variant="fullWidth" />
            </Box>

            <Box mt={3}>
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
            <Box mt={3} >
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
              </Grid>
            </Box>

          </Box>

          <Button style={{ backgroundColor: '#3EE4EC' }}
            variant="contained"
            size="large"
            color="primary"
            endIcon={<SendIcon></SendIcon>}
          >
            REGISTRARME
            </Button>


          <Box mt={4} style={{ width: '100%' }} display="flex" justifyContent="center">
            <Link to="/Login"
              style={{ textDecoration: 'none', filter: 'contrast(1)' }}
            >
              <Button variant="contained" size="small" color="secondary" style={{ backgroundColor: '#ed7526' }}

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