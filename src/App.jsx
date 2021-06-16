import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import CustomerListComponent from "./CustomerListComponent";
import NavBarComponent from "./NavBarComponent";
import ProductListComponent from "./ProductListComponent";
import { Route, Switch } from "react-router";
import { Router } from "react-router-dom";
import NotFoundComponent from "./NotFoundComponent";
import history from "./history";
import ProductDetailsComponent from "./ProductDetailsComponent";
import AddCustomerComponent from "./AddCustomerComponent";
import EditCustomerComponent from "./EditCustomerComponent";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    render() {
        return (
            <Router history={history}>
                <NavBarComponent isLoggedIn={this.state.isLoggedIn} updateIsLoggedInStatus={this.updateIsLoggedInStatus} />
                <div className="container-fluid">
                    <Switch>
                        <Route path="/" exact render={(props) => (
                            <LoginComponent updateIsLoggedInStatus={this.updateIsLoggedInStatus} />
                        )} />
                        <Route path="/customers" exact component={CustomerListComponent} />
                        <Route path="/products" exact component={ProductListComponent} />
                        <Route path="/product/:id/:name/:price" component={ProductDetailsComponent} />
                        <Route path="/add-customer" exact component={AddCustomerComponent} />
                        <Route path="/update-customer/:id" exact component={EditCustomerComponent} />
                        <Route path="**" component={NotFoundComponent} />
                    </Switch>
                </div>
            </Router>
        )
    }

    //This method can be called by LoginComponent to update isLoggedIn property of the state
    updateIsLoggedInStatus = (status) => {
        this.setState({ isLoggedIn: status });
    };
}