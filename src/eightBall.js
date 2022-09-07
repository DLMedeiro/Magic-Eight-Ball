import { useState } from "react";
import answers from './answers'
import './eightBall.css';

let status;
const EightBall = (props) => {
    function genRandNum () {
        let resp =[];
        let num = Math.floor(Math.random() * answers.length)
        // console.log(`Math.random = ${Math.random()}`)
        // console.log(`answers.length = ${answers.length}`)
        // console.log(`num = ${num}`)

        let randResponse = answers[num].msg;
        let color = answers[num].color
        resp.push(randResponse);
        resp.push(color)
        // console.log(`resp = ${resp[0]}`)
        return resp;
        // resp = [response, color]
    };
// { msg: "Think of a Question", color: "black" },
    const reSet = () => {
        let resp =[];
        resp.push("Think of a Question");
        resp.push("black")
        // console.log(`num = ${num}`)
        // console.log(`resp = ${resp[0]}`)
        return resp;
        // resp = [response, color]
    }
    const start = () => {
        setResponse(genRandNum());
    }
    const reStart = () => {
        setResponse(reSet());
    }

    const [response, setResponse] = useState(reSet());

    // console.log(`response = ${response}`)

    return (
        <div>
            <button onClick={reStart}> Ask a new Question</button>

            <div className = "ball" style = {{backgroundColor: response[1] }} >
                <p className = "ball-text">{response[0]}</p>
                <button onClick={start} className='start'> Shake</button>
            </div>

        </div>
    )
        //  
        // <div>
        //     <h2>Think of a question</h2>
        //     <button onClick={() => setResponse(genRandNum())}> Shake</button>
        //     <h2>Response: {response[0]}</h2>
        //     <h2>Color: {response[1]}</h2>
        // </div>
    
}


export default EightBall;