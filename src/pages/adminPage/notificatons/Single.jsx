
import Menu from "../../../components/menu";

const Single = () => {
    return (
        <div>
            <Menu PageName='Single Notification' />

            <form action="#" className="pt-24 p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col border-b-2 border-overLay w-full mt-6  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay font-semibold">User`s Email</p>

                    <div className="flex w-full ">

                        <input type="email" id="useremail" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay w-full mt-6  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay font-semibold">Message title</p>

                    <div className="flex w-full ">

                        <input type="text" id="messagetitle" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>
                <div className="flex flex-col border-b-2 border-overLay w-full mt-6  items-start text-lg mb-2 pt-2">

                    <p className="text-overLay font-semibold">Message</p>

                    <div className="flex w-full">

                        <textarea type="text" id="accountnumber" className="bg-lightGray border-overLay py-2  w-5/6  focus:outline-none" />

                    </div>

                </div>




                <button className="bg-overLay font-medium p-2 text-white uppercase w-full rounded-full">Send Message</button>
            </form>
        </div>
    )
}

export default Single