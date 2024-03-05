import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const homeLayout = () => {
    return (
        <div className="mb-20">


            <nav className="relative">


                <div className="flex item-center justify-between">





                    <div className="fixed z-50 w-fit h-16 max-w-screen  -translate-x-1/2  rounded-t-full p-2 bottom-0 left-1/2 bg-lightGray">
                        <div className="flex w-screen">
                            <div className=" flex flex-col flex-1 items-center justify-center  " >
                                <NavLink to="/home/homepage" className={({ isActive }) =>
                                    isActive ? " p-2 text-black flex flex-col items-center" : "p-2 text-overLay flex flex-col items-center"}>
                                    <IoHome />
                                    <p className="text-black">Home</p>
                                </NavLink>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center  " >
                                <NavLink to="/home/notifications" className={({ isActive }) =>
                                    isActive ? " p-2 text-black flex flex-col items-center" : "p-2 text-overLay flex flex-col items-center"}>
                                    <span class="relative flex h-2 w-2 ml-2">

                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-danger"></span>
                                    </span>
                                    <FaBell />

                                    <p className="text-black">Notification</p>

                                </NavLink>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center  " >
                                <NavLink to="/home/dashboard" className={({ isActive }) =>
                                    isActive ? " p-2 text-black flex flex-col items-center" : "p-2 text-overLay flex flex-col items-center"}>
                                    <MdDashboard />

                                    <p className="text-black">Dashboard</p>
                                </NavLink>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center  " >
                                <NavLink to="/home/settings" className={({ isActive }) =>
                                    isActive ? " p-2 text-black flex flex-col items-center" : "p-2 text-overLay flex flex-col items-center"}>
                                    <IoSettingsSharp />

                                    <p className="text-black">Settings</p>
                                </NavLink>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center  " >
                                <NavLink to="/home/me" className={({ isActive }) =>
                                    isActive ? " p-2 text-black flex flex-col items-center" : "p-2 text-overLay flex flex-col items-center"}>
                                    <FaUser />

                                    <p className="text-black">Me</p>
                                </NavLink>
                            </div>





                        </div>
                    </div>
                </div>
            </nav >



            <Outlet />


        </div >
    )
}

export default homeLayout