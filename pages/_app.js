import '../Components/Marchent/Profile.css'
import '../Components/Carousel/carousel.css'
import '../Components/Footer/Footer.css'
import 'video-react/dist/video-react.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-circular-progressbar/dist/styles.css'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../Components/Header/Header.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import '@popperjs/core'
import { RatingContextProvider } from '../Components/GlobalContext/RatingContext'
import { Fragment } from 'react'
import Head from 'next/head'
import Layout from '../Components/Layout/Layout'
import { SessionProvider } from 'next-auth/react'
import logo from '../Components/img/mlogo.png'
import { AuthContextProvider } from '../Components/GlobalContext/authContext'



function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <Fragment>
      <Head>
        <link rel="icon" href={logo.src}/>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
        <title>
          ImponExpo - B2B E-commerce website
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
        <AuthContextProvider>
        <Layout>
          <RatingContextProvider>
            <Component {...pageProps} />
          </RatingContextProvider>
        </Layout>
        </AuthContextProvider>
      </SessionProvider>

    </Fragment>
  )
}
export default MyApp
