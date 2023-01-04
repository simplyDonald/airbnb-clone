import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'

// build the progress bar
const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
