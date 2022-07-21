import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../assets/logo.svg";
import "../styles/main.css";
import fbIcon from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
export default function Footer() {
  return (
    <div className="footer">
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src={logo} width="150px" />
              </a>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Features
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <a className="footer-a">Link Shortening</a>
                <a className="footer-a">Branded Links</a>
                <a className="footer-a">Analytics</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Resources
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <a className="footer-a">Blog</a>
                <a className="footer-a">Developers</a>
                <a className="footer-a">Support</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Company
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <a className="footer-a">About</a>
                <a className="footer-a">Our Team</a>
                <a className="footer-a">Careers</a>
                <a className="footer-a">Contact</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <CDBBox display="flex" className="mt-4">
                <img
                  alt="logo"
                  src={fbIcon}
                  style={{ width: "70%", height: "10%", margin: "10px" }}
                />
                <img
                  alt="logo"
                  src={twitter}
                  style={{ width: "70%", height: "10%", margin: "10px" }}
                />
                <img
                  alt="logo"
                  src={instagram}
                  style={{ width: "70%", height: "10%", margin: "10px" }}
                />
                <img
                  alt="logo"
                  src={pinterest}
                  style={{ width: "70%", height: "10%", margin: "10px" }}
                />
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}
