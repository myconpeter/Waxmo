import { FaLocationArrow } from "react-icons/fa";
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

const welcomePage = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="text-black flex flex-col items-center">
                <img className='rounded-full h-40 w-40 items-center pb-9' src={logo} alt="micheal" />

                <h4 className=" mt-4 text-4xl  font-signature mb-11 text-white">- The path to finiancial growth -</h4>

                <div className='group  items-center px-3 mt-36  bg-lightGray rounded-full flex cursor-pointer w-fit '>
                    <Link to="loginORsignup"
                        className='group text-blabk items-center p-3 px-3 bg-blue-500 text-2xl font-bold  rounded-lg flex cursor-pointer w-fit'

                    >
                        Get Started
                        <span className='text-black ml-5  '>
                            <FaLocationArrow className="text-overLay rotate-45" />
                        </span>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default welcomePage

