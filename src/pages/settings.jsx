import { useState } from 'react';
import Menu from '../components/menu'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";




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
        <div className='bg-white w-full h-screen p-2 pt-20'>
            <Menu />

            <div className=''>
                <div>

                    <div className=' flex items-center justify-between h-12 w-full bg-darkGray rounded-xl p-3 '>
                        <p className='text-overLay font-semibold text-xl '>Update Name</p>

                        <IoIosArrowDroprightCircle className='text-overLay' />


                    </div>
                </div>

                {/* <div className='h-36 mt-2  bg-darkGray rounded-3xl'>

                </div> */}
                <div className=' flex items-center justify-between  h-12 w-full bg-darkGray mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Update Password</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
                <div className=' flex items-center justify-between  h-12 w-full bg-darkGray  mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Update Moblile Number</p>

                    <IoIosArrowDroprightCircle className='text-overLay' />



                </div>
                <div className=' flex items-center justify-between  h-12 w-full bg-darkGray  mt-2 rounded-xl  p-3 '>
                    <p className='text-overLay font-semibold text-xl '>Update Account Details</p>
                    <IoIosArrowDroprightCircle className='text-overLay' />


                </div>
            </div>
        </div>
    )
}


export default settings