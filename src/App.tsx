import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import vertexShader from './assets/vertex-02.glsl'
import fragmentShader from './assets/fragment-02.glsl'

import Text from './components/BigText'
import Header from './components/Header'
import Footer from './components/Footer'
import Accordion from './components/Accordion'
import jsonData from './assets/data.json'
import InfiniteText from './components/InfiniteText'
import Application from './application'

export type data = typeof jsonData

interface ExperienceItem {
  formation: string,
  job: string,
  date: string
}

function App() {
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const image = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    let nFrame = 0

    if (canvas.current && image.current) {
      const application = new Application(canvas.current)
      const texture = new THREE.TextureLoader().load('/images/57340001.JPG')
      texture.colorSpace = THREE.LinearSRGBColorSpace

      const rect = image.current.getBoundingClientRect()
      const divPosition = {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      };

      const planeGeometry = new THREE.PlaneGeometry(divPosition.width/100, divPosition.height/100)
      const planeMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide })
      /*new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
      });*/
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
      planeMesh.position.set(0,0,0)
      //planeMesh.position.set(divPosition.x + divPosition.width / 2, -divPosition.y - divPosition.height / 2, 0)

      // Ajouter le plan à votre scène Three.js
      application.add(planeMesh)

      const animate = () => {
        if (image.current) {

          const rect = image.current.getBoundingClientRect();
          const divPosition = {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height
          };
          //console.log('pos', planeMesh.position)
          // TODO : Update plane position
          //application.camera.position.x = divPosition.x;
          //application.camera.position.y = -divPosition.y;
        }


        //application.camera.lookAt(planeMesh.position)

        application.update()
        nFrame = window.requestAnimationFrame(animate)
      }
      animate()
    }

    return () => {
      window.cancelAnimationFrame(nFrame)
    }
  }, [])

  // Image animation on mouse enter panel
  const imageContainer = useRef<HTMLImageElement | null>(null)
  const [imageIndex, setImageIndex] = useState<number | null>(null)

  const mouseEnter = (index: number) => {
    setImageIndex(index)
  }

  const mouseLeave = (index: number) => {
    if (imageIndex === index) {
      setImageIndex(null)
    }
  }

  useEffect(() => {
    const resize = () => {
      if (imageContainer.current && imageIndex !== null) {
        const items = document.querySelectorAll('.Accordion__item')
        const itemTop = items[imageIndex].getBoundingClientRect().top
        imageContainer.current.style.top = itemTop + 'px'
      }
    }

    resize()
    window.addEventListener('resize', resize)
    //window.addEventListener("scroll", resize)

    return () => {
      window.removeEventListener('resize', resize)
      //window.removeEventListener("scroll", resize)
    }
  }, [imageIndex])

  return (
    <>
      <canvas ref={canvas} className='fixed top-0 left-0 w-screen h-screen pointer-events-none z-20' />
      <Text />
      <Header />
      <section id="presentation" className='Container grid grid-cols-6 md:grid-cols-12 items-center gap-2 sm:gap-6 auto-rows-min'>
        <img className='col-span-5 md:col-span-6 md:row-span-2 xl:col-start-2 xl:col-span-5 aspect-square sm:aspect-[9/10] object-[center_70%] object-cover rounded-full'
          src="/images/maevamezzasalma.jpeg"
          alt="Portrait de Maëva Mezzasalma réalisé par Romain Quiblier" />
        <h1 className='font-pilowlava row-start-1 col-span-4 col-start-3 md:col-span-5 md:col-start-8 xl:col-span-4 xl:col-start-8 flex flex-col  text-right'>{jsonData.title}</h1>
        <div className='col-span-5 col-start-2 md:col-start-8 xl:col-span-4 xl:col-start-8 flex flex-col gap-2 sm:gap-6' dangerouslySetInnerHTML={{ __html: jsonData.presentation }} />
      </section>
      <section id="technologies" className=' my-5 sm:my-10'>
        <InfiniteText className={'text-primary'} texts={jsonData.technologies} />
        <InfiniteText className={'text-secondary rotate-6 sm:rotate-3 -mt-3'} texts={jsonData.technologies} />
      </section>

      <section id="projects" className='Container relative grid sm:grid-cols-12'>
        <div ref={imageContainer} className="w-full h-full fixed pointer-events-none transition-transform top-0 left-0">
          <div className="container mx-auto w-full h-full grid grid-cols-12">
            <img ref={image}
              className={`col-start-9 col-span-4 aspect-square sm:aspect-[9/10] object-cover object-center -translate-y-1/4 border-2 border-primary transition-opacity ${imageIndex ? ' opacity-50' : ' opacity-50'}`}
              src={`/images/${imageIndex !== null ? jsonData.projects[imageIndex].image : ''}`}
              alt={''} />
          </div>
        </div>

        <Accordion items={jsonData.projects} className='sm:col-span-9' mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      </section>
      <section id="experiences" className='Container flex justify-end'>
        <ul className='flex flex-col items-end gap-6'>
          {jsonData.experiences.map((item: ExperienceItem, index: number) =>
            <li key={index} className='group flex gap-2'>
              {item.date ? <span className="flex justify-center items-center gap-2 after:content-[''] after:block after:h-1 after:sm:h-[0.5px] after:w-1 after:sm:w-10 after:bg-black after:rounded-full">{item.date}</span> : ''}
              <ul className='flex flex-col items-end'>
                {item.formation ? <li className='transition-transform group-hover:translate-x-2'>{item.formation}</li> : ''}
                {item.job ? <li className='transition-transform group-hover:-translate-x-2' dangerouslySetInnerHTML={{ __html: item.job }} /> : ''}
              </ul>
            </li>
          )}
        </ul>
      </section>
      <Footer />
    </>
  )
}

export default App
