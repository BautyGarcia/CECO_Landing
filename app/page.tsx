import Header from './components/header'
import CardsCarousel from './components/imageCarousel'
import PresentacionProblema from './components/seccionProblema'
import PresentacionSolucion from './components/seccionSolucion'
export default function Home() {
  return (
    <div>
      <link rel="icon" href="/logo.ico" />
      <main className='w-screen h-screen'>
        <Header />
        <PresentacionProblema />
        <PresentacionSolucion />
        <CardsCarousel />
      </main>
    </div>
  )
}