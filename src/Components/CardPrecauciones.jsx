import PropTypes from 'prop-types'

export const CardPrecauciones = ({img, titulo, descripcion}) => {
    return (
        <div className='flex flex-row  gap-5 sm:gap-10 items-center'>
            <div className='flex items-center justify-center shadow-2xl rounded-full border-4 border-[#633A2C] w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]'>
                <img src={img} alt="img-card-precauciones" className='w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]' />
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-[#603809] font-semibold text-lg sm:text-2xl'>{titulo}</h2>
                <p className='text-[#5A5A5A] font-light w-[270px] sm:w-[473px] text-base sm:text-xl'>{descripcion}</p>
            </div>
        </div>
    )
}

CardPrecauciones.propTypes = {
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
}