import logo from "../assets/logo.svg"
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";






import { Link } from "react-router-dom";

const homePage = () => {
    return (

        <div
            className=" bg-black bg-opacity-100 relative overflow-hidden bg-cover bg-no-repeat  text-center bg-welcome-page-background h-screen pb-36 "


        >

            <div className="bg-overLay bg-opacity-75 relative overflow-hidden bg-cover h-screen  w-screen"></div>
            <div
                className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed"
            >
                <div className=" flex flex-col items-center bg-transparent  absolute mt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
                    <img className='rounded-full h-28 w-28 top-12 items-center' src={logo} alt="micheal" />

                    <h4 className=" mt-1  font-signature mb-11 text-white">The path to finiancial growth </h4>
                </div>



                <div className="bg-transparent  h-screen overflow-hidden flex items-center justify-center pt-36">
                    <div className="bg-white w-screen  rounded-t-3xl pt-1 ">

                        {/* this is for ads take note */}
                        {/* this is for ads take note */}
                        {/* this is for ads take note */}
                        <div className=" flex items-center mt-0 pt-0 justify-center w-full h-12  absolute mb-36 bg-overLay rounded-t-3xl">
                            <p className="text-white">ADS</p>
                        </div>

                        {/* this is for ads take note */}

                        <section className="relative mt-20 m-6 h-full">
                            <div className="flex space-x-6  ">
                                <div className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                    <Link to='/home/dashboard' className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                        <FaChartLine className="font-extrabold text-5xl text-overLay " />

                                        <p className="text-overLay font-bold text-xl">Dashboard</p>

                                    </Link>
                                </div>
                                <div className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                    <Link to='/home/infomation' className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                        <IoInformationCircle className="font-extrabold text-5xl text-overLay " />
                                        <p className="text-overLay font-bold text-xl">Information</p>

                                    </Link>
                                </div>
                            </div>
                            <div className="flex space-x-6 mt-16  ">
                                <div className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                    <Link to='/home/about' className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                        <FaUsers className="font-extrabold text-5xl text-overLay " />

                                        <p className="text-overLay font-bold text-xl">About Us</p>
                                    </Link>

                                </div>

                                <div className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                    <Link to='/home/contact' className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 " >
                                        <MdOutlineSupportAgent className="font-extrabold text-5xl text-overLay " />
                                        <p className="text-overLay font-bold text-xl">Contact Us</p>
                                    </Link>

                                </div>
                            </div>
                            <div className="flex space-x-6 mt-16  ">
                                <div className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                    <Link to='/home/settings' className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                        <FaHandshakeSimple className="font-extrabold text-5xl text-overLay " />

                                        <p className="text-overLay font-bold text-xl">Partnership</p>
                                    </Link>

                                </div>


                                <Link to='/home/faq' className="flex flex-1 flex-col items-center bg-lightGray p-2 rounded-3xl w-1/3 ">
                                    <IoIosChatbubbles className="font-extrabold text-5xl text-overLay " />

                                    <p className="text-overLay font-bold text-xl">F A Q</p>
                                </Link>


                            </div>
                        </section>




                    </div>
                </div>



            </div>
        </div >


    )
}

export default homePage