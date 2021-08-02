
import { Flex, Box } from "reflexbox"
import {useRouter} from "next/router"

function MoviesPage({ movies,page,page_count }) {
  //console.log({ movies })
  const router=useRouter()
    console.log({page_count})
  return (
    <>
      <Box variant="container" pt={40} >
        
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                  <h3>{movie.title}</h3>
              </li>
            )
          })}
        </ul>
        <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
            <button onClick={()=>router.push(`/movies?page=${parseInt(page)-1}`)} disabled={parseInt(page)<=1}>Previous</button>
            <button onClick={()=>router.push(`/movies?page=${parseInt(page)+1}`)} disabled={parseInt(page)>=parseInt(page_count)}>Next</button>
        </Flex>
      </Box>
    </>

  )

}

export async function getServerSideProps({query:{page=1}}) {

  let start= parseInt(page)===1?0:(parseInt(page)-1)*3 
      //_start is a strapi url param that works like slice , and gets the data from a specific index onwards
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/movies?_limit=3"+`&_start=${start}`)
  const response = await res.json()  
  let movie_count=await fetch(process.env.NEXT_PUBLIC_API_URL + `/movies/count`)
  movie_count=await movie_count.json()
  const page_count=Math.ceil(parseInt(movie_count)/3)
  
  return {
    props: {
      movies: response,
      page:page,
      page_count:page_count
    }
  }
}


export default MoviesPage