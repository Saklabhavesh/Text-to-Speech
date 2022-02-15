import React from "react";
import { useSpeechSynthesis } from 'react-speech-kit';


function Count(props) {
    const { speak } = useSpeechSynthesis();

  return (
    <div style={{ display: "inline-block", padding: "10px 240px" }}>
      <div>
        <div
          style={{
            float: "left",
          }}
        >
          <img
            src={props.image1}
            height="250px"
            width="400px"
            alt="image"
          ></img>
        </div>
        <div
          style={{
            //   border: "2px solid black",
            float: "left",
            height: "250px",
            width: "200px",
            textAlign: "center",
            padding: "100px 50px",
          }}
        >
          <div>
            <h1>{props.num}</h1>
          </div>
          <div className="sound" onMouseEnter={() => speak({text : props.num + "Strawberries"})}>
            <i class="fa fa-volume-up fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <div
          style={{
            float: "left",
          }}
        >
          <img
            src={props.image2}
            height="250px"
            width="400px"
            alt="image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Count;
