import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import Button from "./Button"
import Arrow from "../assets/arrow-up.svg?react";

interface AccordionItem {
  title: string,
  completed: string,
  for: string,
  with: string
  opportunity: string,
  content: string,
  technos: string,
  website: string
}

interface AccordionProps {
  items: AccordionItem[],
  className?: string
}

function Accordion({ items, className }: AccordionProps) {

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Panel animation on toggle
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [heights, setContentsHeight] = useState<number[]>([]);

  const resize = () => {
    const contents = document.querySelectorAll('.Accordion__content');
    const h:number[] = []
    contents.forEach((content) => {
      h.push(content.scrollHeight)
    })
    setContentsHeight(h)
  }

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])


  // Panel animation on Enter
  const container = useRef<HTMLDivElement>(null);

  const animatePanels = () => {
    gsap.to(".Accordion__item", {
      x: 0,
      opacity: 1,
      stagger: {
        each: 0.3,
        ease: "power2.in",
      },
    })
    gsap.set(".Accordion__item", {
      pointerEvents: "auto"
    })
  }

  useEffect(() => {
    gsap.set(".Accordion__item", {
      x: -20,
      opacity: 0,
      pointerEvents: "none"
    })

    let st: ScrollTrigger | null

    if (container.current) {
      st = ScrollTrigger.create({
        trigger: container.current,
        //markers: true,
        start: "top 75%",
        end: "bottom 75%",
        onEnter: () => animatePanels()
      });
    }

    return () => {
      if (st) {
        st.kill()
      }
    }
  }, [])

  return (
    <div ref={container} className={`${className} Accordion flex flex-col divide-y divide-black transition-all`}>
      {items.map((item: AccordionItem, index: number) =>
        <div key={index} className='Accordion__item transition-all overflow-hidden'>
          <div onClick={() => handleClick(index)} className="Accordion__title flex justify-between items-center gap-6 p-3">
            <h2>{item.title}</h2>
            {item.website ? <Button type="external" link={item.website}>
              Voir le site
             <span className="relative block overflow-hidden">
                <Arrow className="duration-500 absolute top-0 left-0 group-hover:opacity-0 group-hover:translate-x-full group-hover:-translate-y-full w-4 h-4 transition-all"/>
                <Arrow className="duration-500 -translate-x-full translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 w-4 h-4 transition-all"/>
              </span> 
            </Button>: ''}
          </div>
          <div className={`Accordion__content flex flex-col gap-6 origin-top transition-all duration-500 px-3`}
            style={{ height: index === activeIndex ? heights[index] + 'px' : 0 }}>
            {item.content ? <p dangerouslySetInnerHTML={{ __html: item.content }} /> : ''}
            <div className="grid grid-cols-2 pb-3">
              <strong>Sorti en</strong>
              <span>{item.completed}</span>
              <strong>Réalisé avec</strong>
              <span>{item.with}</span>
              <strong>Créé pour</strong>
              <span>{item.for}</span>
              <strong>Technologies</strong>
              <span>{item.technos}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion