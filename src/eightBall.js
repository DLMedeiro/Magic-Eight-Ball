import { useState } from "react";
import answers from './answers'

const EightBall = (props) => {
    function genRandNum () {
        let resp =[];
        let num = Math.floor(Math.random() * 20)
        let randResponse = answers[num].msg;
        let randColor = answers[num].color
        resp.push(randResponse);
        resp.push(randColor)
        // console.log(`num = ${num}`)
        // console.log(`resp = ${resp[0]}`)
        return resp;
        // resp = [response, color]
    };
    
    const [response, setResponse] = useState(genRandNum);

    // console.log(`response = ${response}`)

    return (
        <div>
            <h2>Think of a question</h2>
            <button onClick={() => setResponse(genRandNum())}> Shake</button>
            <h2>Response: {response[0]}</h2>
            <h2>Color: {response[1]}</h2>
        </div>
    )
}

// const EightBall = (props) => {

//     function genRandNum () {
//         let num = Math.floor(Math.random() * 10) + 1
//         return num;
//     };

//     const randResponse = () => answers[genRandNum()].msg;
//     const randColor = () => answers[genRandNum()].color;
//     const [response, setResponse] = useState(randResponse);
//     const [color, setColor] = useState(randColor);

//     const showResponse = () => {
//         setResponse(randResponse());
//         setColor(randColor());
//     }

//     return (
//         <div>
//             <h2>Think of a question</h2>
//             <button onClick={showResponse }> Shake</button>
//             <h2>Response: {response}</h2>
//             <h2>Color: {color}</h2>
//         </div>
//     )
// }




export default EightBall;