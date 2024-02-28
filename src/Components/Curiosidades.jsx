import { CardCuriosidades } from "./CardCuriosidades"
import card1 from '../assets/C1.png'
import card2 from '../assets/C2.png'
import card3 from '../assets/C3.png'

export const Curiosidades = () => {
    return(
        <div className="flex flex-col pt-32 pb-32">
            <div className="flex flex-col ml-20">
                <h2 className="text-[#633A2C] font-bold text-7xl">Curiosidades</h2>
                <div className="h-[4px] bg-[#633A2C] w-44 mt-5"/>
            </div>
            <div className="flex flex-row gap-16 justify-center pt-10">
                <CardCuriosidades img={card1} titulo="Café en Brasil" descripcion="El mayor productor mundial es Brasil, lidera la producción mundial de café. Sus vastas plantaciones cafetaleras contribuyen significativamente al suministro global." />
                <CardCuriosidades img={card2} titulo="Los granos no son granos" descripcion="Aunque los llamamos granos de café, en realidad son semillas de fruta. Estas semillas se extraen de los frutos rojos del árbol cafeto, que puede crecer hasta seis metros de altura." />
                <CardCuriosidades img={card3} titulo="Café y leche" descripcion="Los efectos del café disminuyen cuando se mezcla con leche. Así que si buscas obtener todos los beneficios estimulantes de la cafeína, es mejor tomarlo solo." />
            </div>
        </div>
    )
}