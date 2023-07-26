import styles from './page.module.css'
import Description from '@/components/Description'

export default function Home() {
  return (
    <main className={styles.main}>
      <Description />
    </main>
  )
}
