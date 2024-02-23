import Menu from "../components/menu";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";


const About = () => {
    return (
        <div>
            <Menu />

            <div className="mt-20 px-3">
                <div className="space-y-4">
                    <p className="text-center font-semibold text-3xl text-darkGreen underline">About Us</p>
                    <p className="text-overLay text-center"> WaxMo is a finiancial tecnnology company that provides a platfrom for investing and utilizing every penny</p>
                </div>
                <div className="space-y-4 mt-5">
                    <p className="text-center font-semibold text-3xl text-darkGreen underline">What defines us</p>
                    <ul className="text-overLay">
                        <li> - Simplicity </li>
                        <li>  - Transparency </li>
                        <li>  - Effective</li>
                        <li>  - Accountability </li>
                        <li>  - Team Management </li>
                        <li>  - Growth and Development </li>
                        <li>  - Investors Satisfaction </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12">
                <p className="text-center">
                    Visit us on our social media platform
                </p>
                <div className="flex flex-row items-center justify-center mt-3 space-x-2">



                    <a target="_blank" href="#">
                        <FaFacebook className="text-overLay bg-white" />
                    </a>
                    <a target="_blank" href="#">
                        <FaSquareXTwitter className="text-overLay bg-white" />
                    </a>
                    <a target="_blank" href="#">
                        <FaSquareWhatsapp className="text-overLay bg-white" />
                    </a>

                </div>
            </div>


            <div className="text-overLay pt-10">
                <p className="text-center">
                    Copyright &copy; WaxMo tecnnologies
                </p>
            </div>

        </div>
    )
}

export default About