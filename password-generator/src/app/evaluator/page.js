'use client'

import { useState } from "react";

export default function Evaluator(){
    
    const [password, setPassword] = useState("");
    const [evaluation, setEvaluation] = useState("");

    const evaluate = () => {
        if(password.length < 8) setEvaluation("Weak");
        else if(password.length < 12) setEvaluation("Medium");
        else return setEvaluation("Strong");
    }
    return(
        <div>
            <h1>Evaluation: {evaluation}</h1>
            <input id="psw" placeholder="Insert password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <button onClick={evaluate}>Evaluate</button>
        </div>
    );
}