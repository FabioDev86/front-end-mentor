import Image from 'next/image';
import styles from "./components.module.css";

export default function Score(props){
    return(
        <div className={styles.score} id={props.id}>
            <Image src={props.ico} alt="icon" width={20} height={20}/>
            <p>{props.cat}</p>
            <p>{props.sco}/100</p>
        </div>
    )
}