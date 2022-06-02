import React from 'react';
import axios from "axios";

import { Link, useSearchParams } from "react-router-dom";
import AuthContainer from "components/auth-container/AuthContainer";
import { Typography, Button, FormGroup, Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { ReactComponent as Logo } from "icons/list-rocket.svg";

function ConfirmEmail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [searchParams]= useSearchParams();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("/confirm-account", {email: searchParams.get("email")});
  }

  const resendCode = (_) => {
    axios.post("/resend-code", {email: searchParams.get("email")});
  }

  return (
    <AuthContainer>
      <Box id="logo-container">
        <Logo id="list-rocket-logo" />
      </Box>
      <Typography align="center" variant="h4">List Rocket</Typography>
      <Typography align="center" variant="h6">Confirm account</Typography>
      <Typography variant="body1">We send you an email to {searchParams.get("email")} with a code. Click <Link to="" onClick={resendCode}>here</Link> to resend email</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            label="Code"
            margin="dense"
            variant="standard"
            {...register("code", {
              required: "Code is required",
              maxLength: {value: 6, message: "Code must be 6 character long"},
              minLength: {value: 6, message: "Code must be 6 character long"},
            })}
            helperText={errors.code !== undefined ? errors.code.message : ""}
            error={errors.code !== undefined ? true : false}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained">Verify account</Button>
        </FormGroup>
      </form>
      <Typography align="center" variant="body2">You don't have an account ? <Link to="/register">Register</Link></Typography>
    </AuthContainer>
  );
}

export default ConfirmEmail;