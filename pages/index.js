import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>She-Ra Advisor</title>
        <meta name="She-Ra advisor" content="Advices" />
        <link rel="icon" href="/favicoshera.png" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          She-Ra: Advisor Princess
        </h1>

        
        <div className={styles.main}>
                      <h2 className={styles.text2}>Get a <span> advice </span> for free</h2>     
</div>
      <div className={styles.divdobtn}>
      <button className={styles.workjunto}>
     
      
     <h3> <a href="./advice">get advice</a>  </h3>
     
     </button>

    
      </div>

      </main>

    </div> 
  )
}
