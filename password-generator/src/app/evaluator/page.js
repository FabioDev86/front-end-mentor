'use client'

import Box from "../strength/Box";

import zxcvbn from "zxcvbn";

import { useState } from "react";
import { useRouter } from 'next/navigation';

import styles from "./page.module.css"


export default function Evaluator(){
    
    const [password, setPassword] = useState("");
    const [evaluation, setEvaluation] = useState("");
    const router = useRouter();

    const evaluate = () => {
        const result = zxcvbn(password);
        if(password.length < 1)setEvaluation("");
        else if( result.score < 2) setEvaluation("Weak");
        else if(result.score < 4) setEvaluation("Medium");
        else return setEvaluation("Strong");
    }
    return(
        <main className={styles.main}> 
            <h1>Evaluation: {evaluation}</h1>
            <input id="psw" placeholder="Insert password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <Box position = "first" strength = {evaluation} />
            <Box position = "second" strength = {evaluation} />
            <Box position = "third" strength = {evaluation} />
            <button onClick={evaluate}>Evaluate</button>
            <button onClick={() => {router.push("/")}}>Back to Home</button>
        </main>
    );
}