import { useEffect, useState } from "react";
import { navLinks } from "../utils";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed py-2 top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled ? "backdrop-blur shadow-lg bg-white" : " bg-inherit"}
        `}>
            <section className="flex justify-between items-center w-[95%] mx-auto font-grotesk gray">
                <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1781292406/dadotech-logo-removebg-preview_quj6wq.png" alt="dadotech logo" className="w-[100px] h-[30px] lg:w-[200px] "/>

                <div className="hidden lg:flex gap-7 items-center">
                    { navLinks.slice(0,4).map((n) => (
                        <a key={n.id} href={n.to} className="text-[0.9rem] font-semibold hover:text-[#1a6b2f] hover:cursor-pointer ease-in-out ">{n.label} </a>
                    )) }
                    { navLinks.slice(4).map((n) => (
                        <a key={n.id} href={n.to} className="text-[0.9rem] font-semibold text-white px-[20px] py-[9px] bg-green hover:cursor-pointer ease-in-out ">{n.label} </a>
                    )) }
                </div>
            </section>
            
        </nav>
    );
}

export default Navbar;