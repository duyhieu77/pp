import React from 'react'
import Logo from "../../assets/Web/logo.png"

const Home = () => {
    return (
        <div className="min-h-[550px] sm:min-h-[700px] bg-brandDark flex justify-center items-center text-white">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/*text content section */}
                    <div className="mt-8 sm:mt-12">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                            We have delicious <span className="text-primary font-cursive">Cakes and Coffee</span> for you
                        </h1>
                        <div className="mt-6 sm:mt-8">
                            <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
                                Let's explore
                            </button>
                        </div>
                    </div>
                    {/*Image section */}
                    <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
                        <img src={Logo} alt="logo" className="rounded-full w-[300px] sm:scale-125 mx-auto spin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home