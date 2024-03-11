
import Menu from '../../components/menu';
import { FaUser } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpdateAccountDetails = () => {
    return (
        <div>
            <Menu PageName='Add Account' />

            <form action="/" className="pt-8 p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col border-b-2 border-overLay w-full mt-2  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay text-sm font-semibold">Account Name</p>

                    <div className="flex w-full ">

                        <input type="text" id="accountname" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay w-full mt-2  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay text-sm font-semibold">Account Number</p>

                    <div className="flex w-full">

                        <input type="text" id="accountnumber" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay w-full mt-2  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay text-sm font-semibold">Bank Name</p>

                    <div className="flex w-full">

                        <input type="text" id="bankname" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>

                <div className='p-2'>
                    <p className=' text-danger text-xs'> Note : Name must match with Bank details </p>
                </div>


                <button className="bg-overLay font-medium p-2 md:p-4 text-white uppercase w-full rounded-full">Update Bank Details</button>
            </form>
        </div>
    )
}

export default UpdateAccountDetails