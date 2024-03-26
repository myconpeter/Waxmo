import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BackGround from "../assets/welcomePage-backgroundImage.jpg"
import logo from "../assets/logo.svg"


const loginORsignup = () => {
    return (

        <div className="">



            <div >
                <div className="relative">
                    <img className="w-screen h-screen" src={BackGround} alt="background" />
                    <div className="bg-overLay absolute inset-0 opacity-75 w-screen h-screen"></div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                    <div className="flex h-full pt-4 ">
                        <div className="text-black flex flex-col items-center">
                            <img className='rounded-full h-80 w-80 top-12 items-center pb-2' src={logo} alt="micheal" />

                            {/* <h4 className=" mt-4 text-4xl  font-signature mb-11 text-white">- The path to finiancial growth -</h4> */}


                            <div className="flex flex-col justify-center items-center mb-8">
                                <h4 className=" text-4xl font-semibold font-Roboto text-white">You're Welcome!</h4>


                            </div>
                            <div className="w-screen flex flex-col items-center">

                                <div className=' border-2 border-white mb-2  items-center justify-center bg-transparent rounded-full flex flex-col  w-4/6 h-11 '>
                                    <Link
                                        to="/login"
                                        className=' items-center p-3  text-white   text-2xl font-semibold rounded-lg flex '
                                    >
                                        LOG IN
                                    </Link>
                                </div>
                                <div className=' border-2 border-white   items-center justify-center  bg-white rounded-full flex flex-col  h-11  w-4/6 '>
                                    <Link
                                        to="/signup"
                                        className=' text-blabk items-center p-3  text-black   text-2xl font-bold rounded-lg flex w-fit'
                                    >
                                        SIGN UP
                                    </Link>
                                </div>
                            </div>

                            <footer className="flex  flex-col p-3 mt-20">
                                <div className=' w-full h-full  max-w-screen-lg mx-auto flex flex-row  justify-center items-center'>
                                    <h2 className="text-center items-center text-white justify-center text-xl">Follow us</h2>
                                </div>

                                <div className="flex flex-row items-center justify-center mt-3 space-x-2">

                                    <a target="_blank" href="#">
                                        <FaFacebook className="text-overLay bg-white" />
                                    </a>
                                    <a target="_blank" href="#">
                                        <FaSquareXTwitter className="text-overLay bg-white" />
                                    </a>
                                    <a target="_blank" href="#">
                                        <FaSquareWhatsapp className="text-overLay bg-white" />
                                    </a>

                                </div>
                            </footer>
                        </div>


                    </div>


                </div>
            </div >

        </div>

    )
}

export default loginORsignup

