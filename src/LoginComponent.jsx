import React, { Component } from "react";
import history from "./history";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "admin@capgemini.com", password: "admin@123", message: "" };
    }

    render() {
        return (
            <div className="m-3 p-3">
                <h4 className="m-1 p-2 title border-bottom">Login</h4>

                {/* Email starts */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Enter Email"
                        onChange={(event) => {
                            this.setState({ email: event.target.value });
                        }}
                    />
                </div>
                {/* Email ends */}

                {/* Password starts */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value });
                        }}
                    />
                </div>
                {/* Password ends */}
                <div>
                    <button className="btn btn-primary" onClick={this.onLoginClick}>
                        Login
          </button>
                </div>
                <div className="text-center">
                    {this.state.message}
                </div>
            </div>
        );
    }
    //Executes when the user clicks on Login
    onLoginClick = async () => {
        console.log(this.state);

        var response = await fetch(
            `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
            { method: "GET" }
        );

        var body = await response.json();
        console.log(body);


        if (body.length > 0) {
            //success
            this.setState({
                message: <span className="text-success">Successfully Logged-in</span>,
            });
            //call the AppComponent's updateIsLoggedInStatus method
            this.props.updateIsLoggedInStatus(true);

            //navigate to products
            history.replace("/products");
        } else {
            //error
            this.setState({
                message: (
                    <span className="text-danger">Invalid login, please try again</span>
                ),
            });
        }
    };
}