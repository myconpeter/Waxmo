
import Menu from '../../components/menu';
import { FaUser } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';

const UpdatePassword = () => {

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
        <div>
            <Menu PageName='Update Password' />

            <form action="/" className="pt-12 p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col items-start justify-center text-lg mb-6">

                    <p className="text-overLay text-sm font-semibold">Old Password</p>

                    <div className="flex border-b-2 border-overLay">

                        <input type={see === true ? "text" : "password"} id="oldpassword" className="bg-lightGray border-overLay py-2 w-full  focus:outline-none" />
                        <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>

                    </div>

                </div>
                <div className="flex flex-col items-start justify-center text-lg mb-6">

                    <p className="text-overLay text-sm font-semibold">New Password</p>

                    <div className="flex border-b-2 border-overLay">

                        <input type={see === true ? "text" : "password"} id="newpassword" className="bg-lightGray border-overLay  py-2 md:py-4  w-full  focus:outline-none" />
                        <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>

                    </div>

                </div>
                <div className="flex flex-col items-start justify-center text-lg mb-6">

                    <p className="text-overLay text-sm font-semibold">Confirm New Password</p>

                    <div className="flex border-b-2 border-overLay">

                        <input type={see === true ? "text" : "password"} id="confirmpassword" className="bg-lightGray border-overLay  py-2 md:py-4  w-full  focus:outline-none" />
                        <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>

                    </div>

                </div>




                <button className="bg-overLay font-medium p-2 md:p-4 text-white uppercase w-full rounded-full">Update Password</button>
            </form>
        </div>
    )
}

export default UpdatePassword