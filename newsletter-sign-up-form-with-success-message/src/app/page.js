import styles from './page.module.css';
import ImageContainer from '@/components/ImageContainer';

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageContainer />      
    </main>
  )
}
