import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../stories/containers/Footer/Footer";
import Navbar from "../../stories/containers/Navbar/Navbar";
import SaleBanner from "../../stories/containers/SaleBanner/SaleBanner";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { verifyUser } from "../../services/apis/auth";

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();

  const foo = async (email, password) => {
    const data = await verifyUser(email, password);

    if (data) {
      navigate("/checkout");
    } else {
      alert("wrong crendentials");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    foo(data.get("email"), data.get("password"));
  };
  return (
  <>
      
   
      <div style={{ margin: "5%" }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Paper elevation={4} sx={{ padding: "40px" }}>
            <CssBaseline />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
 
     </>
  );
};

export default Login;
