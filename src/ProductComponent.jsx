import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductComponent extends Component {
    state = {
        product: this.props.product,
    };

    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {this.state.product.id}
                            {/* delete button starts */}
                            <span
                                className="pull-right hand-icon"
                                onClick={() => {
                                    this.props.onDelete(this.state.product);
                                }}
                            >
                                <i className="fa fa-times"></i>
                            </span>
                            {/* delete button ends */}
                        </div>
                        <h5 className="pt-5 border-top">{this.state.product.productName}</h5>
                    </div>
                    {/* card body ends here */}
                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge">{this.state.product.quantity}</span>

                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        this.props.onIncrement(this.state.product, 10);
                                    }}
                                >
                                    +
                </button>

                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        this.props.onDecrement(this.state.product, 0);
                                    }}
                                >
                                    -
                </button>
                            </div>
                        </div>
                        {/* float-left ends here */}

                        <div className="float-right">
                            <Link to={`product/${this.state.product.id}/${this.state.product.productName}/${this.state.product.price}`} className="mr-2">
                                View Details
                             </Link>
                            {this.props.children}
                        </div>
                    </div>
                    {/* card-footer ends here */}
                </div>
            </div>
        )
    }
}
