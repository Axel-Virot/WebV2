import * as React from "react";

import { Link } from "react-router-dom";
import AuthContainer from "components/auth-container/AuthContainer";
import { FormControlLabel, Typography, Button, Box, FormGroup, TextField } from "@mui/material";
import * as ReactForm from "react-hook-form";

import { ReactComponent as Logo } from "icons/list-rocket.svg";

function Register() {
  const { register, watch, handleSubmit, formState: { errors } } = ReactForm.useForm();
  const password = watch("password", "");

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
            label="Username"
            margin="dense"
            variant="standard"
            required
            {...register("username", {
              required: "Username is required",
              minLength: {value: 4, message: "Username must between 4 and 16 characters"},
              maxLength: {value: 16, message: "Username must between 4 and 16 characters"},
            })}
            helperText={errors.username !== undefined ? errors.username.message : ""}
            error={errors.username !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Email address"
            margin="dense"
            variant="standard"
            required
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
            required
            {...register("password", {
              required: "Password is required",
              maxLength: {value: 40, message: "Password must between 8 and 40 characters"},
              minLength: {value: 8, message: "Password must between 8 and 40 characters"},
            })}
            helperText={errors.password !== undefined ? errors.email.message : ""}
            error={errors.password !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Confim password"
            type="password"
            margin="dense"
            variant="standard"
            required
            {...register("confirmPassword", {
              validate: {match: (value) => value === password || "Password don't match"}
            })}
            helperText={errors.confirmPassword !== undefined ? errors.confirmPassword.message : ""}
            error={errors.confirmPassword !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Birth date"
            type="date"
            margin="dense"
            variant="standard"
            required
            {...register("birthDate")}
            helperText={errors.password !== undefined ? errors.email.message : ""}
            error={errors.password !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Phone number"
            margin="dense"
            type="tel"
            variant="standard"
            {...register("phoneNumber")}
            helperText={errors.password !== undefined ? errors.email.message : ""}
            error={errors.password !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained">Register</Button>
        </FormGroup>
      </form>
      <Typography align="center" variant="body2">Already have an account ? <Link to="/login">Login</Link></Typography>
    </AuthContainer>
  );
}

export default Register;