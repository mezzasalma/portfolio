function Footer() {
    return (
        <footer id="footer" className="Container h-screen flex flex-col gap-10 lg:gap-20 justify-center items-center !mb-0">
            <div className="grid grid-cols-12">
            <img className='col-span-4 col-start-5 lg:col-start-6 lg:col-span-2 aspect-[9/10] object-[center_70%] object-cover rounded-full'
                src="/images/maevamezzasalma.jpeg"
                alt="Portrait de Maëva Mezzasalma réalisé par Romain Quiblier" />
            </div>
            <ul className="col-span-12 StyledList flex flex-wrap justify-center items-center gap-2 ">
                <li><a href="public/images/" download>CV</a></li>
                <li><a href="https://www.linkedin.com/in/maëva-mezzasalma/">Linkedin</a></li>
                <li><a href="mailto:maeva.mezza38@gmail.com">Contact</a></li>
                <li><span>Maëva Mezzasalma</span></li>
            </ul>
        </footer>
    )
}

export default Footer