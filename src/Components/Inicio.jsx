import ImgInicio from '../assets/TazaInicio.png'


export const Inicio = () => {
    return(
        <div className='flex flex-col pb-20 pt-10'>
            <div className="flex flex-row justify-around mt-16">
                <div className="flex flex-col">
                    <h2 className="text-[#603809] font-bold text-7xl">¿QUÉ ES EL CAFÉ?</h2>
                    <div className='h-[4px] w-44 bg-[#603809] mt-5'/>
                    <p className="text-justify leading-9 text-[#5A5A5A] font-light text-2xl mt-5 ml-10">
                    El café es una bebida estimulante elaborada a <br /> 
                    partir de los granos tostados y molidos de las <br /> 
                    semillas de ciertas variedades de plantas de <br /> 
                    café, principalmente de las especies Coffea <br /> 
                    arabica y Coffea canephora (también <br /> 
                    conocida como Coffea robusta). 
                    </p>
                </div>
                <div>
                    <img src={ImgInicio} alt="Imagen-inicio" />
                </div>
            </div>
        </div>
    )
}