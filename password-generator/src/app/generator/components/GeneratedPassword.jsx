import styles from "./generated-password.module.css";
import Image from "next/image";

export default function GeneratedPassword(props){
    
    return(
        <div className={styles.container}>
            <h1>{props.password}</h1>
            <Image
                src="/copy-icon.png"
                width={40}
                height={40}
                alt="Copy to clipboard icon"
                onClick={() => {
                    navigator.clipboard.writeText(props.password)
                    alert("Password copied to clipboard");
                }}
            />
        </div>
    );
}
