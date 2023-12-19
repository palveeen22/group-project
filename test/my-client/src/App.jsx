import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, createBrowserRouter } from "react-router-dom";
import Room from "./Components/Room/Room";
import PageNotFound404 from "./Components/PageNotFound404/PageNotFound404";
import io from "socket.io-client";
import {Peer} from "peerjs";

function App() {

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="*">
            <PageNotFound404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
