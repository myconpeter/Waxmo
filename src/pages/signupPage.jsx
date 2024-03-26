import { FaUserPlus } from "react-icons/fa";

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import BackGround from "../assets/welcomePage-backgroundImage.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";

const signupPage = () => {
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


        <div className="" >
            <div className="">
                <img className="" src={BackGround} alt="background" />
                <div className="bg-overLay absolute inset-0 opacity-50 w-screen h-36"></div>

            </div>



            <div className="absolute bottom-0 left-0 right-0 top-0    bg-fixed" >

                <div className="bg-transparent  h-screen overflow-hidden flex items-center justify-center pt-20">
                    <div className="bg-white w-screen h-full shadow-3xl rounded-t-3xl">
                        <div className="flex flex-col items-center bg-lightGray shadow  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
                            <FaUserPlus className="text-4xl text-overLay " />

                            <p className="font-bold">Sign Up</p>
                        </div>
                        <form action="/home/homepage" className="pt-5 p-10 flex flex-col">
                            <div className="flex flex-col border-b-2 border-overLay items-start justify-center  text-lg mb-2">

                                <p className="text-overLay text-sm font-semibold">First Name</p>

                                <div className="flex  w-screen   ">

                                    <input type="text" id="firstname" className="bg-lightGray  w-5/6  focus:outline-none" />


                                </div>

                            </div>
                            <div className="flex flex-col border-b-2 border-overLay items-start justify-center text-lg mb-2">

                                <p className="text-overLay text-sm font-semibold">Last Name</p>

                                <div className="flex  w-screen  ">

                                    <input type="text" id="lastname" className="bg-lightGray  w-5/6  focus:outline-none" />

                                </div>

                            </div>
                            <div className="flex flex-col  border-b-2 border-overLay items-start justify-center text-lg mb-2">

                                <p className="text-overLay text-sm font-semibold">Phone Number</p>

                                <div className="flex  w-screen  ">

                                    <input type="text" id="phonenumber" className="bg-lightGray w-5/6 focus:outline-none" />

                                </div>

                            </div>
                            <div className="flex flex-col border-b-2 border-overLay items-start justify-center text-lg mb-2">

                                <p className="text-overLay text-sm font-semibold">Email</p>

                                <div className="flex w-screen ">

                                    <input type="email" id="email" className="bg-lightGray w-5/6  focus:outline-none" />

                                </div>

                            </div>
                            <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2 pt-2">

                                <p className="text-overLay text-sm font-semibold">Password</p>

                                <div className="flex w-screen ">

                                    <input type={see === true ? "text" : "password"} id="password" className="bg-lightGray border-overLay w-4/6 focus:outline-none  " />
                                    <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>
                                </div>

                            </div>
                            <div className="flex flex-col  border-b-2 border-overLay w-full items-start text-lg mb-2 pt-2">

                                <p className="text-overLay text-sm font-semibold">Confirm Password</p>

                                <div className="flex w-screen ">

                                    <input type={see === true ? "text" : "password"} id="confirmpassword" className="bg-lightGray border-overLay w-4/6 focus:outline-none  " />
                                    <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>
                                </div>

                            </div>

                            <div>
                                <input type="checkbox" required={true} name="checkbox" id="" className="text-overLay bg-overLay" />

                                <Link to='/termandcondition' aria-required className="mx-2 text-sm text- ">Terms and Conditions</Link>
                            </div>


                            <button className="bg-overLay font-medium p-2  text-white uppercase w-full rounded-full">Sign Up</button>

                            <div className="flex flex-col px-4 mt-4  items-end  space-y-1 ">

                                <p className="text-sm">Already have an account ? </p>
                                <Link to="/login" className="text-lg font-bold text-overLay">Login</Link>

                            </div>
                        </form>


                    </div>
                </div>




            </div>
        </div >

    )
}

export default signupPage