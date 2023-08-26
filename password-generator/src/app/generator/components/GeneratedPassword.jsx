import styles from "./generated-password.module.css";

export default function GeneratedPassword(props){
    return(
        <div className={styles.container}>
            <h1>Password: {props.password}</h1>
        </div>
    );
}