import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
            <a href="/signin">Sign-in</a>
          </header>
          <main>
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={SignInPage} />
                <Route path="/profile" component={UserProfile} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </main>
          <footer>All right is resevered.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
