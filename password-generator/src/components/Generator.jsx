'use client'

import { useState } from "react";

import Slider from "./generator/Slider";
import Checkboxes from "./generator/Checkboxes";
import Strength from "./generator/Strength";

export default function Generator(props){

    //This will be the prop for <Slider>
    const [length, setLength] = useState(15);
    
    //Those will be the props for <Checkboxes>
    const [lowercases, setLowercases] = useState(true);
    const [uppercases, setUppercases] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    return(
        <div>
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
                length = {length}
                lowercases = {lowercases}
                uppercases = {uppercases}
                numbers = {numbers}
                symbols = {symbols}
            />
            <button onClick={() => {props.setPassword("Generated password")}}>Generate</button>
        </div>
    );
}