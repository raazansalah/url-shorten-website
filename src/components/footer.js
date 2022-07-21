import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../assets/logo.svg";
import "../styles/main.css";
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
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}
