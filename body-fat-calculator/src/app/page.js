import styles from './page.module.css'
import Description from '@/components/Description';
import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main className={styles.main}>
      <Description />
      <Calculator />
    </main>
  )
}
