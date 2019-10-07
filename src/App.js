import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import CommsList from "./components/comms-list.jsx";
import EditComm from "./components/edit-comm.jsx";
import CreateComm from "./components/create-comm.jsx";
import CreateUser from "./components/create-user.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={CommsList} />
        <Route path="/edit/:id" component={EditComm} />
        <Route path="/create" component={CreateComm} />
        <Route path="/user" component={CreateUser} />
        <br />
      </div>
    </Router>
  );
}

export default App;
