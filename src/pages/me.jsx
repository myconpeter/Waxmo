import Menu from '../components/menu'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';



const me = () => {
    return (
        <div className='mt-8 p-2 '>
            <Menu PageName='Micheal Peter' />


            <div className='mt-8'>
                <Link to='/home/settings' className=' flex items-center justify-between h-16 w-full bg-darkGray rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Account Setting</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>
                <Link to='/home/updateaccountdetails' className=' flex items-center justify-between h-16 w-full bg-darkGray mt-4 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Add Bank Details</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>
                <div className='mt-6'>
                    <p className='text-black text-xl'>Links</p>
                </div>

                <Link to='/home/faq' className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Frequently Asked Questions</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>
                <Link to='/home/infomation' className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Information</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>

                <Link to='/home/contact' className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Contact Us</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>
                <Link to='/home/analysis' className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Analysis</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>
                <Link to='/home/about' className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>About Us</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>

                <Link to='/' className=' flex items-center justify-between h-16 w-full bg-danger  mt-8 mb-32 rounded-xl  p-3 '>
                    <p className='text-black font-semibold text-xl '>Logout</p>

                    <IoLogOut className='text-black' />


                </Link>
            </div>
        </div >
    )
}

export default me