export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja =>{
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}


const Details = ({ninja}) => {
                        //the file name is enclosed in [] because this page is variable. For more details check the tutorial in youtube
                        //net ninja channel, Next.js tuturial for beginner video no. 11.
    return ( 
        <div>
            <h1>{ ninja.name }</h1>
            <p>Email : { ninja.email }</p>
            <p>Website : { ninja.website }</p> 
            <p>City : { ninja.address.city }</p>  

        </div>
     );
}
 
export default Details;