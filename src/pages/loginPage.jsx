import { FaUser } from "react-icons/fa6";

const loginPage = () => {
    return (
        <div className="bg-transparent  h-screen overflow-hidden flex items-center justify-center pt-20">
            <div className="bg-white w-screen h-full shadow-3xl rounded-lg">
                <div className="flex flex-col items-center bg-lightGray shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
                    <FaUser className="text-4xl" />

                    <p className="font-bold">Login</p>
                </div>
                <form className="p-12 md:p-24">
                    <div className="flex items-center text-lg mb-6">

                        <input type="text" id="username" className="bg-lightGray rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" />
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">

                        <input type="password" id="password" className="bg-lightGray rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
                    </div>
                    <button className="bg-overLay font-medium p-2 md:p-4 text-white uppercase w-full rounded">Login</button>
                </form>
            </div>
        </div>

    )
}

export default loginPage