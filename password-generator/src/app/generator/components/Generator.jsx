'use client';

import styles from "./generator.module.css";

import { useState } from "react";

import Slider from "./generator-components/Slider";
import Checkboxes from "./generator-components/Checkboxes";
import Strength from "./generator-components/Strength";

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
        if(length < 8) setStrength("Weak");
        else if(length < 15) setStrength("Medium");
        else setStrength("Strong"); 
        props.setPassword("Generated password " + length);
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