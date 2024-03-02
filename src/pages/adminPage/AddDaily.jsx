import React from 'react'
import Menu from '../../components/menu'

const AddDaily = () => {
    return (
        <div>
            <div>

                <Menu PageName='Daily Analysis' />
            </div>

            <div className='mt-20'>
                <form action="#" className=" px-5 flex flex-col items-center justify-center">
                    <div className="flex flex-col border-b-2 border-overLay w-full mt-6  items-start text-lg mb-2 pt-2">

                        <p className="text-overLay font-semibold">Stock Market Percent</p>

                        <div className="flex">

                            <input type="number" id="oldnumber" className="bg-lightGray border-overLay   w-4/6  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay font-semibold">Stock market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay font-semibold">Forex  market Percent</p>

                        <div className="flex">

                            <input type="number" id="newnumber" className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay font-semibold">Forex  market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay font-semibold">Crypto market Percent</p>

                        <div className="flex">

                            <input type="number" id="newnumber" className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay font-semibold">Crypto market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay font-semibold">Analouge market Percent</p>

                        <div className="flex">

                            <input type="number" id="newnumber" className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>
                    <div className="flex flex-col border-b-2 border-overLay w-full  items-start text-lg mb-2">

                        <p className="text-overLay font-semibold">Analouge market Amount</p>

                        <div className="flex">

                            <input type="number" id="newnumber" className="bg-lightGray border-overLay w-full  focus:outline-none" />

                        </div>

                    </div>

                    <button className="bg-overLay font-medium p-2  text-white  w-full rounded-full">Update Analysis</button>
                </form>
            </div>
        </div>
    )
}

export default AddDaily