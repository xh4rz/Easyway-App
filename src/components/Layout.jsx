import React from "react";
import MyNavbar from "./Navbar";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }
  UpDate() {
    this.setState({ update: !this.state.update });
  }
  render() {
    return (
      <React.Fragment>
        <MyNavbar />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;