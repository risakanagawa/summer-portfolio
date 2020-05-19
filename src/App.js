import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollToTop from "./ScrollToTop";

import "./App.scss";

import HomePage from "./components/pages/HomePage";
import Work from "./components/pages/Work";
import About from "./components/pages/About/About";
import Sidebar from "./components/layout/Sidebar";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elementToScroll1: false,
      elementToScroll2: false
    };

    this.footer = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const timeout = { enter: 800, exit: 400 };
    const { location } = this.props;
    const currentkey = location.pathname.split("/")[1] || "/";

    return (
      <div>
                <ScrollToTop>

        <TransitionGroup>

          <CSSTransition key={currentkey} classNames="fade" timeout={timeout}>
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/:name" exact component={Work} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Sidebar />
        </ ScrollToTop>

      </div>
    );
  }
}

export default withRouter(App);
