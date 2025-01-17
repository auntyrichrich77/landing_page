import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="tiltle-logo">
          <h2>BraveLender</h2>
          {/* imgae logo */}
          <div className="img-">
            <h2>Logo</h2>
          </div>
        </div>

        <div className="footer-list">
          <div>
            <h3>Loans</h3>
            <ul className="list-container">
              <li>fast loans</li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul className="list-container">
              <li>Online</li>
            </ul>
          </div>

          <div className="last">
            <h3>Contact us</h3>
            <ul className="list-container">
              <li>1-555-888</li>
              <li>7-777-777</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear} BraveLenders | All rights reserved |
          Terms of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
