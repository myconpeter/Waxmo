import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { IoCaretBackCircleSharp } from "react-icons/io5";




const Menu = () => {

    const [nav, setNav] = useState(false)



    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "Dashboard"
        },

        {
            id: 3,
            link: "Information"
        },
        {
            id: 4,
            link: "Settings"
        },

        {
            id: 6,
            link: "About Us"
        },
        {
            id: 7,
            link: "Contact Us"
        }

    ]



    return (
        <div className='flex  bg-white  h-20'>


            <div className='flex items-center justify-between   h-20 w-screen'>

                <div className=''>
                    <button className=' text-overLay bg-white   mr-4  h-20 text-3xl   '>{<IoCaretBackCircleSharp />}
                    </button>
                </div>

                <div className="">
                    <p className="text-3xl font-bold text-center text-overLay">Notifications</p>

                </div>



                <div className=''>
                    <button onClick={() => setNav(!nav)} className=' text-overLay text-3xl  bg-white z-10 relative mr-4'>{nav ? <FaTimes /> : <GiHamburgerMenu />}</button>
                </div>

            </div>


            {nav && (
                <div className='flex  absolute top-0 left-0 text-white h-screen w-full  '>

                    <div onClick={() => setNav(!nav)} className='w-1/3   h-screen '></div>
                    <ul className=' flex  flex-col  w-2/3 bg-white text-black   h-screen  justify-center items-center  '>
                        {links.map(({ id, link }) => (
                            <li key={id} className='text-2xl capitalize text-overLay py-4 px-4'>

                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Menu