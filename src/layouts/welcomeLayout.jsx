import { Outlet } from "react-router-dom"


const welcomeLayout = () => {
    return (

        <div
            className=" bg-black bg-opacity-100 relative overflow-hidden bg-cover bg-no-repeat text-center bg-welcome-page-background h-screen "


        >

            <div className="bg-overLay bg-opacity-75 relative overflow-hidden bg-cover h-screen w-screen"></div>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            >






            </div>
        </div >



    )
}

export default welcomeLayout


