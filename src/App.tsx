import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteLayout from "../src/layouts/siteLayout";
import Products from "../src/product/products";
import Register from "../src/account/register";
import Login from "../src/account/login";
import ShoppingCard from "../src/product/shoppingList"
import {Provider} from "react-redux";
import  store from "../src/state/store"
import ProtectedRoutes from "../src/auth/protected-routes"

function App() {
  return (
    <div className="App">
     
      <Router>
      <Provider store={store}>
        <SiteLayout>

          <Switch>
            <Route path="/" exact>
              <Products />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/shopping-card">
               <ProtectedRoutes component={ShoppingCard}/>
              {/* <ShoppingCard /> */}
            </Route>

          </Switch>
        </SiteLayout>
        </Provider>
      </Router>
     
    </div>
  );
}

export default App;
