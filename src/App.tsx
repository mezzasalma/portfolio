import { useRef } from 'react'
import BigText from './components/BigText'
import Header from './components/Header'
import Footer from './components/Footer'
import Accordion from './components/Accordion'
import jsonData from './assets/data.json'
import InfiniteText from './components/InfiniteText'

export type data = typeof jsonData

interface ExperienceItem {
  formation: string,
  job: string,
  date: string
}

function App() {
  const canvas = useRef(null)

  return (
    <>
      <canvas ref={canvas} className='fixed top-0 left-0 w-screen h-screen -z-10' />
      <BigText />
      <Header />
      {/*
      <section id="presentation" className='Container grid grid-cols-6 md:grid-cols-12 items-center gap-2 sm:gap-6 auto-rows-min'>
        <img className='col-span-5 md:col-span-6 md:row-span-2 xl:col-start-2 xl:col-span-5 aspect-square sm:aspect-[9/10] object-[center_70%] object-cover rounded-full'
          src="/images/maevamezzasalma.jpeg"
          alt="Portrait de Maëva Mezzasalma réalisé par Romain Quiblier" />
        <h1 className='font-pilowlava row-start-1 col-span-4 col-start-3 md:col-span-5 md:col-start-8 xl:col-span-4 xl:col-start-8 flex flex-col  text-right'>{jsonData.title}</h1>
        <div className='col-span-5 col-start-2 md:col-start-8 xl:col-span-4 xl:col-start-8 flex flex-col gap-2 sm:gap-6' dangerouslySetInnerHTML={{ __html: jsonData.presentation }} />
      </section>*/}
      <section className='Container h-[81vh] sm:h-[75vh] flex items-end'>
        <h1 className='font-pilowlava flex flex-col' dangerouslySetInnerHTML={{ __html: jsonData.title }} />
      </section>
      <section id="presentation" className='Container grid sm:grid-cols-12'>
        <div className='col-start-2 col-span-5 sm:col-start-5 sm:col-span-7 xl:col-start-8 xl:col-span-4 flex flex-col gap-2 sm:gap-6' dangerouslySetInnerHTML={{ __html: jsonData.presentation }} />
      </section>
      <section id="technologies" className='my-5 sm:my-20'>
        <InfiniteText className={''} texts={jsonData.technologies} />
      </section>
      <section id="projects" className='Container grid sm:grid-cols-12'>
        <Accordion items={jsonData.projects} className='sm:col-span-9' />
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
