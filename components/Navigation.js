import styled from "@emotion/styled"
import Link from "next/link"
import {useRouter} from "next/router"
import { useContext } from "react"
import HeaderContext from "../contexts/HeaderContext"

const NavigationStyled = styled.div`
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
        margin-left: 10px;
    }

    a {
        text-decoration: none;
        color: ${props=>props.color==="yeah"?"#4C9EE3":"000000"};

        &:hover {
            text-decoration: underline;
        }

        &.active {
            color: #EF6800;
        }
    }
}

`

function Navigation(){
    const router=useRouter() //GET THE SPECIFIC PAGE ROUTE
    const {menuItems,color}=useContext(HeaderContext)
    

    return(
        <NavigationStyled color={color}>
            <ul>
               {menuItems.map(elem=>{
                   return(
                       <Link href={elem.slug} key={elem.id}>
                            <li >
                                <a className={elem.slug===router.pathname?"active":""}>{elem.title}</a>
                            </li>
                       </Link>
                   )
               })}
            </ul>
        </NavigationStyled>
    )
}

export default Navigation