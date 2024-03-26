import { Link } from "react-router-dom";
import BackGround from "../assets/welcomePage-backgroundImage.jpg"
import logo from "../assets/logo.svg"
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";


const homePage = () => {




    // 

    return (

        <div className="">

            <div className="relative">
                <img className="" src={BackGround} alt="background" />
                <div className="bg-overLay absolute inset-0 opacity-50 w-screen h-full"></div>

            </div>

            <div className="bg-overLay bg-opacity-75 relative overflow-hidden bg-cover h-full w-screen"></div>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            >

                <img className='m-auto h-60 w-60 items-center ' src={logo} alt="micheal" />



                <div className="bg-white h-full rounded-t-3xl pt-10">


                    <section className=" relative  h-full">
                        <div className="flex space-x-2   ">
                            <div className="flex flex-1 flex-col items-center  p-2 rounded-3xl w-1/3 ">
                                <Link to='/home/dashboard' className="flex flex-1 flex-col items-center  p-2 rounded-3xl w-1/3 ">
                                    <FaChartLine className="font-extrabold text-4xl text-iconColor " />

                                    <p className="text-black font-semibold text-sm">Dashboard</p>

                                </Link>
                            </div>
                            <div className="flex flex-1 flex-col items-center  p-2 rounded-3xl w-1/3">
                                <Link to='/home/infomation' className="flex flex-col items-center p-2 rounded-3xl w-1/3 ">
                                    <IoInformationCircle className="font-extrabold text-4xl text-iconColor  " />
                                    <p className="text-black font-semibold text-sm">Information</p>

                                </Link>
                            </div>

                            <div className="flex flex-1 flex-col items-center  p-2 rounded-3xl w-1/3">
                                <Link to='/home/about' className="flex flex-1 flex-col items-center p-2 rounded-3xl w-1/3 ">
                                    <FaUsers className="font-extrabold text-4xl text-iconColor " />

                                    <p className="text-black font-semibold text-sm">About</p>
                                </Link>
                            </div>
                        </div>
                        <div className="flex space-x-2 mt-6  ">
                            <Link to='/home/settings' className="flex flex-1 flex-col items-center  p-2 rounded-3xl w-1/3 ">
                                <FaHandshakeSimple className="font-extrabold text-4xl rotate-45 text-iconColor " />

                                <p className="text-black font-semibold text-sm">Partnership</p>
                            </Link>



                            <Link to='/home/contact' className="flex flex-1 flex-col items-center  p-2 rounded-3xl w-1/3 " >
                                <MdOutlineSupportAgent className="font-extrabold text-4xl text-iconColor " />
                                <p className="text-black font-semibold text-sm">Contact</p>
                            </Link>

                            <Link to='/home/faq' className="flex flex-1 flex-col items-center p-2 rounded-3xl w-1/3 ">
                                <IoIosChatbubbles className="font-extrabold text-4xl text-iconColor " />

                                <p className="text-black font-semibold text-sm">FAQ</p>
                            </Link>


                        </div>

                    </section>

                </div>



            </div>
        </div >


    )
}

export default homePage