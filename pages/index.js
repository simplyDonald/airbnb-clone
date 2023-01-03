import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData}) {
  return (
    <>
      <Head>
        <title>airbnb</title>
        <meta name="description" content="airbnb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className=" text-4xl font-semibold pb-5">Explore nearby</h2>
          {/* map data gottrn from server - API endpoint below */}
          {exploreData?.map((item) => (
            <SmallCard key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
    .then((res) => res.json())

  return {
    props: {
      exploreData,
    },
  }
}