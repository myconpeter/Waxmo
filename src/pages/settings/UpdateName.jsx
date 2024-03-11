
import Menu from '../../components/menu';
import { FaUser } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';

const UpdateName = () => {

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
            <Menu PageName='Update Name' />

            <form action="#" className="pt-12 p-10 flex flex-col">
                <div className="flex flex-col border-b-2 border-overLay items-start justify-center  text-lg mb-2">

                    <p className="text-overLay text-sm font-semibold">First Name</p>

                    <div className="flex w-full">

                        <input type="text" id="firstname" className="bg-lightGray  w-5/6  focus:outline-none" />


                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay items-start justify-center  text-lg mb-2">

                    <p className="text-overLay text-sm font-semibold">Last Name</p>

                    <div className="flex w-full">

                        <input type="text" id="lastname" className="bg-lightGray  w-5/6  focus:outline-none" />


                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay w-full   items-start text-lg  pt-2">

                    <p className="text-overLay text-sm font-semibold">Password</p>

                    <div className="flex w-full">

                        <input type={see === true ? "text" : "password"} id="password" className="bg-lightGray border-overLay w-5/6 focus:outline-none  " />
                        <button onClick={toggle}>{see === true ? <IoMdEye className="text-overLay" /> : <IoMdEyeOff className="text-overLay" />}</button>
                    </div>

                </div>

                <div className='p-2'>
                    <p className=' text-danger text-xs'> Note : Name must match with Bank details </p>
                </div>


                <button className="bg-overLay font-medium p-2 text-sm text-white uppercase w-full rounded-full">Update Name</button>
            </form>
        </div>
    )
}

export default UpdateName