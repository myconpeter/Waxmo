
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import BackGround from "../assets/welcomePage-backgroundImage.jpg";







import { Link } from "react-router-dom";

const homePage = () => {
    return (

        <div className="">
            <div className="relative">
                <img src={BackGround} className="h-48 w-full" alt="background" />
                <div className="bg-overLay absolute inset-0 opacity-50 w-screen h-48"></div>

            </div>


            <div
                className="relative bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed"
            >



                <div className="bg-transparent  h-full overflow-hidden flex items-center justify-center">
                    <div className="bg-white w-screen  rounded-t-3xl pt-1 ">

                        {/* this is for ads take note */}
                        {/* this is for ads take note */}
                        {/* this is for ads take note */}
                        <div className=" flex items-center mt-0 pt-0 justify-center w-full h-12  relative bg-overLay rounded-t-3xl">
                            <p className="text-white">ADS</p>
                        </div>

                        {/* this is for ads take note */}

                        <section className="relative  m-6 h-full">
                            <div className="flex space-x-2  ">
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
                                    <FaHandshakeSimple className="font-extrabold text-4xl text-iconColor " />

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
        </div >


    )
}

export default homePage