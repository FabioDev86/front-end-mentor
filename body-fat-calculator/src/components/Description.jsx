import styles from "./components.module.css";

export default function Description(){
    return(
        <div className={styles.description}>
            <h1>Your body fat percentage</h1>
            <p>
                The body fat percentage (BFP) of a human or other
                living being is the total mass of fat divided by total
                 body mass, multiplied by 100; body fat includes essential 
                 body fat and storage body fat. Essential body fat is necessary 
                 to maintain life and reproductive functions.
            </p>
        </div>
    );
}