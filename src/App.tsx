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
      <section id="presentation" className='w-full h-screen border-2 border-yellow-500'></section>
      <section id="formation" className='w-full h-screen border-2 border-yellow-500'></section>
      <section id="projects" className='w-full h-screen border-2 border-yellow-500'></section>
      <Footer />
    </>
  )
}

export default App
