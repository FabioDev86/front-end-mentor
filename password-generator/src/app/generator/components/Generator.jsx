'use client';

import styles from "./generator.module.css";

import { useState } from "react";

import Slider from "./generator-components/Slider";
import Checkboxes from "./generator-components/Checkboxes";
import Strength from "./generator-components/Strength";
import zxcvbn from "zxcvbn";
import evaluate from "@/app/utils/evaluate";

export default function Generator(props){

    //This will be the prop for <Slider>
    const [length, setLength] = useState(15);
    
    //Those will be the props for <Checkboxes>
    const [lowercases, setLowercases] = useState(true);
    const [uppercases, setUppercases] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);    

    const[strength, setStrength] = useState("");

    function generatePassword(){
        let newpassword = "";

        const lch = "abcdefghijklmnopqrstuvwxyzàìòèù";
        const uch = "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÈÌÒÙ";
        const num = "0123456789";
        const sym = "|\!'£$%&/()=?^*+@°#§;,:._-<>";

        {/* 
            Here I create a pool of strings to exstract charachters for the password
            I create an array were I push lowercase, uppercase etc. if the relative
            checkbox is checked. 
            Then I will have 2 random extractions: one to decide wich tipe of character to use 
            (lowercases, uppercases, number, symbol) and a second one to decide the specific character.
        */}
        let pool = [];

        if(lowercases) pool.push(lch);
        if(uppercases) pool.push(uch);
        if(numbers) pool.push(num);
        if(symbols) pool.push(sym);

        for (let i = 0; i < length; i++){
            newpassword += pool[Math.round(Math.random()*(pool.length-1))].charAt(Math.round(Math.random()*(length - 1))); 
        }
        props.setPassword(newpassword);
        setStrength(evaluate(newpassword));
        
    }

    return( 
        <div className={styles.container}>
            {/*The slider will select the length of the password*/}
            <Slider state = {length} setState = {setLength} />
            
            {/*A group of 4 checkboxes to choose the complexity of the password*/}
            <Checkboxes 
                low = {[lowercases, setLowercases]}
                upp = {[uppercases, setUppercases]}
                num = {[numbers, setNumbers]}
                sym = {[symbols, setSymbols]}
            />

            {/*A component that evalues the strength of the password */}
            <Strength 
                strength = {strength}
            />
            <button onClick={generatePassword}>Generate</button>
        </div>
    );
}