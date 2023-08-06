'use client'

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import  styles  from "./components.module.css" 

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 400 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 399 })
    return isMobile ? children : null
}

export default function ImageContainer(){
    return(
        <div className={styles.imageContainer}>
            <Desktop>
            <Image
                src="/illustration-sign-up-desktop.svg"
                width={400}
                height={593}
                alt="Sign up illustration"
            />
            </Desktop>
            <Mobile>
                <Image
                    src="/illustration-sign-up-mobile.svg"
                    width={375}
                    height={284}
                    alt="Sign up illustration"
                />
            </Mobile>
        </div>
    );
}