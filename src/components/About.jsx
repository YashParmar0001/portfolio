const About = () => {
    const aboutItems = [
        {
            label: 'Project done',
            number: 45
        },
        {
            label: 'Years of experience',
            number: 10
        }
    ];

    return (
        <section
            id="about"
            className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl
                md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl
                    md:ma-w-[60ch]">
                        Welcome! I'm Yash Parmar, a professional app developer
                        with a knack for crafting visually stunning and highly functinal apps.
                        Welcome! I'm Yash Parmar, a professional app developer
                        with a knack for crafting visually stunning and highly functinal apps.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:m-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">
                                            {number}

                                        </span>
                                        <span className="text-sky-400 font-semibold">
                                            +</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">
                                        {label}</p>
                                </div>
                            ))
                        }

                        <img
                        src="/images/logo.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                        >
                        </img>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;