import React from "react";
import NavBar from "../components/navBar";
import "../styles/main.css";

import LinkBar from "../components/LinkBar";
import Card from "../components/Card";
import Footer from "../components/footer";
import img from "../assets/illustration-working.svg";

function Home() {
  const getshortenhistory = () => {
    return <div>hi</div>;
  };
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="header-cont">
        <div className="flex-item flex1">
          <p className="tittle">More than just shorter links</p>

          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <button className="btn">Get Started</button>
        </div>
        <div className="flex-item flex2">
          <img alt="logo" src={img} style={{ width: "70%", height: "10%" }} />
        </div>
      </div>

      <div className="details-container">
        <LinkBar />
        <div className="details-header">
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with
            <br></br>
            our advanced statistics dashboard.
          </p>
        </div>

        <div class="cards-container">
          <Card
            title={"Brand Recognition"}
            body={
              "Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content."
            }
          />

          <Card
            title={"Detailed Records"}
            body={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
          />

          <Card
            title={"Fully Customizable"}
            body={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
          />
        </div>
      </div>
      <div className="row-3">
        <h2>Boost your links today</h2>
        <button className="btn">Get Started</button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
