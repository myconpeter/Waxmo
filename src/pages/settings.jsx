import Menu from '../components/menu'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const settings = () => {
    return (
        <div className='bg-white w-full h-screen p-2'>
            <Menu />

            <div className='mt-8'>
                <div className=' flex items-center justify-between h-16 w-full bg-darkGray rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Update Password</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
                <div className=' flex items-center justify-between h-16 w-full bg-darkGray mt-8 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Update Password</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
                <div className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-8 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Update Password</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
                <div className=' flex items-center justify-between h-16 w-full bg-darkGray  mt-8 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Update Password</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
            </div>
        </div>
    )
}

export default settings