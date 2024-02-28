import { useEffect, useRef } from "react";
import { gsap } from 'gsap'

interface InfiniteProps {
  className: string,
  texts: string[]
}

function InfiniteText({ className, texts }: InfiniteProps) {
  /*
  const firstText = useRef<HTMLElement | null>(null);
  const secondText = useRef<HTMLElement | null>(null);
  let xPercent = 0;
  
  const animation = () => {
    if(xPercent <= -100) {
      xPercent = 0
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current,  {xPercent: xPercent})
    xPercent += -0.1
    requestAnimationFrame(animation)
  }
  
  useEffect(() => {
    requestAnimationFrame(animation)
  }, [])
  */

  const container = useRef<HTMLDivElement | null>(null);

  const resize = () => {
    if (container.current && container.current.firstChild) {
      const width = parseInt(getComputedStyle(container.current.firstChild as Element).getPropertyValue('width'), 10)

      gsap.fromTo(container.current.children, {
        x: 0
      }, {
        x: - width,
        duration: Math.floor(Math.random() * 5) + 10,
        repeat: -1,
        ease: 'none'
      })
    }
  }

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    
    return () => {
      window.removeEventListener('resize', resize)
    }

  }, [])

  return (
    <div ref={container} className={`sliderContainer flex gap-2 overflow-hidden font-pilowlava ${className}`}>
      <div className='slider flex justify-around gap-2 shrink-0 sm:w-full'>
        {texts.map((techno: string, i: number) => <span key={i} className="inline-block shrink-0">{techno}</span>)}
      </div>
      <div className='slider flex justify-around gap-2 shrink-0 sm:w-full'>
        {texts.map((techno: string, i: number) => <span key={i} className="inline-block shrink-0">{techno}</span>)}
      </div>
    </div>
  )
}

export default InfiniteText