import * as React from "react";

import { Link } from "react-router-dom";
import AuthContainer from "components/auth-container/AuthContainer";
import { FormControlLabel, Typography, Button, Checkbox, FormGroup } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

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
            label="Username"
            margin="dense"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            validators={["required"]}
            errorMessages={["Username is required"]}
            sx={{width: "100%"}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextValidator
            label="Email address"
            margin="dense"
            variant="standard"
            type="email"
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
          <TextValidator
            label="Confim password"
            type="password"
            margin="dense"
            variant="standard"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            validators={["required"]}
            errorMessages={["Password is required"]}
            sx={{width: "100%"}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextValidator
            label="Birth date"
            type="date"
            margin="dense"
            variant="standard"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            validators={["required"]}
            errorMessages={["Birth date is required"]}
            sx={{width: "100%"}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextValidator
            label="Phone number"
            margin="dense"
            type="tel"
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            validators={["required"]}
            errorMessages={["Phone number is required"]}
            sx={{width: "100%"}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained">Register</Button>
        </FormGroup>
      </ValidatorForm>
      <Typography align="center" variant="body2">Already have an account ? <Link to="/login">Login</Link></Typography>
    </AuthContainer>
  );
}

export default Register;