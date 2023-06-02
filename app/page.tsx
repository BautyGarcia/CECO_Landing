import Header from './components/header'
import FeaturesCards from './components/featuresCards'
import CardsCarousel from './components/imageCarousel'
import Banner from './components/banner'
import PresentacionProblema from './components/seccionProblema'
export default function Home() {
  return (
    <div>
      <link rel="icon" href="/logo.ico" />
      <main className='w-screen h-screen'>
        <Header />
        <PresentacionProblema />
        <Banner />
        <FeaturesCards />
        <CardsCarousel />
      </main>
    </div>
  )
}