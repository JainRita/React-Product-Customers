import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        id: this.props.match.params.id,
        productName: this.props.match.params.name,
        price: this.props.match.params.price
      }
    };
  }

  render() {
    return (
      <div className="m-3 p-3">
        <h4 className="title border-bottom">Product Details</h4>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card m-2">
              <div className="card-body">
                <div className="text-muted">
                  # {this.state.product.id}

                </div>

                <h5 className="pt-5 border-top">{this.state.product.productName}</h5>
                <div> <img className="card-img" src={'../../../images/' + this.state.product.id + '.jpg'} alt={this.state.product.productName} /></div>
                <div><span>Price : &#8377;</span> {this.state.product.price}</div>
              </div>
              {/* card body ends here */}

              <div className="card-footer">
                <div className="float-right">
                  <Link to="/products" className="btn btn-primary">
                    Back to Products List ...
                </Link>
                  {this.props.children}
                </div>
              </div>
              {/* card-footer ends here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
