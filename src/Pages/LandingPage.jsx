import { Beneficios } from "../Components/Beneficios"
import { Curiosidades } from "../Components/Curiosidades"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Inicio } from "../Components/Inicio"
import { Precauciones } from "../Components/Precauciones"

export const LandingPage = () => {
    return(
        <div className="w-full h-full">
            <Header></Header>
            <Inicio></Inicio>
            <Beneficios></Beneficios>
            <Curiosidades></Curiosidades>
            <Precauciones></Precauciones>
            <Footer></Footer>
        </div>

    )
}
