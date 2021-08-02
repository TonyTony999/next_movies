//import '../styles/globals.css'
import Header from "components/Header.js"
import { ThemeProvider } from "emotion-theming"
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme';
//import getConfig from "next/config";
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import ContextWrapper from "components/ContextWrapper";

function MyApp({ Component, pageProps, navigation }) {

  return (
    <>
      <DefaultSeo {...SEO}/>
      <ThemeProvider theme={theme}>
          <GlobalStyles />     
          <ContextWrapper navigation={navigation}>
             <Header isDark={false} />
          </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navigations`)
  const navigation = await res.json()

  return { navigation }

}

export default MyApp
