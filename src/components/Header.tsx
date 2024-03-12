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
        } else {
            gsap.to(window, {
                scrollTo: { y: 0, offsetY: 100 }
            });
        }
    }

    return (
        <header className="sticky top-0 bg-gradient-to-b from-white to-white/50 z-10">
            <div className="container mx-auto p-6 sm:px-0 flex justify-between items-center ">
                <a onClick={(e) => scrollTo(e)}className="CTA__home w-10 sm:w-20 h-12 flex justify-center items-center font-pilowlava px-8">MM</a>
                <ul className="StyledList flex flex-wrap justify-end items-center sm:gap-2">
                    {/*<li><a onClick={(e) => scrollTo(e)} href="#presentation">Maëva</a></li>*/}
                    <li><a onClick={(e) => scrollTo(e)} href="#projects">Projets</a></li>
                    <li><a onClick={(e) => scrollTo(e)} href="#experiences">Parcours</a></li>
                    <li><a onClick={(e) => scrollTo(e)} href="#footer">Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header