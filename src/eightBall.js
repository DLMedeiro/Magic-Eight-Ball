import { useState } from "react";
import answers from './answers'
import './eightBall.css';

let status;
const EightBall = (props) => {
    function genRandNum () {
        let resp =[];
        let num = Math.floor(Math.random() * 20) + 1
        let randResponse = answers[num].msg;
        let randColor = answers[num].color
        resp.push(randResponse);
        resp.push(randColor)
        // console.log(`num = ${num}`)
        // console.log(`resp = ${resp[0]}`)
        return resp;
        // resp = [response, color]
    };

    const reSet = () => {
        let resp =[];
        let num = 0
        let randResponse = answers[num].msg;
        let randColor = answers[num].color
        resp.push(randResponse);
        resp.push(randColor)
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

    const [response, setResponse] = useState(genRandNum());

    // console.log(`response = ${response}`)

    return (
        <div>
            <button onClick={reStart}> Ask a new Question</button>
            <button onClick={start}> Shake</button>

            <div className = "ball" style = {{backgroundColor: response[1] }} >
                <p className = "ball-text">{response[0]}</p>
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