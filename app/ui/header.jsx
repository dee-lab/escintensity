const Header = () => {
    return (
        <header className="relative w-full h-[480px] before:float-right before:content-[''] before:absolute before:right-0 before:top-0 before:w-full before:h-full before:bg-[url('/fitness-500x510.jpg')] md:before:bg-[url('/fitness1080x450.png')] before:bg-cover before:bg-no-repeat before:grayscale-[90%]">          
            <section className="relative text-white top-[30%] md:top-1/4 left-[10%] w-[200px] md:w-[500px]">
                <h1 className="text-7xl md:text-8xl">Every Session Counts</h1>
                <p>Strap line here</p>
            </section>
            <p>insert here</p>
        </header>
    )
}

export default Header;