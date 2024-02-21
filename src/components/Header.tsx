import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)

function Header() {
    const scrollTo = (e: React.MouseEvent) => {
        e.preventDefault()
        const anchor: string | null = (e.target as HTMLElement).getAttribute("href")
        if (anchor) {
            gsap.to(window, {
                scrollTo: { y: anchor, offsetY: 100 }
            });
        }
    }

    //  <span className="h-2 sm:h-[0.5px] w-2 sm:w-10 bg-black rounded-full"></span>
    return (
        <header className="container mx-auto p-6 sm:px-0 sticky top-0 flex justify-between items-center bg-gradient-to-b from-white to-transparent z-10">
            <span className="CTA__circle w-10 sm:w-20 aspect-square flex justify-center items-center font-pilowlava">MM</span>
            <ul className="StyledList flex flex-wrap justify-end items-center sm:gap-2">
                <li><a onClick={(e) => scrollTo(e)} href="#presentation">Maëva</a></li>
                <li><a onClick={(e) => scrollTo(e)} href="#projects">Projets</a></li>
                <li><a onClick={(e) => scrollTo(e)} href="#experiences">Experiences</a></li>
                <li><a onClick={(e) => scrollTo(e)} href="#footer">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header