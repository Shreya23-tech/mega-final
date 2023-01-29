import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="float-right">
          <Link to="/about-us">About </Link>| <Link to="/contact">Contact</Link>
        </div>
        {localStorage.getItem("role")!=null?(<div className="mr-auto"><i class="fa fa-sign-out" aria-hidden="true" onClick={() => {localStorage.removeItem("role");  window.location.replace('/')}}>SIGN OUT</i></div>):null}
      </div>
    );
  }
}

export default Footer;
