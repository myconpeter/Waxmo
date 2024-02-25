import Menu from "../components/menu";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import { MdVerified } from "react-icons/md";
import Investment from "../assets/investment.jpg";
import Shares from "../assets/shares.avif";
import Ananlysis from "../assets/analysis.jpg"



const dashboard = () => {
    return (
        <div className="bg-white w-full h-screen p-2 ">
            <Menu />

            <div>
                <div>

                    <div className="pt-3">

                        <p className="text-2xl font-semibold text-darkGreen">Hi, Micheal Peter</p>

                    </div>

                    <div className="h-32 z-50 w-full bg-darkGreen mt-10  rounded-3xl p-2">

                        <div className="flex items-center justify-center  bg-lightGray w-fit px-8 rounded-xl text-black ">
                            <MdVerified className="text-overLay" />

                            <p>1% limited patrner</p>
                        </div>

                        <div className="text-white flex justify-between pt-4 text-xl font-bold">
                            <p>₦ 10,000</p>


                            <FaEyeSlash />

                            <div className="flex justify-between">
                                <FaArrowUp />
                                <p>0.20%</p>
                            </div>


                        </div>

                    </div>
                    <div>

                        <div className=" mt-5 ">
                            <p>Actions</p>
                        </div>

                        <div className="flex items-center justify-between px-3 w-full h-20 bg-darkGreen mt-4 text-white rounded-3xl">
                            <div>
                                <p className="text-2xl font-bold">Buy a share</p>
                            </div>

                            <div>
                                <img className="w-20 rounded-xl" src={Investment} alt="Investment" />
                            </div>

                        </div>
                        <div className="flex items-center justify-between px-3 w-full h-20 bg-darkGreen mt-4 text-white rounded-3xl">
                            <div>
                                <p className="text-2xl font-bold">Check Analysis</p>
                            </div>

                            <div>
                                <img className="w-20 rounded-xl" src={Ananlysis} alt="Ananlysis" />
                            </div>

                        </div>
                        <div className="flex items-center justify-between px-3 w-full h-20 bg-darkGreen mt-4 text-white rounded-3xl">
                            <div>
                                <p className="text-2xl font-bold">Shares Information</p>
                            </div>

                            <div>
                                <img className="w-20 rounded-xl" src={Shares} alt="Shares" />
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default dashboard