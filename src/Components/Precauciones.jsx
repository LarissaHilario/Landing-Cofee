import { CardPrecauciones } from './CardPrecauciones'
import ImgPrecauciones from '../assets/ImgPrecauciones.png'
import Card1 from '../assets/Pregnant.png'
import Card2 from '../assets/Shaking.png'
import Card3 from '../assets/Insomnia.png'

export const Precauciones = () => {
    return(
        <div className="flex flex-col pt-14 pb-14 bg-[#FAFAFA]">
            <div className='flex flex-col items-end mr-20'>
                <div className="flex flex-col items-end">
                    <h2 className="text-[#603809] font-bold  text-4xl md:text-7xl">Precauciones</h2>
                    <div className="h-[4px] w-44 bg-[#603809] mt-5"/>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-48'>
                <img src={ImgPrecauciones} alt="img-precauciones" className='object-contain hidden sm:block' />
                <div className="flex flex-col gap-10 mt-10">
                    <CardPrecauciones img={Card1} titulo='Mujeres embarazadas' descripcion='Se recomienda limitar la ingesta de cafeína durante el embarazo debido al riesgo de complicaciones.'/>
                    <CardPrecauciones img={Card2} titulo='Personas sensibles a la cafeína' descripcion='Algunas personas experimentan efectos secundarios como nerviosismo, insomnio y dolores de cabeza'/>
                    <CardPrecauciones img={Card3} titulo='Personas con insomnio' descripcion='La cafeína dificulta el sueño, quienes tienen dificultades para dormir deben ser cautelosos con el consumo de café en las noches.'/>
                </div>
            </div>
        </div>
    )
}