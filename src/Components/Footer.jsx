import ImgFooter from '../assets/ffw.png'

export const Footer = () => {
    return(
        <footer className="flex flex-col">
            <div className="bg-[#79564A] w-full h-72">
                <div className="flex flex-col ml-20 mt-14">
                    <div className="flex items-center">
                        <img src={ImgFooter} alt="ImgFooter" className='w-[130px] h-[130px]' />
                        <h1 className="text-[#FFFFFF] font-thin text-[82px] ml-8">AKALI</h1>
                    </div>
                    <div className='h-[1px] w-[1630px] bg-[#FFFFFF] mt-10'/>
                </div>
            </div>
            <div className="bg-[#FFFFFF] w-full h-20 flex items-center">
                <h2 className='ml-32 text-[#848484] font-normal'>©2024 AKALI. Todos los derechos reservados</h2>
            </div>
        </footer>
    )
}