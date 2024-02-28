import logo from "../assets/ffw.png"

export const Header = () => {
    return (
        <div className="flex items-center justify-center top-0 w-full h-full overflow-x-hidden">
            <div className="h-full w-full relative bg-backCoffee bg-cover bg-no-repeat">
                <div className="flex flex-col gap-3  bg-black/30 first-letter:">
                    <div className="flex items-center justify gap-1 ml-10 w-full h-24">

                        <img src={logo} alt="" className="z-1 w-14 h-14 " />
                        <h1 className=" text-white font-thin text-4xl">
                            <span>AKALI</span>
                        </h1>


                    </div>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="mt-10 ml-20 mb-10">

                        <p className="text-white text-2xl ">Lo que debes de saber del</p>
                        <h2 className="text-white text-[220px] font-semibold"><span>Café</span></h2>
                        <p className="text-white text-2xl tracking-widest leading-10">Descubre cómo esta bebida milenaria  puede mejorar </p>
                        <p className="text-white text-2xl tracking-widest leading-10">tu salud, tu ánimo y tu productividad.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}