import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CustomerListComponent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 0,
    customers: []
  };

  render() {
    return (
      <div className="m-3 p-3">
        <h4 className="m-1 p-1 title" >
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>

          <Link to="/add-customer" className="btn btn-primary">
            Add New Customer
          </Link>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
              <th></th>
              <th></th>

            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  componentDidMount = async () => {
    let response = await fetch("http://localhost:5000/customers", {
      method: "GET",
    });
    if (response.ok) {
      let body = await response.json();
      this.setState({ customers: body, customersCount: body.length });
    } else {
      console.log("Error: " + response.status);
    }
  }

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <span className="bg-warning p-2 text-center">-NA-</span>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id} className={index % 2 === 0 ? "tbl-even-background" : "tbl-odd-background"}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>
            <Link className="btn btn-success" to={`/update-customer/${cust.id}`}>Edit</Link>
          </td>
          <td>
            <button className="btn btn-success" onClick={this.onDeleteClick} data-customer-id={cust.id}>
              Delete
              </button>
          </td>

        </tr>
      );
    });
  };

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    //get existing customers
    var custArr = this.state.customers;


    var randomID = Math.round(Math.random() * 100) === 0 ? 100 : Math.round(Math.random() * 100);
    custArr[index].photo = `https://picsum.photos/id/${randomID}/60`;
    console.log(custArr);
    //update "customers" array in the state
    this.setState({ customers: custArr });
  }

  onDeleteClick = async (event) => {
    if (window.confirm("Are you sure to delete?")) {
      var element = event.target;
      let id = element.getAttribute("data-customer-id");
      var response = await fetch(`http://localhost:5000/customers/${id}`, {
        method: "DELETE"
      });
      var statusCode = await response.status;

      if (statusCode === 200) {
        //Refresh the page
        window.location.reload();
      } else {
        console.log("Error: " + response.status);
      }
    }
  }
}
