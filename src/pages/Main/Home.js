import React, { Component } from "react";

import NavbarP from "../../components/Navbar/NavbarP"
import "../../styles/App.css";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="App">
          <NavbarP/>
      </div>
    );
  }
}

export default Home;
