import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import "../styles/main.css";
function LinkBar() {
  const [link, setlink] = useState("");
  const [error, seterror] = useState("");
  const [color, setcolor] = useState("white");
  const [linksList, setLinksList] = useState([]);
  const [btnText, setbtnText] = useState("copy");
  const original = useRef([]);
  const shorten = useRef([]);
  let originalList;
  let shortenList;
  useEffect(() => {
    console.log("hi");
    originalList = localStorage.getItem("original");
    shortenList = localStorage.getItem("shorten");
  }, []);

  const clickHandle = () => {
    if (link === "") {
      seterror("please add a link");
      setcolor("red");
    }
    console.log(link);
    axios
      .post("https://api.shrtco.de/v2/shorten?url=" + link)
      .then(async (response) => {
        console.log(response.data.result.full_short_link);

        shorten.current.push(response.data.result.full_short_link);
        original.current.push(link);
        console.log(original.current);
        localStorage.setItem("original", JSON.stringify(original.current));
        localStorage.setItem("shorten", JSON.stringify(shorten.current));
        originalList = localStorage.getItem("original");
        shortenList = localStorage.getItem("shorten");
        setLinksList([originalList, shortenList]);
      })
      .catch(function (error) {
        console.log(error);
      });
    setlink("");
  };

  return (
    <div>
      <div className="inputtext-container">
        <input
          style={{ border: "solid 2px " + color }}
          type="text"
          value={link}
          className="text-field"
          placeholder="Shorten a link here..."
          onChange={(event) => setlink(event.target.value)}
        />

        <button className="shorten-btn" onClick={clickHandle}>
          Shorten It!
        </button>
        <p style={{ color: "red" }}>{error}</p>
      </div>
      <div className="list-elem">
        {shorten.current.map((item, key) => {
          return (
            <div className="d-flex linkbar">
              <p className="p-2 flex-grow-1" style={{ wordWrap: "break-word" }}>
                {original.current[key]}
              </p>

              <p className="p-2" style={{ color: "hsl(180, 66%, 49%)" }}>
                {shorten.current[key]}
              </p>
              <CopyToClipboard text={shorten.current[key]}>
                <div className="copy-area">
                  <button
                    className="p-2 shorten-btn"
                    onClick={() => setbtnText("Copied")}
                  >
                    {btnText}
                  </button>
                </div>
              </CopyToClipboard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LinkBar;
