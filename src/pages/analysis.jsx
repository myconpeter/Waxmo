import { useState, useEffect } from 'react'
import Menu from '../components/menu'

// img
import Crypto from '../assets/crypto.jpg'
import Foreign from '../assets/foreign.jpg'
import Stock from '../assets/stock.jpg'
import Analouge from '../assets/analouge.jpg'



const Analysis = () => {





    const [selected, setSelected] = useState(active)

    console.log(active.stockPercent
    )


    const toggle = (i) => {

        if (selected === i) {
            return setSelected(i)
        }
        setSelected(i)
    }

    let sel = selected













    return (
        <div className='bg-white'>
            <Menu PageName='Daily Analysis' />

            <div className='mt-10'>

            </div>

            <div className='m-2'>
                <div className="relative overflow-x-auto w-full">
                    <div className="w-5/6 ">
                        < div className="text-sm text-black ">
                            <div className='flex flex-row'>
                                {daily.map((day) => (
                                    <div scope="col" className={selected === day ? "px-4 py-3 rounded-full text-center bg-overLay mx-1" : "px-4 py-3 rounded-full text-center bg-darkGray  mx-1"} key={day.id}>
                                        <div onClick={() => toggle(day)} className=''>
                                            <p className='text-sm'>Day</p>
                                            <p className='text-xl'>{day.dayNumber}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex justify-evenly'>
                <div className='flex flex-col space-y-4  justify-evenly '>


                    <div className='h-72 w-36 bg-darkGray rounded-lg'>
                        <div className='absolute' >
                            <img src={Stock} className='h-72 w-36 rounded-lg' alt="" />
                        </div>
                        <div className='relative p-2 border-b-2 border-lightGray'>
                            <p className='text-center text-white font-semibold'>Stock Market</p>
                        </div>

                        <div className='relative flex flex-col mt-5  '>
                            <p className='text-xl text-center text-white'>{sel.stockPercent}</p>
                            <p className='text-xl text-center pt-4 text-white'>{sel.stockAmount}</p>
                        </div>
                    </div>
                    <div className='h-60 w-36 bg-darkGray rounded-lg'>
                        <div className='absolute' >
                            <img src={Crypto} className='h-60 w-36 rounded-lg' alt="" />
                        </div>
                        <div className='relative p-2 border-b-2 border-lightGray'>
                            <p className='text-center text-white font-semibold'>Crypto Market</p>
                        </div>

                        <div className='relative flex flex-col mt-5  '>
                            <p className='text-xl text-center text-white'>{sel.cryptoPercent}</p>
                            <p className='text-xl text-center pt-4 text-white'>{sel.cryptoAmount}</p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col space-y-4  justify-evenly'>

                    <div className='h-60 w-36 bg-darkGray rounded-lg'>
                        <div className='absolute' >
                            <img src={Foreign} className='h-60 w-36 rounded-lg' alt="" />
                        </div>
                        <div className='relative p-2 border-b-2 border-lightGray'>
                            <p className='text-center text-black font-semibold'>Forex Market</p>
                        </div>

                        <div className='relative flex flex-col mt-5  '>
                            <p className='text-xl text-center text-black'>{sel.cryptoPercent}</p>
                            <p className='text-xl text-center pt-4 text-black'>{sel.cryptoAmount}</p>
                        </div>
                    </div>
                    <div className='h-72 w-36 bg-darkGray rounded-lg'>
                        <div className='absolute' >
                            <img src={Analouge} className='h-72 w-36 rounded-lg' alt="" />
                        </div>
                        <div className='relative p-2 border-b-2 border-lightGray'>
                            <p className='text-center text-white font-semibold'>Analog Market</p>
                        </div>

                        <div className='relative flex flex-col mt-5  '>
                            <p className='text-xl text-center text-white'>{sel.cryptoPercent}</p>
                            <p className='text-xl text-center pt-4 text-white'>{sel.cryptoAmount}</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='pb-20'>

            </div>





        </div>
    )

}

const daily = [
    {
        id: 1,
        dayNumber: 1,
        stockPercent: '0.00%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 2,
        dayNumber: 2,
        stockPercent: '0.01%',
        stockAmount: 300,
        forexPercent: '0.01%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 3,
        dayNumber: 3,
        stockPercent: '0.03%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 4,
        dayNumber: 4,
        stockPercent: '0.04%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 5,
        dayNumber: 5,
        stockPercent: '0.05%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 6,
        dayNumber: 6,
        stockPercent: '0.06%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 7,
        dayNumber: 7,
        stockPercent: '0.07%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 8,
        dayNumber: 8,
        stockPercent: '0.08%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 9,
        dayNumber: 9,
        stockPercent: '0.09%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 10,
        dayNumber: 10,
        stockPercent: '0.10%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    },
    {
        id: 11,
        dayNumber: 11,
        stockPercent: '0.11%',
        stockAmount: 300,
        forexPercent: '0.00%',
        forexAmount: 300,
        cryptoPercent: '0.00%',
        cryptoAmount: 300,
        adsPercent: '0.00%',
        adsAmount: 100
    }
]

const active =
{
    id: 1,
    dayNumber: 5,
    stockPercent: '0.11%',
    stockAmount: 300,
    forexPercent: '0.00%',
    forexAmount: 300,
    cryptoPercent: '0.00%',
    cryptoAmount: 300,
    adsPercent: '0.00%',
    adsAmount: 100
}





export default Analysis