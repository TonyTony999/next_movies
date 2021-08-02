import styled from '@emotion/styled'
import Link from 'next/link'
import { rem } from "polished"///convert pixels into rems like:${rem(x pixels)}
import { Flex,Box } from 'reflexbox'
import Navigation from './Navigation'
import ToggleNavigationColorButton from 'components/ToggleNavigationColorButton'


const HeaderStyled = styled.header`
    background:${props => props.isDark ? "#000000" : "#efefef"};
    padding:20px;
    .logo {
        display:flex;
        align-items:center;
        .logo_text{
            color:#333333;
            font-weight:bold;
            font-size:${rem(20)};
            margin-left:20px;
            text-decoration:none;

        }
    }
`

function Header({ isDark}) {
    
    return (
        <HeaderStyled isDark={isDark} >
            <Box /*variant="container"*/ mt="20">
                <Flex justifyContent="space-between" alignItems="center" flexDirection="row">
                    <div className="logo">
                    <Link href="/">
                        <a style={{textDecoration:"none"}}>
                         <img src="/images/logo.svg" alt="sites logo" />
                         <span className="logo_text" >Next Movies</span>
                         </a>
                    </Link>
                    </div>
                    <Navigation/>
                    <ToggleNavigationColorButton/>
                </Flex>
            </Box>

        </HeaderStyled >
    )

}



export default Header