import Menu from "../components/menu";
import Back from "../components/back"



const notifications = () => {

    return (
        <div className="bg-overLay w-full h-screen " >

            <div className="">
                <div className="p-2">

                    <Menu />




                </div>


            </div>



            <div className="flex items-start gap-2.5 p-2">
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-lightGray rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-overLay ">DEPOSIT SUCCESSFUL</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-overLay ">Your Investment has been made successful and you are now a WaxMo Investor</p>
                    <span className="text-sm font-normal text-overLay ">Today </span>
                </div>


            </div>
            <div className="flex items-start gap-2.5 p-2">
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-lightGray rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-overLay ">Dividend Payment</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-overLay ">Your Investment has been made successful and you are now a WaxMo Investor</p>
                    <span className="text-sm font-normal text-overLay ">Yesterday </span>
                </div>


            </div>




        </div>
    )
}

export default notifications