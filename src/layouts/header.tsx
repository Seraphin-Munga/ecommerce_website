import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useHistory, Link } from "react-router-dom";
import "./header.scss";
import Button from "@mui/material/Button";

const Header = () => {
  const [auth, setAuth] = React.useState(true);

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="header" position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="logo" to="/">
                ECOMMERCE
              </Link>
            </Typography>
            {auth && (
              <div>
                <Button onClick={handleLogin} color="inherit">
                  Login
                </Button>
                <Button onClick={handleRegister} color="inherit">
                  REGISTER
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
