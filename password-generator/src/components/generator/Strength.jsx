export default function Strength(props){
    return(
        <div>
            <h2>Strength: ||||</h2>
            <p>{props.length}</p>
            <p>{props.lowercases ? "true" : "false"}</p>
            <p>{props.uppercases ? "true" : "false"}</p>
            <p>{props.numbers ? "true" : "false"}</p>
            <p>{props.symbols ? "true" : "false"}</p>
        </div>
    );
}