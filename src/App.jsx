import AtelierHeader from './components/AtelierHeader'
import ArtistsLedger from './components/ArtistsLedger'
import Vignettes from './components/Vignettes'
import FooterStudio from './components/FooterStudio'

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <AtelierHeader />
      <ArtistsLedger />
      <Vignettes />
      <FooterStudio />
    </div>
  )
}

export default App
