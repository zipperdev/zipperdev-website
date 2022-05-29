import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Zipperdev from "../../img/zipperdev.svg";

function Header() {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const eventListener = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", eventListener);
        return () => window.removeEventListener("resize", eventListener);
    }, []);
    return (
        <nav className="bg-gray-transparent w-full h-20 sm:h-24 flex items-center px-8 sm:mt-40 md:h-28 xl:mt-52 z-20">
            <Link to="/">
                <img src={Zipperdev} alt="홈" className="w-16 h-16 sm:w-[4.3rem] sm:h-[4.3rem] rounded-full flex-grow-0" />
            </Link>
            {screenWidth < 640 ? (
                <div className="flex flex-grow justify-end">
                    <button onClick={() => setMenuOpen(prev => !prev)} className="flex justify-center items-center w-10 h-10 aspect-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex" viewBox="0 0 20 20" fill="#e5e7eb">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            ) : null}
            <div className={`${screenWidth < 640 ? `transition-opacity flex-grow flex-col justify-center fixed top-[6.75rem] left-2 right-2 box-border rounded-xl overflow-hidden bg-neutral-900 ${menuOpen ? "opacity-1" : "pointer-events-none cursor-default opacity-0"}` : "flex-grow justify-end space-x-4 md:space-x-6 opacity-1"} flex `}>
                {[
                    {
                        title: "홈", 
                        link: "/"
                    }, 
                    {
                        title: "프로젝트", 
                        link: "/projects"
                    }, 
                    {
                        title: "Zipperdev Studios", 
                        link: "/zipperdev-studios"
                    }
                ].map((item, index) => (
                    <Link key={index} to={item.link}>
                        <div className={`${screenWidth < 640 ? "px-2 py-1 bg-[#1b1b1d]" : ""} group cursor-pointer`}>
                            <h3 className={`${screenWidth < 640 ? "text-gray-300" : ""} text-lg font-medium text-gray-200 text-center transition-colors group-hover:text-zinc-400`}>{item.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Header;