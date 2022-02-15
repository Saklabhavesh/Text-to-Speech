import React from "react";
import { Link } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

function Home() {
  const { speak } = useSpeechSynthesis();

  return (
    <div style={{
        backgroundImage: "linear-gradient(to bottom right, #185ADB, #7C83FD)",
        height: "100vh"
    }}>
      <div style={{
          paddingLeft: "10px",
          paddingTop: "10px"
      }}>
        <Link to="/counting">
          <img
            src="/Images/count.jpg"
            height="300px"
            width="500px"
            onMouseEnter={() =>
              speak({ text: "let's learn how to Count Numbers" })
            }
            className="count"
          />
        </Link>
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "20px",
          }}
        >
          <img src="/Images/side7.jpg" height="300px" width="400px"></img>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          paddingLeft: "520px",
          marginTop: "-110px",
        }}
      >
        <Link to="/addition">
          <img
            src="/Images/addition.jpg"
            height="300px"
            width="500px"
            onMouseEnter={() =>
              speak({ text: "let's learn some basic Addition" })
            }
            className="count"
          ></img>
        </Link>
        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "10px",
          }}
        >
          <img src="/Images/side1.jpg" height="230px" width="350px"></img>
        </div>
      </div>
      <div
        style={{
            position: "relative",
          paddingLeft: "1030px",
          marginTop: "-110px",
        }}
      >
        <Link to="/subtraction">
          <img
            src="/Images/subtract.jpg"
            height="300px"
            width="500px"
            onMouseEnter={() =>
              speak({ text: "let's learn some basic subtraction" })
            }
            className="count"
          ></img>
        </Link>
        
      </div>

      
    </div>
  );
}

export default Home;
