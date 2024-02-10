function Header() {
    //  <span className="h-2 sm:h-[0.5px] w-2 sm:w-10 bg-black rounded-full"></span>
    return (
        <header className="Container sticky top-0 flex justify-between items-center py-6">
            <span className="CTA__circle w-10 sm:w-20 aspect-square rounded-full border-black"></span>
            <ul className="StyledList flex items-center sm:gap-2">
                <li><a href="#presentation"><span>Maëva</span></a></li>
                <li><a href="#experiences">Experiences</a>   </li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header