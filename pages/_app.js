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
import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../Components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  })
  return (
    <Fragment>
      <Head>
        <title>
          ImponExpo - B2B E-commerce website
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <RatingContextProvider>
          <Component {...pageProps} />
        </RatingContextProvider>
      </Layout>

    </Fragment>
  )
}
export default MyApp
