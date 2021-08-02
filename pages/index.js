import Card from "components/Card";
import { Flex, Box } from "reflexbox"

function Home({ movies }) {
  //console.log({ movies })
  return (
    <>
      <Box variant="container" >
        <Box my="40px"as="h2">Latest Movies</Box>
        <Flex justifyContent="space-between" mb={100} flexDirection={{_:"column",md:"row"}} flexWrap="wrap">
          {movies.map(elem => {
            return (
              <Box width={{_:"100%",md:"30%"}} key={elem.id}>
              <Card movie={elem}  />
              </Box>
            )
          })}
        </Flex>
      </Box>
    </>

  )

}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/movies")
  const response = await res.json()
  return {
    props: {
      movies: response
    }
  }
}


export default Home
