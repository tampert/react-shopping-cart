import React from "react"
import Products from "./components/Products"
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store"
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cartItems"))?JSON.parse(localStorage.getItem("cartItems")):[],
    }
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ 
      cartItems:cartItems.filter((x) => x._id !== product._id)
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)))
  }

  createOrder = (order) => {
    alert("new order for " + order.name)
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCArt = false;
    cartItems.forEach((item) => {
      if(item._id === product._id){
        item.count++
        alreadyInCArt = true;
      }
    })
    if(!alreadyInCArt){
      cartItems.push({...product, count:1})
    }
    this.setState({cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }
 

  render() {
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter></Filter>
              <Products 
                products={this.state.products} 
                addToCart={this.addToCart}
              >
              </Products>
            </div>
            <div className="sidebar">
              <Cart 
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              >
              </Cart>
            </div>
          </div>
        </main>
        <footer>
          All right is resevered.
        </footer>
      </div>
      </Provider>
  )};
}

export default App;
