import React, { Component } from 'react'
import formatCurrency from "../utils"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import {createOrder, clearOrder} from '../actions/orderActions'

class Cart extends Component {
    constructor (props){
        super(props)
        this.state = {
            email:"",
            name:"",
            adress:"",
            ShowCheckout: false
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            adress: this.state.adress,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a,c) => (a +c.price*c.count),0)
        }
        this.props.createOrder(order);
    }

    closeModal = () => {
        this.setState({showCheckout: false})
        this.props.clearOrder()
    }

    render() {
        const { cartItems, order } = this.props;
        return (
            <div>
                {cartItems.length === 0? (<div className="cart cartheader">Cart is empty</div>
                ): (
                    <div className="cart cart-header">
                        You have {cartItems.length } in the Cart{" "}
                    </div>
                )}

                
                {
                    order && (
                    <Modal
                    isOpen={true}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    >
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}>x</button>
                            <div className="order-details">
                                <h3 className="success-message">Your order has been placed.</h3>
                                <h2>Order {order._id}</h2>
                                <ul>
                                    <li>
                                        <div>Name:</div>
                                        <div>{order.name}</div>
                                    </li>
                                    <li>
                                        <div>Email:</div>
                                        <div>{order.email}</div>
                                    </li>
                                    <li>
                                        <div>address:</div>
                                        <div>{order.adress}</div>
                                    </li>
                                    <li>
                                        <div>Date:</div>
                                        <div>{order.createdAt}</div>
                                    </li>
                                    <li>
                                        <div>Total:</div>
                                        <div>{formatCurrency(order.total)}</div>
                                    </li>
                                    <li>
                                        <div>Cart Items:</div>
                                        <div>
                                            {order.cartItems.map((x, i) => (
                                                <div key={i}>
                                                    {x.count} {" * "} {x.title}
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Zoom>
                    </Modal>)
                }


                <div>
                    <div className="cart">
                        <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count} {" "}
                                            <button className="button" onClick={() =>this.props.removeFromCart(item)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        </Fade>
                    </div>
                    {cartItems.length!==0 && (
                        <Fade right cascade>
                        <div>
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {formatCurrency(
                                            cartItems.reduce((a,c) => a+c.price*c.count, 0)
                                        )}
                                    </div>
                                    <button 
                                        onClick={() => {this.setState({showCheckout: true})}} 
                                        className="button primary"
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </div>
                            {this.state.showCheckout && (
                                <div className="cart">
                                <form onSubmit={this.createOrder}>
                                    <ul className="form-container">
                                        <li>
                                            <label>email</label>
                                            <input 
                                                name="email"
                                                type="email" 
                                                required 
                                                onChange={this.handleInput} 
                                            />
                                        </li>
                                        <li>
                                            <label>name</label>
                                            <input 
                                                name="name"
                                                type="text" 
                                                required 
                                                onChange={this.handleInput} 
                                            />
                                        </li>
                                        <li>
                                            <label>adress</label>
                                            <input 
                                                name="adress"
                                                type="text" 
                                                required 
                                                onChange={this.handleInput} 
                                            />
                                        </li>
                                        <li>
                                            <button className="button primary" type="submit">Checkout</button>
                                        </li>
                                    </ul>
                                </form>
                                </div>
                            )}
                        </div>
                        </Fade>
                    )}
                </div>
            </div>
            

        )
    }
}

export default connect((state) => ({
    order:state.order.order,
    cartItems: state.cart.cartItems,
}),
  {
    removeFromCart, 
    createOrder, 
    clearOrder}
)(Cart);