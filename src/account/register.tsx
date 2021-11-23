import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { ICustomerCreationModel } from "../core/models/customer-creation,model";
import CustomerResourceService from "../core/services/customer-resource-service";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const _customerResourceService = CustomerResourceService;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let [customerCreationModel, setCustomerCreationModel] =
    useState<ICustomerCreationModel>();

  const history = useHistory();

  const handleChangeFirstName = (event: any) => {
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event: any) => {
    setLastName(event.target.value);
  };
  const handleChangeTelephone = (event: any) => {
    setTelephone(event.target.value);
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleChangeConfirmPassword = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPasword(event.target.value);
  };

  const back = () => {
    history.push("/");
  };

  const handleChangeGender = (event: any) => {
    setGender(event.target.value);
  };

  async function register(): Promise<void> {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      firstName === "" ||
      lastName === "" ||
      telephone === "" ||
      "" ||
      email === "" ||
      password === "" ||
      gender === ""
    ) {
      swal({
        title: "Input Validations",
        text: "Fill up all required fields",
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

    if (confirmPassword !== password) {
      swal({
        title: "Input Validations",
        text: "Password does not match",
        icon: "error",
        dangerMode: true,
      });
      return;
    }

    customerCreationModel = {
      firstName: firstName,
      lastName: lastName,
      telephone: telephone,
      email: email,
      password: password,
      gender: gender,
    };
    try {
      await _customerResourceService.register(customerCreationModel);
      swal({
        title: "Warning",
        text: "Register successfully",
        icon: "success",
        dangerMode: true,
      });
      history.push("/");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div>
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
              <InputLabel htmlFor="my-input">First Name</InputLabel>
              <Input
                id="my-input"
                onChange={handleChangeFirstName}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </div>

          <div>
            <FormControl>
              <InputLabel htmlFor="my-input">Last Name</InputLabel>
              <Input
                id="my-input"
                onChange={handleChangeLastName}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </div>

          <div>
            <FormControl>
              <InputLabel htmlFor="my-input">Telephone</InputLabel>
              <Input
                id="my-input"
                onChange={handleChangeTelephone}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </div>

          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleChangeGender}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="M">Male</MenuItem>
                <MenuItem value="F">Female</MenuItem>
              </Select>
            </FormControl>
          </div>

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
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input
                id="my-input"
                type="password"
                aria-describedby="my-helper-text"
                onChange={handleChangePassword}
              />
            </FormControl>
          </div>

          <div>
            <FormControl>
              <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
              <Input
                id="my-input"
                type="password"
                aria-describedby="my-helper-text"
                onChange={handleChangeConfirmPassword}
              />
            </FormControl>
          </div>

          <Button
            onClick={register}
            className="btn-register"
            variant="contained"
            disableElevation
          >
            Register
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Register;
