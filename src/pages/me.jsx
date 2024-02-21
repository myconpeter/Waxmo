import Menu from '../components/menu'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";



const me = () => {
    return (
        <div className='bg-white w-full h-screen p-2'>
            <Menu />

            <div className='mt-8'>
                <div className=' flex items-center justify-between h-16 w-full bg-darkGray rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Account Setting</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
                <div className=' flex items-center justify-between h-16 w-full bg-darkGray mt-8 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Add Bank Details</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
                <div className='mt-6'>
                    <p className='text-black text-xl'>Links</p>
                </div>

                <div className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-8 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Frequently Asked Questions</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
                <div className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-8 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Information</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>

                <div className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-8 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Contact Us</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>

                <div className=' flex items-center justify-between h-16 w-full bg-danger  mt-16 rounded-xl  p-3 '>
                    <p className='text-black font-semibold text-xl '>Logout</p>

                    <IoLogOut className='text-black' />


                </div>
            </div>
        </div>
    )
}

export default me