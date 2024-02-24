import { useState } from "react";
import Menu from '../components/menu'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";



const faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        console.log(i)

        if (selected === i) {
            return setSelected(null)

        }

        setSelected(i)
    }


    return (
        <div className='mt-2 p-2 '>
            <Menu />

            <div className="mt-16 mb-5 ">

                <p className="text-center font-semibold text-xl">
                    Here are our Frequently Asked Questions
                </p>

            </div>



            {data.map((item) => (
                <div className='mt-2 ml-4 bg-darkGray d p-2 rounded-lg' key={item.id}>

                    <div className="flex text-lg font-medium  justify-between items-center cursor-pointer" onClick={() => toggle(item.id)}>
                        <h3 className='text-overLay'>{item.title}</h3>

                        <span>{selected === item.id ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>

                    </div>



                    <p className={selected === item.id ? 'text-black text-lg mt-5' : 'text-white text-lg mt-5 overflow-hidden max-h-0'}>{item.description} </p>

                </div>
            ))}

            <div className="mt-10">
                <h1 className="text-center font-bold text-xl">Got more questions ? </h1>
                <p className="text-center pt-6 text-overLay" >Contact us now</p>
            </div>

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