/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'images.unsplash.com']
  },
  env:{
    mapbox_key: 'pk.eyJ1Ijoic2ltcGx5ZG9uYWxkIiwiYSI6ImNrOHZqbW44djAxcGwza3FqanpqbTVicHIifQ.7wzcwn1KcxGnqe9eum6zMw'
  }
}

module.exports = nextConfig
