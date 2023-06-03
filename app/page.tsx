import Header from './components/header'
import CardsCarousel from './components/imageCarousel'
import PresentacionProblema from './components/seccionProblema'
import PresentacionSolucion from './components/seccionSolucion'
import Footer from './components/footer'
export default function Home() {
  return (
    <div>
      <link rel="icon" href="/logo.ico" />
      <main>
        <Header />
        <PresentacionProblema />
        <PresentacionSolucion />
        <CardsCarousel />
        <Footer />
      </main>
    </div>
  )
}