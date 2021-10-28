import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const defaultEndPoint = 'https://api.adviceslip.com/advice';
export async function getServerSideProps() {
    const res = await fetch(defaultEndPoint);
    const data = await res.json();
  return {
    props: {
      data

    }
  }
}

export default function Home({data}) {
  console.log('data', data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Advice</title>
        <meta name="Team" content="Our Marketing Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Razzo's Advice
        </h1>
        <div>
          <h2>{data.advice}</h2>
          <img>
          </img>
         </div>
      <div className={styles.divdobtn}>
    <button className={styles.workjunto}>
      
       <h3>Discover a advice for you</h3></button>
    
      </div>

      </main>

    </div> 
  )
}
