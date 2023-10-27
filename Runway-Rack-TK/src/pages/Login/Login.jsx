import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ThemeProvider } from "@emotion/react";
import { Copyright } from "@mui/icons-material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography, createTheme } from "@mui/material";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const defaultTheme = createTheme();
    const { register, handleSubmit } = useForm();
    const [checked, setChecked] = useState(false);

    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const from=location.state?.from?.pathname ||'/';

    const onSubmit = data => {
        console.log(data);

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                  title: 'Successfully Logged In',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })
                navigate(from, {replace:true});
                // const loggedUser={
                //     email:user.email
                // }
                // console.log(loggedUser);
        
        //         navigate(from, {replace:true});
            })
            .catch(error => console.log(error))
    };
    const handleCheck = () => {
        setChecked(!checked);
    }
    return (
  
        //      <div className="">
        //     <h2 className="text-3xl font-semibold text-center text-orange-950 mt-16">Please Login!</h2>
        //     <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        //         <div className="form-control items-center">
        //             <div className="form-control w-1/3  mx-16">
        //                 <label className="label">
        //                     <span className="label-text text-orange-950 text-xl font-semibold">Email*</span>
        //                 </label>
        //                 <input type="email" placeholder="Your Email Address" className="input input-bordered w-full bg-orange-100" {...register("email", { required: true })} />

        //             </div>
        //             <div className="form-control w-1/3  mx-16">
        //                 <label className="label">
        //                     <span className="label-text text-orange-950 text-xl font-semibold">Password*</span>
        //                 </label>
        //                 <input type={!checked ? "password" : "text"} placeholder="Password" className="input input-bordered w-full bg-orange-100" {...register("password", { required: true, minLength: 6 })} />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label cursor-pointer">
        //                     <span className="label-text mr-8">Show Password</span>
        //                     <input onChange={handleCheck} type="checkbox" checked={checked} className="checkbox" />
        //                 </label>
        //             </div>
        //         </div>
        //         <div className="form-control items-center">
        //             <input type="submit" className="btn bg-orange-950 my-10 w-1/3 text-white" value='Login' />
        //             {/* <SocialLogin></SocialLogin> */}
        //         </div>
        //         <p className="text-center">Not Registered? <Link className="text-orange-600" to='/register'>Create An Account</Link></p>
        //     </form>
        // </div>
        <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* <form> */}
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", { required: true })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type= {!checked?"password":"text"}
                id="password"
                autoComplete="current-password"
                {...register("password", { required: true, minLength: 6 })}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <FormControlLabel
                control={<Checkbox value="show" color="primary" />}
                label="Show password"
                onChange={handleCheck} type="checkbox" checked={checked}
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
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
            {/* </form> */}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    );
};

export default Login;