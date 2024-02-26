
import Menu from '../../components/menu';
import { FaUser } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpdateName = () => {
    return (
        <div>
            <Menu PageName='Update Name' />

            <form action="#" className="pt-24 p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col items-start justify-center text-lg mb-6">

                    <p className="text-overLay font-semibold">First Name</p>

                    <div className="flex border-b-2 border-overLay">

                        <input type="text" id="username" className="bg-lightGray border-overLay pl-12 py-2 md:py-4  w-full  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col items-start justify-center text-lg mb-6">

                    <p className="text-overLay font-semibold">Last Name</p>

                    <div className="flex border-b-2 border-overLay">

                        <input type="text" id="username" className="bg-lightGray border-overLay pl-12 py-2 md:py-4  w-full  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col items-start text-lg mb-6 pt-5">

                    <p className="text-overLay font-semibold">Confirm Password</p>

                    <div className="flex border-b-2 border-overLay">

                        <input type="password" id="username" className="bg-lightGray border-overLay pl-12 py-2 md:py-4  w-full  focus:outline-none" />
                        <IoMdEye className="text-overLay" />
                    </div>

                </div>

                <div className='p-2'>
                    <p className=' text-danger'> Note : Name must match with Bank details </p>
                </div>


                <button className="bg-overLay font-medium p-2 md:p-4 text-white uppercase w-full rounded-full">Update Name</button>
            </form>
        </div>
    )
}

export default UpdateName