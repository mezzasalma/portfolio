function Header() {
    return (
        <header className="sticky top-0 container mx-auto flex justify-between items-center py-2">
            <span className="CTA__circle w-20 aspect-square rounded-full border-black"></span>
            <div className="flex items-center gap-2">
                <a href="#presentation"><span>Maëva</span></a>
                <span className="h-[0.5px] w-10 bg-black"></span>
                <a href="#experiences">Experiences</a>   
                <span className="h-[0.5px] w-10 bg-black"></span>
                <a href="#projects">Projets</a>
                <span className="h-[0.5px] w-10 bg-black"></span>
                <a href="#contact">Contact</a>
            </div>
        </header>
    )
}

export default Header