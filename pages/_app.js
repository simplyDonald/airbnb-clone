import '../styles/globals.css'
import "mapbox-gl/dist/mapbox-gl.css";
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

// build the custom progress bar
const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
})

// Plug in and listen for route change events
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
