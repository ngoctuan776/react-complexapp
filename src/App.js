import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/css/App.css';
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import About from "./components/Page/About";
import Guest from "./components/Page/Guest";
import NotFoundPage from "./components/Page/NotFound";
import Terms from "./components/Page/Terms";


function App() {
  return (
      <Router>
        <Header />
            <Switch>
                <Route path="/">
                    <Guest />
                </Route>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        <Footer />
      </Router>
  )
}

export default App;
