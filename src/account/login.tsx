import Box from "@mui/material/Box";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { ILogin } from "../core/models/login.model";
import AuthentificationResourceService from "../core/services/authentification-resource";
import { useHistory, Link } from "react-router-dom";
import swal from "sweetalert";
import "./login.scss";

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
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || email === undefined || email === null) {
      swal({
        title: "Input Validations",
        text: "Email is required",
        icon: "error",
        dangerMode: true,
      });
      return;
    } else if (password === "" || password === undefined || password === null) {
      swal({
        title: "Input Validations",
        text: "Password is required",
        icon: "error",
        dangerMode: true,
      });
      return;
    }

    if (!emailRegEx.test(email)) {
      swal({
        title: "Email Validation",
        text: "Email is not validate",
        icon: "error",
        dangerMode: true,
      });
      return;
    }
    loginModel = {
      email: email,
      password: password,
      isAdmin: false,
    };

    try {
      const customer = await _authentificationResourceService.login(loginModel);
      if (
        customer.email == "" ||
        customer.email == null ||
        customer.email === undefined
      ) {
        swal({
          title: "Warning",
          text: "Username or password is incorrect!",
          icon: "warning",
          dangerMode: true,
        });
        return;
      }
      sessionStorage.setItem("user", JSON.stringify(customer));
      history.push("/shopping-card");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div className="container-login">  
        <div className="inner-container">
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
          <Link className="register" to="/register">Register</Link>
        </div>
   
    </div>
  );
};

export default Login;
