import { useState } from "react";
import answers from "./answers";
import "./eightBall.css";

const EightBall = (props) => {
  function genRandNum() {
    let resp = [];
    let num = Math.floor(Math.random() * answers.length);
    // console.log(`Math.random = ${Math.random()}`)
    // console.log(`answers.length = ${answers.length}`)
    // console.log(`num = ${num}`)

    let randResponse = answers[num].msg;
    let color = answers[num].color;
    resp.push(randResponse);
    resp.push(color);
    // console.log(`resp = ${resp[0]}`)
    return resp;
    // resp = [response, color]
  }

  const reSet = () => {
    let resp = [];
    resp.push("Think of a Question");
    resp.push("black");
    // console.log(`num = ${num}`)
    // console.log(`resp = ${resp[0]}`)
    return resp;
    // resp = [response, color]
  };
  const start = () => {
    setResponse(genRandNum());
  };
  const reStart = () => {
    setResponse(reSet());
  };

  const [response, setResponse] = useState(reSet());

  // console.log(`response = ${response}`)

  return (
    <div>
      {response[1] != "black" && (
        <div>
          <a onClick={reStart} className="restart">
            {" "}
            Ask a new Question
          </a>
          <div
            className="ball initial-state"
            style={{ backgroundColor: response[1] }}
          >
            <p className="ball-text">{response[0]}</p>
          </div>
        </div>
      )}
      {response[1] == "black" && (
        <div>
          <h3>Ask away</h3>

          <div className="ball shake" style={{ backgroundColor: response[1] }}>
            <input
              type="checkbox"
              onClick={start}
              id="start"
              name="start"
              className="start"
            />
            <label htmlFor="start">SHAKE</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default EightBall;
