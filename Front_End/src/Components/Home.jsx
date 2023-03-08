import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../Styles/home.css";
import Consumer from './Consumer';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{margin:2, fontSize:20}}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://locomo.com/" style={{color:"grey"}}>
        S H R E E
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Home = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={12}
          md={12}
          sx={{
            backgroundImage: "url(/assets/train2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 id="home-heading2">LOCOMOCO </h1>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "#FAFFFD" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 15,
            py: 17,
          }}
        >
          <h1 id="home-heading">LOCOMOCO</h1>
          <h2 className="home-half">Welcomes You !!</h2>
          <h2 className="home-half">Your Destiny awaits at your Destination</h2>
        </Box>
      </Grid>
      <Consumer/>
      <Grid
        item
        xs={false}
        sx={{
          backgroundImage: "url(/assets/train4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 26,
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontFamily: "'Noto Rashi Hebrew', serif",
              fontSize: 40,
              fontWeight: 900,
            }}
          >
            Don't have an account ?
          </Typography>
          <Link
            to="/basic"
            sx={{
              textDecoration: "none",
              color: "black",
              fontFamily: "'Noto Rashi Hebrew', serif",
            }}
          >
            <Button maxWidth={true} variant="contained" id="button-register" onClick={() => props.setColor("#d7d9d7")}>
              REGISTER
            </Button>
          </Link>
        </Box>
      </Grid>
      <Copyright />
    </ThemeProvider>
  );
};

export default Home;
