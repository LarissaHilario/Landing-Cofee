import PropTypes from 'prop-types'

export const CardCuriosidades = ({img, titulo, descripcion}) => {
    return(
        <div className="flex flex-col rounded-[10px] shadow-2xl w-[340px] h-[453px] bg-[#ffffff] hover:scale-105 hover:duration-300 transition-all">
            <img src={img} alt="img-card-curiosidades" className='w-[340px] h-[174px] shadow-2xl rounded-t-[8px]' />
            <div className="flex flex-col items-center gap-5">
                <h2 className='text-[#633A2C] font-semibold text-2xl mt-5'>{titulo}</h2>
                <p className='text-[#5A5A5A] font-light mt-5 text-base w-[299px]'>{descripcion}</p>
            </div>
        </div>
    )
}

CardCuriosidades.propTypes = {
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
}