import Menu from '../components/menu'
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { FcLineChart } from "react-icons/fc";




const Analysis = () => {
    return (
        <div className='bg-white w-full h-screen p-2'>
            <Menu PageName='Daily Analysis' />

            <div className='mt-16'>

            </div>

            <div className='m-2 flex justify-between outline-2'>

                <div className='h-fit w-fit bg-darkGray p-2 rounded-3xl flex flex-col items-center'>
                    <p>Day</p>
                    <p className='text-2xl'>5</p>
                </div>
                <div className='h-fit w-fit bg-darkGray p-2 rounded-3xl flex flex-col items-center'>
                    <p>Day</p>
                    <p className='text-2xl'>6</p>
                </div>
                <div className='h-fit w-fit bg-darkGray p-2 rounded-3xl flex flex-col items-center'>
                    <p>Day</p>
                    <p className='text-2xl'>7</p>
                </div>
                <div className='h-fit w-fit bg-overLay p-2 rounded-3xl flex flex-col items-center'>
                    <p>Day</p>
                    <p className='text-2xl'>8</p>
                </div>
                <div className='h-fit w-fit bg-darkGray p-2 rounded-3xl flex flex-col items-center'>
                    <p>Day</p>
                    <p className='text-2xl'>9</p>
                </div>
                <div className='h-fit w-fit bg-darkGray p-2 rounded-3xl flex flex-col items-center'>
                    <p>Day</p>
                    <p className='text-2xl'>10</p>
                </div>
                <div className='h-fit w-fit bg-darkGray p-2 rounded-3xl flex flex-col items-center'>
                    <p>Day</p>
                    <p className='text-2xl'>11</p>
                </div>


            </div>

            <div className='flex justify-evenly'>
                <div className='flex flex-col space-y-4  justify-evenly mt-10'>

                    <div className=' h-72 w-36 bg-darkGreen rounded-lg'>
                    </div>
                    <div className='h-60 w-36 bg-darkGray rounded-lg'>
                    </div>

                </div>

                <div className='flex flex-col space-y-4  justify-evenly mt-10'>

                    <div className='h-60 w-36 bg-darkGreen rounded-lg'>
                    </div>
                    <div className='h-72 w-36 bg-darkGray rounded-lg'>
                    </div>

                </div>

            </div>

            <div className='pb-20'>

            </div>





        </div>
    )

}

export default Analysis