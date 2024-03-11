
import Menu from '../../components/menu';
import { FaUser } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';

const UpdateMobileNO = () => {

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
            <Menu PageName='Update Phone' />

            <form action="/" className="pt-8 p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col border-b-2 border-overLay w-full mt-2 items-start text-lg mb-2 pt-2">

                    <p className="text-overLay text-sm font-semibold">Old Mobile Number</p>

                    <div className="flex w-full">

                        <input type="text" id="oldnumber" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay w-full mt-2  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay text-sm font-semibold">New Mobile Number</p>

                    <div className="flex w-full">

                        <input type="text" id="newnumber" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay w-full mt-2  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay text-sm font-semibold">Confirm Password</p>

                    <div className="flex w-full">

                        <input type={see === true ? "text" : "password"} id="password" className="bg-lightGray border-overLay w-5/6 focus:outline-none  " />
                        <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>
                    </div>
                </div>







                <button className="bg-overLay font-medium p-2 md:p-4 text-white uppercase w-full rounded-full">Update Mobile Number</button>
            </form>
        </div>
    )
}

export default UpdateMobileNO