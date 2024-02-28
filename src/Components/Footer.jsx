import ImgFooter from '../assets/ffw.png'

export const Footer = () => {
    return(
        <footer className="flex flex-col">
            <div className="bg-[#79564A] w-full h-32 sm:h-72">
                <div className="flex flex-col ml-5 mt-10 md:ml-20 md:mt-14">
                    <div className="flex items-center">
                        <img src={ImgFooter} alt="ImgFooter" className='w-[60px] sm:w-[130px] sm:h-[130px]' />
                        <h1 className="text-[#FFFFFF] font-thin text-[40px] sm:text-[82px] ml-2 sm:ml-8">AKALI</h1>
                    </div>
                    <div className='h-[1px] w-[1630px] bg-[#FFFFFF] mt-2 sm:mt-10'/>
                </div>
            </div>
            <div className="bg-[#FFFFFF] w-full h-14 sm:h-20 flex items-center">
                <h2 className=' ml-5 sm:ml-32 text-[#848484] font-normal text-sm sm:text-base'>©2024 AKALI. Todos los derechos reservados</h2>
            </div>
        </footer>
    )
}