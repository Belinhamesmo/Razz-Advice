import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

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

export default function Advice({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advice</title>
        <meta name="Team" content="Our Marketing Team" />
        <link rel="icon" href="/favicoshera.png" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          She-Ra: Advisor Princess
        </h1>

        
        <div className={styles.main}>
        <div className={styles.card}>
                <ul>
                <li>
                      <img src='/shera.png'></img>
                      </li>
                      <li> 
                      <h2>{data.slip.advice}</h2> 
                      </li>
                      
                 </ul>
                 </div>
           
        
            
</div>
      <div className={styles.divdobtn}>
    <button className={styles.workjunto}>
     
      
       <h3> <a href="./">back</a>  </h3>
       
       </button>

    
      </div>

      </main>

    </div> 
  )
}
