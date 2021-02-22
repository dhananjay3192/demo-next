import Link from "next/link"
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
           //router.go(1) redirects the user to forward, router.go(-1) redirects the user to backward page  
           router.push('/')  //to a specific page
        }, 3000)
    })
    return ( 
        <div className="not-found">
            <h1>Sorry.....!</h1>
            <h2>The page does not exist</h2>
            <Link href="/"><button><a>Go to home</a></button></Link>
        </div>
     );
}
 
export default NotFound;