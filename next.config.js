const path = require("path")
//require("dotenv").config()
module.exports = {
  reactStrictMode: true,
  /*env: {// Will be available on both server and client
    NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL
  },
  publicRuntimeConfig:{
    NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL
  },*/

  webpack: config => {
    config.resolve.alias["components"] = path.join(__dirname, "components")
    config.resolve.alias["public"] = path.join(__dirname, "public")
    ///added the above code so that paths can be relative instead of absolute 
    // when importing modules 
    return config
  }
}
