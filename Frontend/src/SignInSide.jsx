import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const defaultTheme = createTheme();
const VITE_API_PATH = import.meta.env.VITE_API_PATH;

export default function SignInSide() {
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleLogin = async (data) => {
    axios.post(`${VITE_API_PATH}/auth/login`, {
      username: data.get("username"),
      password: data.get("password"),
    })
    .then((res) => {
      console.log(res.data);
      navigate("/");
    })
    .catch((err) => {
      window.alert("Invalid username or password. Please try again.");
    });
  };

  const handleRegister = async (data) => {
    axios.post(`${VITE_API_PATH}/auth/register`, {
      username: data.get("username"),
      password: data.get("password"),
      email: data.get("email"),
    })
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    if (checked) {
      handleLogin(data);
    } else {
      handleRegister(data);
    }

    event.target.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        className="SideSignIn"
        container
        component="main"
        sx={{
          height: "100vh",
          position: "relative",
          backgroundColor: checked ? "#010101" : "#0e0a21",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          className={`absolute w-full h-full ${
            checked ? "animate-moveBackgroundLeft" : "animate-moveBackgroundRight"
          }`}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            backgroundImage: checked
              ? "url(https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg)"
              : "url(https://images6.alphacoders.com/133/1338694.png)",
            top: "0%",
            left: checked ? "0%" : "41.7%",
            zIndex: "5",
            width: "100%",
            height: "100%",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            height: "100vh",
            background: "linear-gradient(to right, #ffd8b5, #daf0f7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: "2",
            opacity: checked ? "100%" : "0%",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: -850,
                  m: 2,
                  zIndex: "2",
                }}
              >
                <HomeIcon sx={{ color: "white", fontSize: 50 }} />
              </Box>
            </Link>
            <Avatar
              sx={{ m: 1, bgcolor: "#ff6835", width: 55, height: 55 }}
            ></Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontSize: 35, marginTop: 2 }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container sx={{ marginTop: 4 }}>
                <Grid item>
                  <Button variant="text" onClick={handleChange}>
                    <Typography variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            height: "100vh",
            background: "linear-gradient(to right,#f2c4e6,#c3f3f7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "2",
            opacity: checked ? "0%" : "100%",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 45,
                  m: 2,
                  zIndex: "10",
                }}
              >
                <HomeIcon sx={{ color: "#1f6bb1", fontSize: 50 }} />
              </Box>
            </Link>
            <Avatar
              sx={{ m: 1, bgcolor: "#fd43c8", width: 55, height: 55 }}
            ></Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontSize: 35, marginTop: 2 }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container sx={{ marginTop: 4 }}>
                <Grid item>
                  <Button variant="text" onClick={handleChange}>
                    <Typography variant="body2">
                      {"Already have an account? Sign In"}
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
