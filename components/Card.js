import styled from "@emotion/styled"
import Link from "next/link"
import { Box, Flex } from "reflexbox"

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
    }`


function Card({ movie }) {

    if(!movie.genre){
        movie.genre={}
        movie.genre.slug="uncategorized"
    }

    return (
        <CardStyled>
            {
                movie && movie.poster.url ? 
                <div className="poster">
                    <img src={process.env.NEXT_PUBLIC_API_URL + movie.poster.url} alt={movie.title} />
                </div> :
                
                <div></div>
            }

            <div className="body">
                <h3>{movie.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: movie.description }} />
                <Box mt={30}>
                    <Link href={`/movies/${movie.genre.slug}/${movie.slug}`} >
                        <a >More about this movie</a>
                    </Link>
                </Box>
            </div>

        </CardStyled>

    )

}

export default Card