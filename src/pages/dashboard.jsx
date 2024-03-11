import Menu from "../components/menu";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import { FaArrowUp } from "react-icons/fa";

import { MdVerified } from "react-icons/md";
import Investment from "../assets/buyShare.png";
import Shares from "../assets/information.png";
import Ananlysis from "../assets/analysis.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";




const dashboard = () => {

    const [see, setSee] = useState(false)

    const toggle = (i) => {
        i.preventDefault();
        if (see === false) {
            setSee(true)
        }
        else {
            setSee(false)

        }
    }

    const Amount = '₦10000';




    return (

        <div className="bg-white w-full  p-2 mt-7 " >
            <Menu PageName='Dashboard' />

            <div>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="mt-2 w-fit  ">

                            <p className="text-md font-semibold text-darkGreen">Hi, Micheal </p>

                        </div>
                        <div className="bg-darkGray px-0.5 h-full  mr-4 rounded-lg ">
                            <FaUser className="text-overLay text-sm  items-center justify-center" />
                        </div>
                    </div>

                    <div className="h-20 z-50 w-full bg-darkGreen mt-2   rounded-3xl pt-2">

                        <div className="flex items-center justify-center bg-lightGray w-fit px-8 rounded-r-full rounded-l-none text-black ">
                            <MdVerified className="text-overLay" />

                            <p className="text-sm">1% limited patrner</p>
                        </div>

                        <div className="text-white flex  justify-between mx-2 pt-2 text-xl font-bold">
                            <p className="text-sm">{see === true ? '****' : Amount}</p>


                            <button onClick={toggle}>{see === true ? <IoMdEye className="text-white text-sm" /> : <IoMdEyeOff className="text-white text-sm" />}</button>


                            <div className="flex justify-between">
                                <FaArrowUp className="text-white text-sm" />
                                <p className="text-white text-sm">0.20%</p>
                            </div>


                        </div>

                    </div>
                    <div>

                        <div className=" mt-2 mx-4 ">
                            <p className="text-sm">Actions</p>
                        </div>


                        <Link to='/home/buyshare' className="flex items-center justify-between px-3 w-full h-12 bg-darkGreen mt-1 text-white rounded-xl">
                            <div>
                                <p className="text-md font-bold">Buy a share</p>
                            </div>

                            <div>
                                <img className="w-12 h-10 rounded-xl" src={Investment} alt="Investment" />
                            </div>

                        </Link>
                        <Link to='/home/analysis' className="flex items-center justify-between px-3 w-full h-12 bg-darkGreen mt-1 text-white rounded-xl">
                            <div>
                                <p className="text-md font-bold">Check Analysis</p>
                            </div>

                            <div>
                                <img className="w-12 h-10 rounded-xl" src={Ananlysis} alt="Ananlysis" />
                            </div>

                        </Link>
                        <Link to='/home/shareinfo' className="flex items-center justify-between px-3 w-full h-12 bg-darkGreen mt-1 text-white rounded-xl">
                            <div>
                                <p className="text-md font-bold">Shares Information</p>
                            </div>

                            <div>
                                <img className="w-12 h-10  rounded-xl my-4 " src={Shares} alt="Shares" />
                            </div>

                        </Link>

                    </div>
                </div>

            </div>

        </div >
    )
}



export default dashboard