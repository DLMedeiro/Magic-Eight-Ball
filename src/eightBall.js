import { useState } from "react";
import answers from "./answers";
import "./eightBall.css";

let status;
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
  // { msg: "Think of a Question", color: "black" },
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
          <button onClick={reStart}> Ask a new Question</button>
          <div className="ball" style={{ backgroundColor: response[1] }}>
            <p className="ball-text">{response[0]}</p>
          </div>
        </div>
      )}
      {response[1] == "black" && (
        <div>
          <h1>Think of a Question</h1>

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

      {/* <div className="ball" style={{ backgroundColor: response[1] }}>
        <p className="ball-text">{response[0]}</p>
        <input
          type="checkbox"
          onClick={start}
          id="start"
          name="start"
          className="start"
        />
        <label for="start"></label>
      </div> */}
    </div>
  );
  //
  // <div>
  //     <h2>Think of a question</h2>
  //     <button onClick={() => setResponse(genRandNum())}> Shake</button>
  //     <h2>Response: {response[0]}</h2>
  //     <h2>Color: {response[1]}</h2>
  // </div>
};

export default EightBall;
