'use client'

import Box from "../strength/Box";

import evaluate from "../utils/evaluate";

import { useState } from "react";
import { useRouter } from 'next/navigation';

import styles from "./page.module.css"
import Strength from "../generator/components/generator-components/Strength";


export default function Evaluator(){
    
    const [password, setPassword] = useState("");
    const [evaluation, setEvaluation] = useState("");
    const router = useRouter();

    return(
        <main className={styles.main}> 
            <h1 className={styles.title}>Evaluate password</h1>
            <div className={styles.container}> 
                <Strength strength = {evaluation} />
                <input id="psw" placeholder="Insert password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} autocomplete="off" ></input>
                <button onClick={() => {setEvaluation(evaluate(password))}}>Evaluate</button>
            </div>
            <button onClick={() => {router.push("/")}}>Back to Home</button>
        </main>
    );
}