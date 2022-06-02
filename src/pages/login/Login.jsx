import * as React from 'react';

import { Link } from "react-router-dom";
import AuthContainer from "components/auth-container/AuthContainer";
import { FormControlLabel, Typography, Button, Checkbox, FormGroup, Box, TextField } from "@mui/material";
import * as ReactForm from "react-hook-form";

import { ReactComponent as Logo } from "icons/list-rocket.svg";

function Login() {
  const { register, handleSubmit, formState: { errors } } = ReactForm.useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <AuthContainer>
      <Box id="logo-container">
        <Logo id="list-rocket-logo" />
      </Box>
      <Typography align="center" variant="h4">List Rocket</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            label="Email address"
            margin="dense"
            variant="standard"
            {...register("email", {
              required: "Email is required",
              pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, message: "Invalid email format"},
              maxLength: {value: 120, message: "Email must be less than 120 characters"},
            })}
            helperText={errors.email !== undefined ? errors.email.message : ""}
            error={errors.email !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Password"
            type="password"
            margin="dense"
            variant="standard"
            {...register("password", {required: "Password is required"})}
            helperText={errors.password !== undefined ? errors.email.message : ""}
            error={errors.password !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography align="right" variant="body2"><Link to="/reset-password">Forgot your password ?</Link></Typography>
          <FormControlLabel control={<Checkbox {...register("rememberMe")}/>} label="Remember me" />
          <Button type="submit" variant="contained">Login</Button>
        </FormGroup>
      </form>
      <Typography align="center" variant="body2">You don't have an account ? <Link to="/register">Register</Link></Typography>
    </AuthContainer>
  );
}

export default Login;