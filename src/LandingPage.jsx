import HeroSection from "./components/HeroSection"
import Project from "./components/Projects"
import Services from "./components/Services"

export default function LandingPage (){

    return(
        <section>
            <section id="" >
                <HeroSection />
            </section>
            <section id="services" >
                <Services />
            </section>
            <section id="gallery" >
                <Project />
            </section>
        </section>
    )
}