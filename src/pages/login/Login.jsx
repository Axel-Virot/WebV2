import * as React from 'react';

import { Link } from "react-router-dom";
import AuthContainer from "components/auth-container/AuthContainer";
import { FormControlLabel, Typography, Button, Checkbox, FormGroup } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = (e) => {
    console.log("OK");
  }

  return (
    <AuthContainer>
        <Typography align="center" variant="h4">List Rocket</Typography>
        <ValidatorForm
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >
          <FormGroup>
            <TextValidator
              label="Email address"
              margin="dense"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              validators={["required", "isEmail"]}
              errorMessages={["Email is required", "Email is not valid"]}
              sx={{width: "100%"}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextValidator
              label="Password"
              type="password"
              margin="dense"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              validators={["required"]}
              errorMessages={["Password is required"]}
              sx={{width: "100%"}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography align="right" variant="body2"><Link to="/reset-password">Forgot your password ?</Link></Typography>
            <FormControlLabel control={<Checkbox value={rememberMe} onChange={(_) => setRememberMe(!rememberMe)} />} label="Remember me" />
            <Button type="submit" variant="contained">Login</Button>
          </FormGroup>
        </ValidatorForm>
        <Typography align="center" variant="body2">You don't have an account ? <Link to="/register">Register</Link></Typography>
    </AuthContainer>
  );
}

export default Login;