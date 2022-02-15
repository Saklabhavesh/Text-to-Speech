import React from "react";
import Count from "../components/Count";

function Counting() {
  return (
    <div style={{
        backgroundImage: "linear-gradient(to bottom right, #FDEBF7, #9AD0EC)",
        position: "relative"
    }}>
        <Count image1="/Images/1.png" num="One" image2="/Images/one.jpg" />
        <Count image1="/Images/2.jpg" num="Two" image2="/Images/two.jpg" />
        <Count image1="/Images/3.jpg" num="Three" image2="/Images/three.jpg" />
        <Count image1="/Images/4.jpg" num="Four" image2="/Images/four.jpg" />
        <Count image1="/Images/5.jpg" num="Five" image2="/Images/five.jpg" />
        <Count image1="/Images/6.jpg" num="Six" image2="/Images/six.jpg" />
        <Count image1="/Images/7.jpg" num="Seven" image2="/Images/seven.jpg" />
        <Count image1="/Images/8.jpg" num="Eight" image2="/Images/eight.jpg" />
        <Count image1="/Images/9.jpg" num="Nine" image2="/Images/nine.jpg" />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <img src="/Images/side1.jpg" height="200px" width="250px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "10px",
          }}
        >
          <img src="/Images/side2.jpg" height="200px" width="250px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "600px",
            right: "10px",
          }}
        >
          <img src="/Images/side6.jpg" height="200px" width="250px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "900px",
            left: "10px",
          }}
        >
          <img src="/Images/side3.jpg" height="200px" width="250px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "1150px",
            right: "10px",
          }}
        >
          <img src="/Images/side4.jpg" height="200px" width="250px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "1400px",
            left: "0px",
          }}
        >
          <img src="/Images/side10.jpg" height="200px" width="300px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "1700px",
            right: "10px",
          }}
        >
          <img src="/Images/side6.jpg" height="200px" width="250px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "2000px",
            left: "10px",
          }}
        >
          <img src="/Images/side7.jpg" height="200px" width="250px"></img>
        </div>

        <div
          style={{
            position: "absolute",
            top: "2300px",
            right: "10px",
          }}
        >
          <img src="/Images/side8.jpg" height="200px" width="250px"></img>
        </div>

    </div>
  );
}

export default Counting;
