import { FaKey } from "react-icons/fa";


import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import BackGround from "../assets/welcomePage-backgroundImage.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";

const RecoverPassword = () => {
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

    return (


        <div
            className=""


        >
            <div className="relative">
                <img className="" src={BackGround} alt="background" />
                <div className="bg-overLay absolute inset-0 opacity-50 w-screen h-36"></div>

            </div>



            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            >

                <div className="bg-transparent  h-screen overflow-hidden flex items-center justify-center pt-20">
                    <div className="bg-white w-screen h-full shadow-3xl rounded-t-3xl">
                        <div className="flex flex-col items-center bg-lightGray shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
                            <FaKey className="text-4xl text-overLay " />

                            <p className="font-bold">Recover Password</p>
                        </div>
                        <form action="/home/homepage" className="pt-10 p-10 flex flex-col">




                            <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2 pt-2">

                                <p className="text-overLay font-semibold">Password</p>

                                <div className="flex w-screen ">

                                    <input type={see === true ? "text" : "password"} id="password" className="bg-lightGray border-overLay w-4/6 focus:outline-none  " />
                                    <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>
                                </div>

                            </div>
                            <div className="flex flex-col  border-b-2 border-overLay w-full items-start text-lg mb-8 pt-2">

                                <p className="text-overLay font-semibold">Confirm Password</p>

                                <div className="flex w-screen ">

                                    <input type={see === true ? "text" : "password"} id="confirmpassword" className="bg-lightGray border-overLay w-4/6 focus:outline-none  " />
                                    <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>
                                </div>

                            </div>


                            <button className="bg-overLay font-medium p-2  text-white uppercase w-full rounded-full">Change Password</button>
                        </form>


                    </div>
                </div>




            </div>
        </div >

    )
}

export default RecoverPassword