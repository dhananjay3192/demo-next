import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
       <h1 className={styles.title}>Homepage</h1>
       <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tellus quis sapien feugiat scelerisque sed a tortor. Ut sed nulla sem. Sed bibendum lorem facilisis sem interdum molestie. Suspendisse porta nibh ex, sit amet hendrerit mauris ultrices eget. Vivamus ut tincidunt eros. Nulla eget augue sed velit congue vestibulum. Phasellus nunc mauris, commodo sit amet est vitae, tincidunt varius est. Nulla facilisi. Nam eu ligula mauris. Nullam porttitor sed ipsum ac tempus. Nullam fringilla tristique ligula, id dignissim eros porttitor vel. Sed non ipsum eget turpis posuere pretium. Nam porta fermentum pharetra.</p>
       <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tellus quis sapien feugiat scelerisque sed a tortor. Ut sed nulla sem. Sed bibendum lorem facilisis sem interdum molestie. Suspendisse porta nibh ex, sit amet hendrerit mauris ultrices eget. Vivamus ut tincidunt eros. Nulla eget augue sed velit congue vestibulum. Phasellus nunc mauris, commodo sit amet est vitae, tincidunt varius est. Nulla facilisi. Nam eu ligula mauris. Nullam porttitor sed ipsum ac tempus. Nullam fringilla tristique ligula, id dignissim eros porttitor vel. Sed non ipsum eget turpis posuere pretium. Nam porta fermentum pharetra.</p>
       <Link href="/ninjas">
         <a className={styles.btn}>See Ninja Listing</a>
       </Link>
    </div>
    </>
  )
}
