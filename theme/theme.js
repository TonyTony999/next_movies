const breakpoints= ["360px", "768px", "1024px", "1280px", "1600px"]

breakpoints.sm=breakpoints[0]
breakpoints.md=breakpoints[1]
breakpoints.lg=breakpoints[2]
breakpoints.xl=breakpoints[3]
breakpoints.xxl=breakpoints[4]


export default {

    colors: {
        primary: 'transparent'

    },

    variants:{
        container:{
            maxWidth:1960,
             width:"100%",
             mx:"auto",
             px:30 ,
             className:"ayayay",
             mb:500,
             mt:10
        }
    },
    
    breakpoints

}