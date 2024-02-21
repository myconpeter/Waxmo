import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Outlet } from "react-router-dom";


const homeLayout = () => {
    return (
        <div>

            <nav class="relative bg-brightYellow w-full">


                <div class="flex item-center justify-between">





                    <div className="fixed z-50 w-fit h-16 max-w-lg -translate-x-1/2  rounded-t-full p-2 bottom-0 left-1/2 bg-lightGray">
                        <div className="flex w-screen">
                            <div className=" flex flex-col flex-1 items-center justify-center  " >
                                <IoHome className="text-overLay text-lg" />
                                <p className="text-center text-xs text-overLay">Home</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <FaBell className="text-overLay text-lg" />
                                <p className="text-center text-xs text-overLay">notifications</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <MdDashboard className="text-overLay text-lg" />
                                <p className="text-center text-xs text-overLay">Dashboard</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <IoSettingsSharp className="text-overLay text-lg" />
                                <p className="text-center text-xs text-overLay">settings</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <FaUser className="text-overLay text-lg" />
                                <p className="text-center text-xs text-overLay" >Me</p>

                            </div>


                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />

        </div>
    )
}

export default homeLayout