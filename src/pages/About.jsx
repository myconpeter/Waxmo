import Menu from "../components/menu";
import logo from "../assets/logo.svg"



const About = () => {
    return (
        <div>
            <Menu />

            <div
                className=" bg-black bg-opacity-100 relative overflow-hidden bg-cover bg-no-repeat text-center bg-welcome-page-background h-screen "


            >

                <div className="bg-overLay bg-opacity-75 relative overflow-hidden bg-cover h-screen w-screen"></div>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed"
                >
                    <div className=" flex flex-col items-center bg-transparent  absolute mt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
                        <img className='rounded-full h-28 w-28 top-12 items-center' src={logo} alt="micheal" />

                        <h4 className=" mt-1  font-signature mb-11 text-white">The path to finiancial growth </h4>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About