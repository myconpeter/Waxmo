import { useState } from 'react';
import Menu from '../components/menu'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from 'react-router-dom';




// const toggle = (i) => {


//     if (selected === false) {
//         return setSelected(null)

//     }

//     setSelected(i)
// }





const settings = () => {
    // const [selected, setSelected] = useState(false)



    // const toggle = (i) => {
    //     console.log(i)

    //     if (i === false) {
    //         console.log('yes')
    //         setSelected(true)
    //         i = true
    //         console.log(i)
    //     } else {
    //         setSelected(false)
    //     }




    return (
        <div className='bg-white w-full h-screen p-2 pt-12'>
            <Menu PageName='Settings' />

            <div className=''>
                <Link to='/home/updatename' >

                    <div className=' flex items-center justify-between h-8 w-full bg-darkGray rounded-md p-3 '>
                        <p className='text-overLay font-semibold text-sm'>Update Name</p>

                        <IoIosArrowDroprightCircle className='text-overLay' />


                    </div>
                </Link>

                {/* <div className='h-36 mt-2  bg-darkGray rounded-3xl'>

                </div> */}
                <Link to='/home/updatepassword' className=' flex items-center justify-between  h-8 w-full bg-darkGray mt-1 rounded-md p-3 '>
                    <p className='text-overLay font-semibold text-sm '>Update Password</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>
                <Link to='/home/updatemobileno' className=' flex items-center justify-between  h-8 w-full bg-darkGray  mt-1 rounded-md  p-3 '>
                    <p className='text-overLay font-semibold text-sm '>Update Moblile Number</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />
                </Link>
                <Link to='/home/updateaccountdetails' className=' flex items-center justify-between  h-8 w-full bg-darkGray  mt-1 rounded-md p-3 '>
                    <p className='text-overLay font-semibold text-sm '>Update Account Details</p>
                    <IoIosArrowDroprightCircle className='text-overLay' />


                </Link>
            </div>
        </div>
    )
}


export default settings