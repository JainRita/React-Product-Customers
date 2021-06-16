import React, { Component } from "react";

export default class AddCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", city: "", phone: "", photo: "" };
    }

    render() {
        return (
            <div className="m-3 p-3">
                <h4 className="m-2 p-2 title border-bottom">New Customer Details</h4>

                <form>
                    {/* customer name starts */}
                    <div className="form-group form-row">
                        <label className="col-lg-2">Customer Name</label>
                        <div className="col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                placeholder="Enter Customer Name"
                                onChange={(event) => {
                                    this.setState({ name: event.target.value });
                                }}
                            ></input>
                        </div>
                    </div>
                    {/* customer name ends */}

                    {/* city starts */}
                    <div className="form-group form-row">
                        <label className="col-lg-2">City</label>
                        <div className="col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.city}
                                placeholder="Enter Customer City"
                                onChange={(event) => {
                                    this.setState({ city: event.target.value });
                                }}
                            ></input>
                        </div>
                    </div>
                    {/* city ends */}

                    {/* phone starts */}
                    <div className="form-group form-row">
                        <label className="col-lg-2">Phone</label>
                        <div className="col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.phone}
                                placeholder="Enter Customer Phone"
                                onChange={(event) => {
                                    this.setState({ phone: event.target.value });
                                }}
                            ></input>
                        </div>
                    </div>
                    {/* phone ends */}

                    {/* photo starts */}
                    <div className="form-group form-row">
                        <label className="col-lg-2">Photo</label>
                        <div className="col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.photo}
                                placeholder="https://picsum.photos/id/<Replace with some id>/60"
                                onChange={(event) => {
                                    this.setState({ photo: event.target.value });
                                }}
                            ></input>
                        </div>
                    </div>
                    {/* photo ends */}

                    <div className="p-2">
                        <button className="btn btn-primary" onClick={this.onSaveClick}>
                            Save
              </button>
                    </div>
                </form>
            </div>
        );
    }

    onSaveClick = async (event) => {
        event.preventDefault();

        var customer = {
            name: this.state.name,
            address: { city: this.state.city },
            phone: this.state.phone,
            photo: this.state.photo,
        };

        //make post request
        var response = await fetch("http://localhost:5000/customers", {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                "Content-type": "application/json",
            },
        });

        var body = await response.json();
        console.log(body);

        //after receiving response body, redirect to /customers
        if (body) {
            this.props.history.replace("/customers");
        }
    };
}

