import Header from './components/header'
import FeaturesCards from './components/featuresCards'
import CardsCarousel from './components/imageCarousel'
import Banner from './components/banner'
export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <Header />
      <Banner />
      <FeaturesCards />
      <CardsCarousel />
    </main>
  )
}