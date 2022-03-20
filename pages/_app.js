import '../styles/globals.scss'
import Navbar from './components/Navbar.js'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Helmet from 'react-helmet';

// Import the functions you need from the SDKs you need


//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({})
  }, [])
  // Initialize Firebase
  return (
    <div className="App">
      <title>VN Featured Demons</title>
      <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4605218533506777"
        crossOrigin="anonymous"></script>
      </Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no" />
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp