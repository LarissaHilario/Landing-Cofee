import ImgInicio from '../assets/TazaInicio.png';

export const Inicio = () => {
    return (
        <div className='flex flex-col pb-20 pt-4 sm:pt-10'>
            <div className="flex flex-col md:flex-row justify-around  md:mt-16">
                <div className="flex flex-col items-center md:items-start p-10 sm:p-0">
                    <h2 className="text-[#603809] text-center font-bold text-4xl md:text-7xl">¿QUÉ ES EL CAFÉ?</h2>
                    <div className='h-[4px] w-full md:w-44 bg-[#603809] mt-5'/>
                    <p className="text-justify leading-8 md:leading-9 text-[#5A5A5A] font-light text-lg md:text-2xl mt-5 md:ml-10">
                    El café es una bebida estimulante elaborada a
                        <span className="hidden sm:inline"> <br /> </span>
                        partir de los granos tostados y molidos de las
                        <span className="hidden sm:inline"> <br /> </span>
                        semillas de ciertas variedades de plantas de
                        <span className="hidden sm:inline"> <br /> </span>
                        café, principalmente de las especies Coffea
                        <span className="hidden sm:inline"> <br /> </span>
                        arabica y Coffea canephora (también
                        <span className="hidden sm:inline"> <br /> </span>
                        conocida como Coffea robusta). 
                    </p>
                </div>
                <div className="ml-6 md:mt-0">
                    <img src={ImgInicio} alt="Imagen-inicio" className="w-80 h-30 md:w-auto h-auto" />
                </div>
            </div>
        </div>
    )
};
