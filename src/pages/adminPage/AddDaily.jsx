import { useState, useEffect } from 'react'
import Menu from '../../components/menu'

const AddDaily = () => {
    const [selected, setSelected] = useState(active)


    const toggle = (i) => {

        if (selected === i) {
            return setSelected(i)
        }
        setSelected(i)
    }

    let sel = selected
    return (
        <div>
            <div>

                <Menu PageName='Add /Edit Analysis' />
            </div>

            <div className='mt-10'>
                <div className='m-2'>
                    <div className="relative overflow-x-auto w-full">
                        <div className="w-5/6 ">
                            < div className="text-sm text-black ">
                                <div className='flex flex-row'>
                                    {daily.map((day) => (
                                        <div scope="col" className={selected === day ? "px-4 py-3 rounded-full text-center bg-overLay mx-1" : "px-4 py-3 rounded-full text-center bg-darkGray  mx-1"} key={day.id}>
                                            <div onClick={() => toggle(day)} className=''>
                                                <p className='text-sm'>Day</p>
                                                <p className='text-sm'>{day.dayNumber}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <form action="#" className=" px-5 flex flex-col items-center justify-center">
                    <div className="flex flex-col border-b-2 border-overLay w-full mt-6  items-start text-lg mb-2 pt-2">

                        <p className="text-overLay text-sm font-semibold">Stock Market Percent</p>

                        <div className="flex">

                            <input type="number" id="oldnumber" value={sel.stockPercent} className="bg-lightGray border-overLay   w-4/6  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay text-sm font-semibold">Stock market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" value={sel.stockAmount} className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay text-sm font-semibold">Forex  market Percent</p>

                        <div className="flex">

                            <input type="number" id="newnumber" value={sel.forexPercent} className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay text-sm font-semibold">Forex  market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" value={sel.forexAmount} className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay text-sm font-semibold">Crypto market Percent</p>

                        <div className="flex">

                            <input type="number" id="newnumber" value={sel.cryptoPercent} className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay text-sm font-semibold">Crypto market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" value={sel.cryptoAmount} className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay text-sm font-semibold">Analouge market Percent</p>

                        <div className="flex">

                            <input type="number" id="newnumber" value={sel.adsPercent} className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay text-sm font-semibold">Analouge market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" value={sel.adsAmount} className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>

                    <button className="bg-overLay font-medium p-2  text-white  w-full rounded-full">Update Analysis</button>
                </form>
            </div>
        </div>
    )
}

const daily = [
    {
        id: 1,
        dayNumber: 1,
        stockPercent: 0.001,
        stockAmount: 300,
        forexPercent: 0.001,
        forexAmount: 300,
        cryptoPercent: 0.001,
        cryptoAmount: 300,
        adsPercent: 0.001,
        adsAmount: 100
    },
    {
        id: 2,
        dayNumber: 2,
        stockPercent: 0,
        stockAmount: 0,
        forexPercent: 0,
        forexAmount: 0,
        cryptoPercent: 0,
        cryptoAmount: 0,
        adsPercent: 0,
        adsAmount: 0
    },
    {
        id: 3,
        dayNumber: 3,
        stockPercent: 0,
        stockAmount: 0,
        forexPercent: 0,
        forexAmount: 0,
        cryptoPercent: 0,
        cryptoAmount: 0,
        adsPercent: 0,
        adsAmount: 100
    },
    {
        id: 4,
        dayNumber: 4,
        stockPercent: 0,
        stockAmount: 0,
        forexPercent: 0,
        forexAmount: 0,
        cryptoPercent: 0,
        cryptoAmount: 0,
        adsPercent: 0,
        adsAmount: 0
    },
    {
        id: 5,
        dayNumber: 5,
        stockPercent: 0,
        stockAmount: 0,
        forexPercent: 0,
        forexAmount: 0,
        cryptoPercent: 0,
        cryptoAmount: 0,
        adsPercent: 0,
        adsAmount: 0
    },
    {
        id: 5,
        dayNumber: 5,
        stockPercent: 0,
        stockAmount: 0,
        forexPercent: 0,
        forexAmount: 0,
        cryptoPercent: 0,
        cryptoAmount: 0,
        adsPercent: 0,
        adsAmount: 0
    },
    {
        id: 4,
        dayNumber: 4,
        stockPercent: 0,
        stockAmount: 0,
        forexPercent: 0,
        forexAmount: 0,
        cryptoPercent: 0,
        cryptoAmount: 0,
        adsPercent: 0,
        adsAmount: 0
    },
    {
        id: 4,
        dayNumber: 4,
        stockPercent: 0,
        stockAmount: 0,
        forexPercent: 0,
        forexAmount: 0,
        cryptoPercent: 0,
        cryptoAmount: 0,
        adsPercent: 0,
        adsAmount: 0
    }
]


const active = [
    {
        id: 1,
        dayNumber: 1,
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



export default AddDaily