import Menu from "../components/menu"
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



const Contact = () => {
    return (
        <div>
            <Menu />
            <div className="mt-16 px-3">
                <div>
                    <p className="text-black text-lg font-semibold">
                        Hello there! Need help ? Message our Support team
                    </p>
                    <hr />
                </div>

                <div className="mt-10">
                    <div className="flex space-x-3 px-3">
                        <IoMdMail className="bg-white text-overLay text-2xl" />
                        <div className="bg-darkGray w-screen rounded-3xl pb-10 p-3 ">
                            <p className="text-lg font-semibold">
                                Contactwaxmo@gmail.com
                            </p>
                        </div>

                    </div>

                </div>
                <div className="mt-10">
                    <div className="flex space-x-3 px-3">
                        <FaFacebookSquare className="bg-white text-overLay text-2xl" />
                        <div className="bg-darkGray  w-screen  rounded-3xl pb-10 p-3 ">
                            <p className="text-lg font-semibold">
                                WaxMo
                            </p>
                        </div>

                    </div>

                </div>
                <div className="mt-10">
                    <div className="flex space-x-3 px-3">
                        <IoLogoWhatsapp className="bg-white text-overLay text-2xl" />
                        <div className="bg-darkGray w-screen rounded-3xl pb-10 p-3 ">
                            <p className="text-lg font-semibold">
                                +23412345678

                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact