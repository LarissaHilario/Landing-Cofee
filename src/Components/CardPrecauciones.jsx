import PropTypes from 'prop-types'

export const CardPrecauciones = ({img, titulo, descripcion}) => {
    return (
        <div className='flex flex-row  gap-5 md:gap-10 items-center'>
            <div className='flex items-center justify-center shadow-2xl rounded-full border-4 border-[#633A2C] w-[60px] h-[60px] md:w-[100px] md:h-[100px]'>
                <img src={img} alt="img-card-precauciones" className='w-[40px] h-[40px] md:w-[70px] md:h-[70px]' />
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-[#603809] font-semibold text-lg md:text-2xl'>{titulo}</h2>
                <p className='text-[#5A5A5A] font-light w-[270px] md:w-[473px] text-base md:text-xl'>{descripcion}</p>
            </div>
        </div>
    )
}

CardPrecauciones.propTypes = {
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
}