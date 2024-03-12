import Menu from "../components/menu";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

import Waxmo from '../assets/waxmo.jpg'
import Return from '../assets/return.jpg'
import Transparent from '../assets/transparent.jpg'
import Team from '../assets/Team.jpg'
import Diverse from '../assets/diverse.jpg'
import Risk from '../assets/risk.jpg'





const About = () => {
    return (
        <div>
            <Menu PageName='About Us' />

            <div className="mt-10 px-3">
                <div className="space-y-4">
                    {/* <p className="text-center font-semibold text-3xl text-darkGreen underline">About Us</p> */}
                    <p className="text-overLay text-center">WaxMo is an Investment company that serves as a channel of investment and risk management, WaxMo is a firm that issues shares to investors, and diversify the stock in different portfolios, i.e investing in Local Stock Exchange market, Foreign stock exchange market, Trading of commodities, Forex trading, Cryptomarket.
                        WaxMo is managed by professionals team who they possess the four basic managerial skills i.e Planning, Organizing, Leading, and Controlling. They have high knowledge in finance and risk management, and as such are competence to manage and make informed decision on the firm financial and non-financial activities.
                    </p>
                </div>
                <img src={Waxmo} className="h-52 w-full rounded-lg" alt="" />
                <div className="space-y-4 mt-5">
                    <p className="text-center font-semibold text-sm text-darkGreen underline">What distinguish WaxMo from other Investment company;</p>
                    <ul className="text-overLay text-sm space-y-4">
                        <li> 1.	The interest Rate: WaxMo return of investment appears to be high and therefore mark out WaxMo as the number one(1) channel of investment of high rate of returns.</li>
                        <img src={Return} className="h-52 w-full rounded-lg" alt="" />

                        <li> 2.	Transparency and Accountability: WaxMo transparency in giving out the analysis of allocation of finance and accountability distinguish WaxMo from other investment company.</li>
                        <img src={Transparent} className="h-52 w-full rounded-lg" alt="" />
                        <li> 3.	Professional Management: WaxMo being managed by professional teams who have extensive knowledge in finance and risk management and managers who possess managerial skills distinguish WaxMo from other platform</li>
                        <img src={Team} className="h-52 w-full rounded-lg" alt="" />
                        <li> 4.	Diversified Portfolios: WaxMo diversifying investment gives WaxMo upper hand over other investment firm.</li>
                        <img src={Diverse} className="h-52 w-full rounded-lg" alt="" />
                        <li> 5.	Team work: Partnering with other financial and production company standardize WaxMo from other platform</li>

                    </ul>
                </div>
            </div>

            <div className="mt-12 px-3">

                <div className="space-y-4 mt-5">
                    <p className="text-center font-semibold text-xl text-darkGreen underline">Our Objectives.</p>
                    <ul className="text-overLay space-y-4">
                        <li> i)	To solve the problem of inflation by increasing the financial value of money.</li>
                        <li> ii) To serve as a channel of investment and risk management.</li>
                        <img src={Risk} className="h-52 w-full rounded-lg" alt="" />
                        <li> iii) To  improve team work.</li>
                        <li>iv)	To increase investing mindset in people.</li>
                        <li> v)	To ameliorate idleness of finance.</li>

                    </ul>
                </div>
            </div>
            <div className="mt-12 px-3">

                <div className="space-y-4 mt-5">
                    <p className="text-center font-semibold text-xl text-darkGreen underline">Our Mission:</p>
                    <p className="text-overLay text-center">  We are passionate about increasing financial value, building bright future for young people with investment mindsets. Our mission is to create a channel of investment that enable young investors increase their little finance overtime, while they go on with their daily activities. </p>
                </div>
            </div>

            <div className="mt-12 px-3">

                <div className="space-y-2 mt-5">
                    <p className="text-center font-semibold text-xl text-darkGreen underline">Our Values:</p>
                    <ul className="text-overLay space-y-2">
                        <li> 1. Transparency</li>
                        <li> 2. Accountability</li>
                        <li> 3. Teamwork</li>
                        <li> 4. Professional management</li>

                    </ul>
                </div>
            </div>
            <div className="mt-12 px-3">

                <div className="space-y-2 mt-5">
                    <p className="text-center font-semibold text-xl text-darkGreen underline">Our Goals.</p>
                    <ul className="text-overLay space-y-2">
                        <li> 1. To augment young investors.</li>
                        <li> 2. To foster passive income</li>
                        <li> 3. To serve as a means of income to it’s investors and managers.</li>
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