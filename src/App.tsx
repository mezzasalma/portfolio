import Text from './components/Text'
import Header from './components/Header'
import Footer from './components/Footer'
import { useRef } from 'react'

function App() {
  const canvas = useRef(null);

  return (
    <>
      <canvas ref={canvas} className='fixed top-0 left-0 w-screen h-screen -z-10' />
      <Text />
      <Header />
      <section id="presentation" className='Container w-full h-screen grid grid-cols-6 sm:grid-cols-12 items-center sm:gap-5 auto-rows-min'>
        <img src="/images/maevamezzasalma.jpeg" alt="Portrait de Maëva Mezzasalma réalisé par Romain Quiblier" className='col-span-4 sm:col-span-6 aspect-[9/10] object-center object-cover' />
        <div className='col-span-5 col-start-2 sm:col-start-8 flex flex-col gap-2 sm:gap-8 -mt-8 sm:mt-0'>
          <h1 className='text-right'>Creative & Front-End Developper</h1>
          <p>Enchantée, Maëva</p>
          <p>Fraîchement diplômée d'un Master Expert en Création Numérique Interactive des Gobelins, je suis à la recherche d'un poste de développeuse front end où je pourrais contribuer à la conception tout en développant mes compétences en animation web 2D/3D et en nourrissant ma créativité.</p>
          <p>Après un apprentissage chez nother.io avec Bertrand Candas, je cultive une curiosité pour la conception d'expériences intuitives et interactives. </p>
        </div>
      </section>
      <section id="experiences" className='Container w-full h-screen border-2 border-green-500'></section>
      <section id="projects" className='Container w-full h-screen border-2 border-violet-500'></section>
      <Footer />
    </>
  )
}

export default App
