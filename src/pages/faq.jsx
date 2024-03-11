import { useState } from "react";
import Menu from '../components/menu'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";



const faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }


    return (
        <div className='mt-2 p-2 '>
            <Menu PageName='FAQ' />
            <div className="mt-8 mb-5 ">
                <p className="text-center  text-xl">
                    Here are some Frequently Asked Questions
                </p>
            </div>

            {data.map((item) => (
                <div className='mt-1 ml-2 bg-darkGray d p-1 rounded-lg' key={item.id}>

                    <div className="flex text-lg font-medium  justify-between items-center cursor-pointer" onClick={() => toggle(item.id)}>
                        <h3 className='text-overLay text-sm'>{item.title}</h3>

                        <span>{selected === item.id ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>

                    </div>



                    <p className={selected === item.id ? 'text-black text-sm mt-5' : 'text-white text-lg mt-5 overflow-hidden max-h-0'}>{item.description} </p>

                </div>
            ))}


            <Link to='/home/contact' className="">
                <h1 className="text-center font-bold text-xl">Got more questions ? </h1>
                <p className="text-center pt-6 text-overLay" >Contact us now</p>
            </Link>

        </div>
    )
}



const data = [
    {
        id: 1,
        title: "  - What is WaxMo all about",
        description: "WaxMo is  financial technology company that provides platform for investing your finance and watch it grow overtime "
    },

    {
        id: 2,
        title: "- How much do i need to invest to be a Waxmo investor",
        description: " - Buying a share of 2% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },

    {
        id: 3,
        title: "- Why should i consider Waxmo",
        description: " - Buying a share of 3% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },

    {
        id: 4,
        title: "- What is WaxMo source of income",
        description: " - Buying a share of 4% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 5,
        title: "- What Makes WaxMo different from others",
        description: " - Buying a share of 5% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 6,
        title: "- When do i get paid on WaxMo",
        description: " - Buying a share of 6% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    }
]

export default faq