import { FaUser } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import BackGround from "../assets/welcomePage-backgroundImage.jpg"


const loginPage = () => {
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

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('lol')

    }

    // 

    return (

        <div
            className=""


        >

            <div className="relative">
                <img className="" src={BackGround} alt="background" />
                <div className="bg-overLay absolute inset-0 opacity-50 w-screen h-36"></div>

            </div>

            <div className="bg-overLay bg-opacity-75 relative overflow-hidden bg-cover h-screen w-screen"></div>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            >



                <div className="bg-transparent  h-screen overflow-hidden flex items-center justify-center pt-20">
                    <div className="bg-white w-screen h-full shadow-3xl rounded-t-3xl">
                        <div className="flex flex-col items-center bg-lightGray shadow shadow-darkGray absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
                            <FaUser className="text-4xl text-overLay " />

                            <p className="font-bold">Login</p>
                        </div>
                        <form onSubmit={onSubmit} className="pt-10 p-10 flex flex-col">
                            <div className="flex flex-col border-b-2 border-overLay items-start justify-center  text-lg mb-2">

                                <p className="text-overLay text-sm font-semibold">Email</p>

                                <div className="flex  w-screen   ">

                                    <input type="email" id="email" className="bg-lightGray  w-5/6  focus:outline-none" />


                                </div>

                            </div>
                            <div className="flex flex-col border-b-2 border-overLay items-start justify-center  text-lg mb-2">

                                <p className="text-overLay text-sm font-semibold">Password</p>

                                <div className="flex  w-screen   ">

                                    <input type={see === true ? "text" : "password"} id="password" className="bg-lightGray border-overLay   py-2 focus:outline-none w-4/6  " />
                                    <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>

                                </div>

                            </div>


                            <div className="pb-5 flex  justify-end">
                                <Link to="/recoverpassword" className="text-sm">Forgotten Password ? </Link>
                            </div>
                            <Link to='/home/homepage' className="bg-overLay font-medium p-2 text-white text-center uppercase w-full rounded-full">Login</Link>

                            {/* the sign up function */}
                            <div className="flex flex-col items-end pt-2 mt-5 space-y-1 ">

                                <p className="text-sm">Dont't have an account ? </p>
                                <Link to="/signup" className="text-lg font-bold text-overLay">Sign Up</Link>

                            </div>
                        </form>


                    </div>
                </div>



            </div>
        </div >


    )
}

export default loginPage