import React from "react";
import { useSpeechSynthesis } from 'react-speech-kit';


function Add(props) {
    const { speak } = useSpeechSynthesis();
    let sign;
    if(props.plus=="+"){
        sign = "+";
    }else{
        sign = "-";
    }

  return (
    <div>
      <div
        style={{
          float: "left",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            float: "left",
          }}
          onClick={() => speak({text: props.num1 + props.plus + props.num2 + "=" + props.num3})}
        >
          <img
            src={props.image1}
            height="200px"
            width="250px"
            alt="image"
          ></img>
        </div>
        <div
          style={{
            float: "left",
            padding: "80px 20px"
          }}
        >
          <h1
            style={{
              float: "left",
            }}
          >
            {sign}
          </h1>
          <input type="text" style={{
              marginLeft: "10px",
              fontSize: "200%",
              height: "50px",
              float: "left",
              width: "50px",
              textAlign: "center"
          }} value={props.num}></input>
          <h1
            style={{
              float: "left",
              marginLeft: "10px"
            }}
          >
            =
          </h1>
        </div>
        <div
          style={{
            float: "left",
          }}
        >
          <img
            src={props.image2}
            height="200px"
            width="200px"
            alt="image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Add;
