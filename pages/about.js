//
import { NextSeo } from "next-seo"


function About() {
    const SEO = {
        title: "About Page",
        description: "Just a regular about page",
        openGraph:{
            title:"About Page",
            description:"opengraph About Page"
        }
    }
    return (
        <div>
            <NextSeo {...SEO} />
            <div>about page</div>
        </div>
    )

}


export default About