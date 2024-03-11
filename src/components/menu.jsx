import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';



const Menu = (props) => {

    const [nav, setNav] = useState(false);
    const history = useNavigate()

    const links = [
        {
            id: 1,
            link: "Home",
            ref: "/home/homepage"
        },
        {
            id: 2,
            link: "Dashboard",
            ref: "/home/dashboard"
        },

        {
            id: 3,
            link: "Information",
            ref: "/home/infomation"
        },
        {
            id: 4,
            link: "Settings",
            ref: "/home/settings"

        },
        {
            id: 5,
            link: "FAQ",
            ref: "/home/faq"
        },

        {
            id: 6,
            link: "About Us",
            ref: "/home/about"
        },
        {
            id: 7,
            link: "Contact Us",
            ref: "/home/contact"
        }

    ]





    return (
        <div className='fixed z-50 w-fit h-8 max-w-screen -translate-x-1/2  top-0 left-1/2 bg-lightGray'>


            <div className='flex items-center justify-between  p-2  h-fit w-screen'>

                <div className=''>
                    <button onClick={() => history(-1)} className=' text-overLay bg-white   mr-4  text-xl   '>{<MdArrowBackIosNew />}
                    </button>
                </div>

                <div className="">
                    <p className="text-xl font-bold text-center text-overLay">{props.PageName}</p>

                </div>
                <div className=''>
                    <button onClick={() => setNav(!nav)} className=' text-overLay text-xl  bg-white z-10 relative mr-4'>{nav ? <FaTimes /> : <GiHamburgerMenu />}</button>
                </div>

            </div>


            {nav && (
                <div className='flex  absolute top-0 left-0 text-white h-36 w-full  '>

                    <div onClick={() => setNav(!nav)} className='w-1/3   h-screen '></div>
                    <ul className=' flex  flex-col  w-2/3 bg-white text-black h-screen items-center'>
                        {links.map(({ id, link, ref }) => (
                            <li key={id} className='text-sm capitalize text-overLay py-4 px-4'>

                                <Link to={ref} > {link}</Link>


                            </li>
                        ))}
                        <li className='text-sm text-danger py-4 px-4'>

                            <Link to='/' > Logout </Link>


                        </li>

                        <li className='text-sm text-overLay py-4 px-4'>

                            <Link to='/admin' > Admin Panel</Link>


                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Menu