'use client'

import { useState } from "react";

export default function Checkboxes(){
    const [lowercases, setLowercases] = useState(true);
    const [uppercases, setUppercases] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    return(
        <div>
            <input type="checkbox" id="lowercases" name="lowercases" checked={lowercases} onChange={() => {setLowercases(!lowercases)}}></input>
            <label htmlFor="lowercases">Include Lowercase Letters "{lowercases ? "true" : "false"}"</label>
            <br></br>

            <input type="checkbox" id="uppercases" name="uppercases" checked={uppercases}  onChange={() => {setUppercases(!uppercases)}}></input>
            <label htmlFor="uppercases">Include Uppercase Letters "{uppercases ? "true" : "false"}"</label>
            <br></br>

            <input type="checkbox" id="numbers" name="numbers" checked={numbers}  onChange={() => {setNumbers(!numbers)}}></input>
            <label htmlFor="numbers">Include Numbers "{numbers ? "true" : "false"}"</label>
            <br></br>

            <input type="checkbox" id="symbols" name="symbols" checked={symbols}  onChange={() => {setSymbols(!symbols)}}></input>
            <label htmlFor="symbols">Include Symbols "{symbols ? "true" : "false"}"</label>
        </div>
    );
}