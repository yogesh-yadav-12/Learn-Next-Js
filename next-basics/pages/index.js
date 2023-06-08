import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>NEXT JS</h1>
      <ul>
        <li>
          <Link href='/page/a'>Page</Link>
        </li>
        <li>
          <Link href='/blogs'>Blog</Link>
        </li>
        <li>
          <Link href='/samples/1/2/43'>Samples</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home