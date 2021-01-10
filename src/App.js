import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
            <a href="/profile">login</a>
          </header>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={UserProfile} />
              <Route component={NotFound} />
            </Switch>
          </Router>
          <footer>All right is resevered.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
