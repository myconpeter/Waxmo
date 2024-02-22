import logo from "../assets/logo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const loginORsignup = () => {
    return (



        <div
            className=" bg-black bg-opacity-100 relative overflow-hidden bg-cover bg-no-repeat text-center bg-welcome-page-background h-screen "


        >

            <div className="bg-overLay bg-opacity-75 relative overflow-hidden bg-cover h-screen w-screen"></div>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            >



                <div className="flex h-full pt-10 ">
                    <div className="text-black flex flex-col items-center">
                        <img className='rounded-full h-28 w-28 top-12 items-center pb-9' src={logo} alt="micheal" />

                        <h4 className=" mt-4 text-4xl  font-signature mb-11 text-white">- The path to finiancial growth -</h4>


                        <div className="flex flex-col justify-center m-auto items-center">
                            <h4 className=" mt-4 text-4xl   text-white">You're Welcome!</h4>


                            <div className=" ">

                                <div className='group border-2 border-white mb-2  items-center px-3 mt-12  bg-transparent rounded-full flex flex-col w-screen '>
                                    <Link
                                        to="/login"
                                        className='group text-blabk items-center p-3  text-white   text-2xl font-semibold rounded-lg flex cursor-pointer w-fit'
                                    >
                                        LOGIN
                                    </Link>
                                </div>
                                <div className='group border-2 border-white   items-center px-3   bg-white rounded-full flex flex-col w-screen '>
                                    <Link
                                        to="/signup"
                                        className='group text-blabk items-center p-3  text-black   text-2xl font-bold rounded-lg flex cursor-pointer w-fit'
                                    >
                                        SIGNUP
                                    </Link>
                                </div>
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
                                    <FaSquareXTwitter className="text-white bg-black" />
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

    )
}

export default loginORsignup

