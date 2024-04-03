const Header = () => {
    return (
        <header className="relative h-[480px] bg-right-top bg-[url('/fitness-500x510.jpg')] md:bg-[url('/fitness1080x450.png')] bg-cover bg-no-repeat grayscale-[90%]">          
            <section className="absolute text-white top-[30%] md:top-1/4 left-[10%] w-[200px] md:w-[500px]">
                <h1 className="text-7xl md:text-8xl">Every Session Counts</h1>
                <p>Strap line here</p>
            </section>
        </header>
    )
}

export default Header;