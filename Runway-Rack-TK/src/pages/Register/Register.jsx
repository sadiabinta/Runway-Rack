import { ThemeProvider } from "@emotion/react";
import { Copyright } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const defaultTheme = createTheme();
const Register = () => {
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user, createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    setPass(data.password);
    setConfirmPass(data.confirmPassword);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("logged user", loggedUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    {...register("firstName", {
                      maxLength: 20,
                      required: true,
                    })}
                  />
                  {errors.firstName?.type === "required" && (
                    <Typography variant="span" style={{ color: 'red' }}>First Name is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    {...register("lastName", { maxLength: 20 })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email?.type === "required" && (
                    <Typography variant="span" style={{ color: 'red' }}>Email is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    //name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <Typography variant="span" style={{ color: 'red' }}>Password is required</Typography>
                  )}
                  {errors.password?.type === "minLength" && (
                    <Typography variant="span" style={{ color: 'red' }}>
                      password must be 6 characters
                    </Typography>
                  )}
                  {errors.password?.type === "pattern" && (
                    <Typography variant="span" style={{ color: 'red' }}>
                      password must have at least one uppercase and one special
                      character
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 6,
                    })}
                  />
                  {pass !== confirmPass && (
                      <Typography variant="span" style={{ color: 'red' }}>
                      Password needs to be matched
                    </Typography>
                    )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="url"
                    label="Photo URL"
                    name="photoUrl"
                    {...register("url")}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    {...register("gender")}
                  >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </Grid> */}
                {/* <Grid item xs={12}>
                <Select
                            {...register("gender")
                            }
                            fullWidth
                            name="gender">
                                <MenuItem value={"select"}>
            <em>Select Gender</em>
          </MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
                        </Select>
              </Grid> */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone"
                    name="phone"
                    {...register("phone")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    {...register("address")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Register;
