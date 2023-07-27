import styles from "./calculator.module.css";
import { useSpots } from "./SpotsProvider";

export default function Result(){
    const { spots } = useSpots();
    const sum = Number(spots.pectoral) + Number(spots.abdomen) + Number(spots.quadricep);
    const bodyDensity = 1.10938 - (0.0008267  * sum ) + (0.0000016 * sum * sum) - (0.0002574 * Number(spots.age));
    return(
        <div>
           <h1>BF: {Math.ceil((495 / bodyDensity ) - 450)} % </h1>
        </div>
    );
}