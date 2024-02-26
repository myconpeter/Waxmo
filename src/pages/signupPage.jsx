import { FaUserPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const signupPage = () => {
    return (


        <div
            className=" bg-black bg-opacity-100 relative overflow-hidden bg-cover bg-no-repeat text-center bg-welcome-page-background h-screen "


        >

            <div className="bg-overLay bg-opacity-75 relative overflow-hidden bg-cover h-screen w-screen"></div>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            >

                <div className="bg-transparent  h-screen overflow-hidden flex items-center justify-center pt-20">
                    <div className="bg-white w-screen h-full shadow-3xl rounded-t-3xl">
                        <div className="flex flex-col items-center bg-lightGray shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
                            <FaUserPlus className="text-4xl text-overLay " />

                            <p className="font-bold">Sign Up</p>
                        </div>
                        <form action="/home/homepage" className="pt-6 p-10 flex flex-col items-center justify-center">
                            <div className="flex flex-col items-start justify-center text-lg mb-2">

                                <p className="text-overLay font-semibold">First Name</p>

                                <div className="flex border-b-2 border-overLay">

                                    <input type="text" id="username" className="bg-lightGray border-overLay pl-12   w-full  focus:outline-none" />
                                    <FaCheck className="text-overLay" />
                                </div>

                            </div>
                            <div className="flex flex-col items-start justify-center text-lg mb-2">

                                <p className="text-overLay font-semibold">Last Name</p>

                                <div className="flex border-b-2 border-overLay">

                                    <input type="text" id="username" className="bg-lightGray border-overLay pl-12  w-full  focus:outline-none" />
                                    <FaCheck className="text-overLay" />
                                </div>

                            </div>
                            <div className="flex flex-col items-start justify-center text-lg mb-2">

                                <p className="text-overLay font-semibold">Phone Number</p>

                                <div className="flex border-b-2 border-overLay">

                                    <input type="text" id="username" className="bg-lightGray border-overLay pl-12   w-full  focus:outline-none" />
                                    <FaCheck className="text-overLay" />
                                </div>

                            </div>
                            <div className="flex flex-col items-start justify-center text-lg mb-2">

                                <p className="text-overLay font-semibold">Email</p>

                                <div className="flex border-b-2 border-overLay">

                                    <input type="email" id="username" className="bg-lightGray border-overLay pl-12   w-full  focus:outline-none" />
                                    <FaCheck className="text-overLay" />
                                </div>

                            </div>
                            <div className="flex flex-col items-start text-lg mb-2 pt-2">

                                <p className="text-overLay font-semibold">Password</p>

                                <div className="flex border-b-2 border-overLay">

                                    <input type="password" id="username" className="bg-lightGray border-overLay pl-12  w-full  focus:outline-none" />
                                    <IoMdEye className="text-overLay" />
                                </div>

                            </div>
                            <div className="flex flex-col items-start text-lg mb-2 pt-2">

                                <p className="text-overLay font-semibold">Confirm Password</p>

                                <div className="flex border-b-2 border-overLay">

                                    <input type="password" id="username" className="bg-lightGray border-overLay pl-12   w-full  focus:outline-none" />
                                    <IoMdEye className="text-overLay" />
                                </div>

                            </div>


                            <button className="bg-overLay font-medium p-2  text-white uppercase w-full rounded-full">Sign Up</button>
                        </form>

                        <div className="flex flex-col px-4 items-end  space-y-2 ">

                            <p>Already have an account ? </p>
                            <Link to="/login" className="text-3xl font-bold text-overLay">Login</Link>

                        </div>
                    </div>
                </div>




            </div>
        </div >

    )
}

export default signupPage