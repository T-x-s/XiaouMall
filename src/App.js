import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";

import Login from "./pages/Login/Login";
import Index from "./pages/Index/Index";
import Detail from "./pages/Detail/Detail";
import Personal from "./pages/Personal/Personal";
import Register from "./pages/Register/Register";
import shoppingCart from "./pages/shoppingCart/shoppingCart";
import Classification from "./pages/Classification/Classification";
import classificationDetail from "./pages/classificationDetail/classificationDetail";
function App() {
  return (
    <div>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/index" component={Index}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/personal" component={Personal}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/shoppingCart" component={shoppingCart}></Route>
            <Route path="/classification" component={Classification}></Route>
            <Route path="/classificationDetail" component={classificationDetail}></Route>
            <Redirect to="/login"></Redirect>
        </Switch>
    </div>
  );
}

export default App;
