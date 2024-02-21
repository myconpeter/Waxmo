import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";


const homeLayout = () => {
    return (
        <div>
            <nav class="relative bg-brightYellow w-full">


                <div class="flex item-center justify-between">





                    <div className="fixed z-50 w-fit h-16 max-w-lg -translate-x-1/2  rounded-lg bottom-0 left-1/2">
                        <div className="flex w-screen">
                            <div className=" flex flex-col flex-1 items-center justify-center " >
                                <IoHome className="" />
                                <p className="text-center text-xs">Home</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <FaBell />
                                <p className="text-center text-xs">notifications</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <MdDashboard />
                                <p className="text-center text-xs">Dashboard</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <IoSettingsSharp />
                                <p className="text-center text-xs">settings</p>
                            </div>
                            <div className=" flex flex-col flex-1 items-center justify-center" >

                                <FaUser />
                                <p className="text-center text-xs" >Me</p>

                            </div>


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default homeLayout