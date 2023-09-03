'use client'

export default function Slider(props){
    
    return(
        <div>
            <label htmlFor="myRange">Character Length: {props.state}</label>
            <input type="range" min="1" max="30" value={props.state} onChange={(e) => {props.setState(e.target.value)}} id="myRange"></input>
        </div>
    );
}