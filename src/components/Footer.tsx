function Footer() {
    return (
        <footer className="Container h-screen flex flex-col justify-center items-center !mb-0">
            <div className="grid grid-cols-12">
            <img id="footer" className='col-span-4 col-start-5 lg:col-start-6 lg:col-span-2 aspect-[9/10] object-[center_65%] object-cover rounded-full'
                src="/images/maevamezzasalma.jpg"
                alt="Portrait de Maëva Mezzasalma réalisé par Romain Quiblier" />
            </div>
            <ul className="col-span-12 StyledList flex flex-wrap justify-center items-center gap-2 mt-10 lg:mt-20">
                <li><a href="CV_Mezzasalma.pdf" download>CV</a></li>
                <li><a href="https://www.linkedin.com/in/maëva-mezzasalma/">Linkedin</a></li>
                <li><a href="mailto:maeva.mezza38@gmail.com">Contact</a></li>
            </ul>
            <span className="mt-6">Maëva Mezzasalma© - 2024</span>
        </footer>
    )
}

export default Footer