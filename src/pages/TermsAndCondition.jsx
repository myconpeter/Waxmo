import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const TermsAndCondition = () => {

    const [nav, setNav] = useState(false);
    const history = useNavigate()

    return (
        <div>
            <div className='flex items-center justify-between  p-2  h-fit w-screen'>

                <div className=''>
                    <button onClick={() => history(-1)} className=' text-overLay bg-white   mr-4  text-xl   '>{<MdArrowBackIosNew />}
                    </button>
                </div>

                <div className="">
                    <p className="text-xl font-bold text-center text-overLay">Terms and conditions</p>

                </div>
                <div className=''>
                    <button onClick={() => setNav(!nav)} className=' text-overLay text-xl  bg-white z-10 relative mr-4'></button>
                </div>

            </div>
            <div className="mt-1 relative">

            </div>
            <div className='px-4'>
                <div className='space-y-2'>
                    <p className='font-bold text-center '>
                        Contracts
                    </p>

                    <p className="text-sm">
                        You agree that by clicking “Signup”, “Buy a share” or similar, registering, accessing or using our services (described below), you are agreeing to enter into a legally binding contract with WAXMO (even if you are using our service on behalf of a company or individual). If you do not agree to this contract (“contract or user agreement), do not click “Signup now” or “Buy a share” (or similar) and do not access or otherwise use any of our services.
                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Services
                    </p>

                    <p>
                        This contract applies to waxmo.co, and other services that state that they are offered under this contract(“services”), Registered users of our services are “Members” and users who invest with us are “investors”.
                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center mt-4 '>
                        WAXMO
                    </p>

                    <p>
                        You are entering into this contract with WAXMO (also referred to ‘we’ and ‘us’), and WAXMO will be the controller of your personal data provided to , or collected by or for, or processed in connection with our services.
                        As a Member or Investor of our services, the collection, use and sharing of your personal data is subject to confidentiality.
                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Members and Investors
                    </p>

                    <p>
                        When you signup and invest on WAXMO, you become an investor. If you have chosen not to invest on WAXMO but signup, you are a member of WAXMO.
                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Changes
                    </p>

                    <p>
                        We may modify this contract, and our services from time to time. If we make material changes to it, we will provide you notice through our services, or by other means, to provide you the opportunity to review the changes before they become effective.

                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Obligation
                    </p>

                    <p>
                        WAXMO is charged responsible for your investment as there is no refunding policy, while  investment risk are shared among you and we.

                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Account
                    </p>

                    <p>
                        Members are account holders. You agree to (1) use a strong password and keep it confidential; (2) not transfer any part of your account (e.g.., connections) and (3) follow the rules, law and our list of Do’s and Don’ts . you are responsible for anything that happens through your account unless you report misuse. Please note we will never ask you for any of your confidential details like BVN, NIN. Do not share with any one.

                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Buying a Share
                    </p>

                    <p>
                        If you buy a share on WAXMO, you agree that your share percentage last for the duration of six month, and open for repurchase. Purchase  is non refundable, as we are responsible for your investment while you and we share the risk of investment. All your purchase of shares are to be done through WAXMO.
                        You get a notification of your purchase of share through your WAXMO account notification.
                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Bio-data information
                    </p>

                    <p>
                        You agree that you will provide accurate information(name, phone number, mail, and bank account details) which will be used for rendering of our services, and you agree that you are responsible for incorrect details of information.
                        Please reconfirm info you provide before sending it to us.
                        We are not obligated to publish any confidential information or content on our service and can remove it with or without notice.
                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Disclaimer
                    </p>

                    <p>
                        WAXMO makes no representation or warranty about the services, including any representation that the services will be uninterrupted or error-free,  WAXMO will not be liable in connection with this contract for lost profits, or loss of data (down time or loss, use of, or changes to, your information or data.) or incidental, consequential, special or punitive damages.

                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Limits
                    </p>

                    <p>
                        WAXMO reserves the right to limit your use of the services, including the percent of shares you can purchase, the right to restrict, suspend, or terminate your account if you breach this contract or the misusing of our service (violation the do’s and don’ts ).

                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Automated payment
                    </p>

                    <p>
                        We use the information and data that you provide to make automated payment of dividend. Keeping your data and information accurate and up to date helps us to make automated payment of dividend.

                    </p>
                </div>

                <div className='font-bold text-center mt-4 '>
                    Do’s and Don’ts</div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Do's
                    </p>

                    <ul className="text-black list-disc">
                        <p>You agree that you will</p>
                        <li> Provide accurate information</li>
                        <li> use name which match with your bank details as it will be used in automated payment of dividend.</li>
                        <li>use the service in a professional manner.</li>
                        <li>and comply with the rules guiding waxmo..</li>
                    </ul>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Dont's
                    </p>

                    <ul className=" list-disc">
                        <p>You agree that you will not</p>
                        <li>create a false identity account on waxmo, misrepresent your identity, or use or attempt to use another’s account.</li>
                        <li>develop, support, or use any softwares, devices, scripts, robots, or any other means or processes (including crawlers, browser plugins and add-ons or any other technology) to scrape the services or otherwise copy profiles and other data from the services.</li>
                        <li>Disclose info that are confidiential to third parties.</li>

                    </ul>
                </div>

                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        How to contact us
                    </p>

                    <p>
                        For general inquires, you may contact us through our social handles. For legal notices or service of process, you may write us at our mail:


                    </p>

                    <p className=" text-lg font-bold pb-6">contactwaxmo@gmail.com</p>
                </div>



            </div>

        </div>
    )
}

export default TermsAndCondition