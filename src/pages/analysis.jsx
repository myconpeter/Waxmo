import Menu from '../components/menu'





const Analysis = () => {
    return (
        <div className='bg-white'>
            <Menu PageName='Daily Analysis' />

            <div className='mt-16'>

            </div>

            <div className='m-2'>
                <div className="relative overflow-x-auto w-full">
                    <table className="w-5/6">
                        < tbody className="text-sm text-black  bg-darkGray">
                            <tr>

                                {daily.map((day) => (

                                    <th scope="col" className="px-4 py-3 rounded-full text-center" key={day.id}>

                                        <div className=''>

                                            <p>Day</p>
                                            <p className='text-2xl'>{day.dayNumber}</p>
                                        </div>



                                    </th>




                                ))}

                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            <div className='flex justify-evenly'>
                <div className='flex flex-col space-y-4  justify-evenly mt-10'>

                    <div className=' h-72 w-36 bg-darkGreen rounded-lg'>
                        <div className='p-2 border-b-2 border-darkGray'>
                            <p className='text-center text-white font-semibold'>Stock Exchange Market</p>
                        </div>

                        <div className='flex flex-col mt-5  '>
                            <p className='text-4xl text-center text-white'>0.00%</p>
                            <p className='text-3xl text-center pt-4 text-white'>₦300</p>
                        </div>
                    </div>
                    <div className='h-60 w-36 bg-darkGray rounded-lg'>
                        <div className='p-2 border-b-2 border-lightGray'>
                            <p className='text-center text-white font-semibold'>Crypto Currency</p>
                        </div>

                        <div className='flex flex-col mt-5  '>
                            <p className='text-4xl text-center text-white'>0.00%</p>
                            <p className='text-3xl text-center pt-4 text-white'>₦300</p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col space-y-4  justify-evenly mt-10'>

                    <div className='h-60 w-36 bg-darkGreen rounded-lg'>
                        <div className='p-2 border-b-2 border-darkGray'>
                            <p className='text-center text-white font-semibold'>Foreign Exchange </p>
                        </div>

                        <div className='flex flex-col mt-5  '>
                            <p className='text-4xl text-center text-white'>0.00%</p>
                            <p className='text-3xl text-center pt-4 text-white'>₦300</p>
                        </div>
                    </div>
                    <div className='h-72 w-36 bg-darkGray rounded-lg'>
                        <div className='p-2 border-b-2 border-lightGray'>
                            <p className='text-center text-white font-semibold'>Adverts</p>
                        </div>

                        <div className='flex flex-col mt-5  '>
                            <p className='text-4xl text-center text-white'>0.00%</p>
                            <p className='text-3xl text-center pt-4 text-white'>₦300</p>
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

export default Analysis