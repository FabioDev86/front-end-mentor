'use client'

import styles from './page.module.css';
import ImageContainer from '@/components/ImageContainer';
import Newsletter from '@/components/Newsletter';
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 400 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 399 })
  return isMobile ? children : null
}


export default function Home() {
  return (
    <main className={styles.main}>
      <Desktop>
        <Newsletter />
        <ImageContainer />
      </Desktop>
      <Mobile>
        <ImageContainer />
        <Newsletter />
      </Mobile>            
    </main>
  )
}
