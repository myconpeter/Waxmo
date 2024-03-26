import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackGround from "../assets/welcomePage-backgroundImage.jpg"
import logo from "../assets/logo.svg"



const welcomePage = () => {
    return (


        <div className="" >
            <div className="relative">
                <img className="w-screen h-screen" src={BackGround} alt="background" />
                <div className="bg-overLay absolute inset-0 opacity-75 w-screen h-screen"></div>

            </div>

            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            >

                <div className="flex h-full items-center justify-center">
                    <div className="text-black flex flex-col items-center">
                        <img className='rounded-full h-96 w-96 items-center pb-5' src={logo} alt="micheal" />


                        <div className='group items-center px-4   bg-white rounded-full flex cursor-pointer w-fit '>
                            <Link to="loginORsignup"
                                className='group text-black items-center p-2 px-3 text-3xl font-bold  rounded-lg flex cursor-pointer w-fit'

                            >
                                Get Started
                                <span className='text-black ml-5  '>
                                    <FaLocationArrow className="text-overLay rotate-45" />
                                </span>

                            </Link>

                        </div>
                    </div>
                </div>




            </div>
        </div >

    )
}

export default welcomePage

