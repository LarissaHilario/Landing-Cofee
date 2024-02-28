import PropTypes from 'prop-types'

export const Card = ({img, titulo, descripcion}) => {
    return(
        <div className="flex flex-col items-center w-[295px] h-72 gap-2">
            <img src={img} alt="img-card" className='w-32' />
            <h2 className='text-[#603809] font-bold text-2xl mt-4'>{titulo}</h2>
            <p className='text-[#5A5A5A] font-medium text-center text-base'>{descripcion}</p>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
}