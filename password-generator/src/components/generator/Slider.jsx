'use client'

import { useState } from "react";

export default function Slider(){
    const [length, setLength] = useState(15);
    
    return(
        <div>
            <label htmlFor="myRange">Character Length</label>
            <input type="range" min="1" max="30" value={length} onChange={(e) => {setLength(e.target.value)}} id="myRange"></input>
            <p>{length}</p>
        </div>
    );
}