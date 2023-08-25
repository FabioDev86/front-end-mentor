
import Box from "../../../strength/Box";

export default function Strength(props){
    
    return(
        <div>
            <h2>Strength: {props.strength}</h2>            
            {/*
                The idea is: 3 div for the strength indicator. Those div will be colored:
                1 red if the password is weak
                2 yellow if the password is medium
                3 green if the password is strong
            */}
            <Box position="first" strength={props.strength} />
            <Box position="second" strength={props.strength} />
            <Box position="third" strength={props.strength} />
        </div>
    );
}