import Head from 'next/head';
import Link from 'next/link';
import styles from './../../styles/Ninjas.module.css'

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return {
        props: { ninjas: data}        //in this getStaticProps we make the api request. It is an asynchronous function. We dont make the api request in a useEffect because that will wait for 
                                     // the component to render then the fetch request will execute. But in next.js components are rendered in server not in the browser
                                    //In this way, the fetch request will execute in the build time. Then the rendered HTML is sent to the browser. Dont do browser depended
                                    //things in this. This function only returns an object 

    }
}
const Ninjas = ({ninjas}) => {           //the ninja component receives the returned object(from getStaticProps) as props. Er destructure that props as {ninja} i.e, {ninja} and props.ninja are same.
    return (
        <>
        <Head>
            <title>
                Ninjas | Ninja List
            </title>
        </Head>
        <div>
           <h1>All Ninjas</h1>
           {ninjas.map(ninja => (
               <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                   <a className={styles.single}>
                       <h3>{ ninja.name }</h3>
                   </a>
               </Link>
           ))}
        </div>
        </>
    );
}

export default Ninjas;