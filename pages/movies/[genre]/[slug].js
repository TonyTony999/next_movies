import { Box, Flex } from "reflexbox"
import{NextSeo} from "next-seo"

function Movie(movie) {
    //console.log(movie)
    const SEO={
        title:`Next Movies | ${movie.title}`,
        description:movie.description,
        openGraph:{
            title:`Next Movies | ${movie.title}`,
            description:movie.description
        }
    }
    return (
        <>
        <NextSeo {...SEO}/>
        <Box variant="container">
            <Box as="h2" my={40}>{movie.title}</Box>
            <Box maxWidth={600}>
                {movie.description}
            </Box>
        </Box>
        </>
    )

}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`)
    const response = await res.json()
    let slugs = response.map(elem => {
        return({params:{genre:elem.genre? elem.genre.slug.toString():"uncategorized",slug: elem.slug.toString() }})
    })
    //console.log(slugs)
    return {
        paths: slugs, fallback:true
    }
}

export async function getStaticProps({params}) {
   /* let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`)
    let response = await res.json()
    let specific_id=0;
    let slugs = response.map(elem => {
        return({ id: elem.id.toString(), slug:elem.slug })
    })
    slugs.forEach(element => {
        if(element.slug===params.slug){
            specific_id=element.id
        }
    });*/
   /* let res2 = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${specific_id.toString()}`))
    let response2 = await res2.json()*/

    //WE CAN ALSO GET A SPECIFIC MOVIE BY INSERTING QUERY PARAMS INTO THE PATH
    let res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies?slug=${params.slug}`)
    let response2 = await res2.json()

    //console.log(response2)
    return {
        props: response2[0]//get object, doesnt work with array
    }
}

export default Movie