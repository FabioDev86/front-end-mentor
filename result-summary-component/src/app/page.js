import styles from './page.module.css';
import Result from '@/components/Result';
import Summary from '@/components/Summary';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Result />
      <Summary />
    </main>
  )
}
