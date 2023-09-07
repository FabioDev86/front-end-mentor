'use client'

import Box from "../strength/Box";

import evaluate from "../utils/evaluate";

import { useState } from "react";
import { useRouter } from 'next/navigation';

import styles from "./page.module.css"


export default function Evaluator(){
    
    const [password, setPassword] = useState("");
    const [evaluation, setEvaluation] = useState("");
    const router = useRouter();

    return(
        <main className={styles.main}> 
            <h1>Evaluation: {evaluation}</h1>
            <input id="psw" placeholder="Insert password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <Box position = "first" strength = {evaluation} />
            <Box position = "second" strength = {evaluation} />
            <Box position = "third" strength = {evaluation} />
            <button onClick={() => {setEvaluation(evaluate(password))}}>Evaluate</button>
            <br></br>
            <button onClick={() => {router.push("/")}}>Back to Home</button>
        </main>
    );
}