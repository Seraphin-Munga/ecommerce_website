import Box from "@mui/material/Box";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { ILogin } from "../core/models/login.model";
import AuthentificationResourceService from "../core/services/authentification-resource";
import { useHistory } from "react-router-dom";

const _authentificationResourceService = AuthentificationResourceService;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  let [loginModel, setLoginModel] = useState<ILogin>();
  const history = useHistory();

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPasword(event.target.value);
  };

  const back = () => {
    history.push("/");
  };

  async function login(): Promise<void> {
    loginModel = {
      email: email,
      password: password,
      isAdmin: false,
    };
    try {
      const user = await _authentificationResourceService.login(loginModel);

      sessionStorage.setItem("user", JSON.stringify(user));
      history.push("/shopping-card");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div>
      <Button
        onClick={back}
        className="btn-register"
        variant="contained"
        disableElevation
      >
        BACK
      </Button>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="register-form">
          <div>
            <FormControl>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input
                id="my-input"
                onChange={handleChangeEmail}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </div>

          <div>
            <FormControl>
              <InputLabel htmlFor="my-input">password</InputLabel>
              <Input
                id="my-input"
                type="password"
                onChange={handleChangePassword}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </div>
          <Button
            onClick={login}
            className="btn-register"
            variant="contained"
            disableElevation
          >
            LOGIN
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
