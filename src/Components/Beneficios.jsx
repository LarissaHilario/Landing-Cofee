import { Card } from "./Card"
import Card1 from '../assets/ADN.png'
import Card2 from '../assets/Heart.png'
import Card3 from '../assets/Brain.png'
import Card4 from '../assets/Tract.png'

export const Beneficios = () => {
    return(
        <div className="flex flex-col pt-16 pb-10 bg-[#FAFAFA] gap-32">
            <div className="flex flex-col items-center">
                <h2 className="text-[#603809] font-bold text-7xl">Beneficios</h2>
                <div className="h-[4px] w-44 bg-[#603809] mt-5"/>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-20">
                    <Card img={Card1} titulo="ADN más fuerte" descripcion="El café tostado oscuro disminuye la rotura en las cadenas de ADN,"/>
                    <Card img={Card2} titulo="Beneficios cardiacos" descripcion="Beber tazas de café al día puede ayudar a prevenir la insuficiencia cardíaca."/>
                    <Card img={Card3} titulo="Protección al Alzheimer" descripcion="La cafeína puede proporcionar una protección contra el Alzheimer."/>
                    <Card img={Card4} titulo="Beneficios al hígado" descripcion="El café regular puede tener un efecto protector en el hígado."/>
                </div>
            </div>
        </div>
    )
}