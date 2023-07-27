import styles from "./calculator.module.css";
import { useSpots } from "./SpotsProvider";

export default function Result(){
    const { spots } = useSpots();
    
    return(
        <div>
            <p>{ spots.pectoral }</p>
            <p>{ spots.abdomen }</p>
            <p>{ spots.quadricep }</p>
        </div>
    );
}