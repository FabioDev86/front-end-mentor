'use client'

import Box from "../strength/Box";

import { useState } from "react";
import { useRouter } from 'next/navigation';

import styles from "./page.module.css"


export default function Evaluator(){
    
    const [password, setPassword] = useState("");
    const [evaluation, setEvaluation] = useState("");
    const router = useRouter();

    const evaluate = () => {
        if(password.length < 1)setEvaluation("");
        else if(password.length < 8) setEvaluation("Weak");
        else if(password.length < 12) setEvaluation("Medium");
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