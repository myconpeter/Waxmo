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

            <div className="h-12">

            </div>


            <Link to='/home/contact'>
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
        description: "WAXMO is a financial technology investment company that diversify its investment in different Portfolios, in return pays its investors dividend on a monthly basis "
    },

    {
        id: 2,
        title: " - Why should you consider WAXMO?",
        description: "You should consider WAXMO, for it provides a simple way for investing your little finance and watch it grow overtime, its return on diversified investment makes you receive dividend when due. "
    },

    {
        id: 3,
        title: "- What is WAXMO sources of Revenue?",
        description: "WAXMO generates its revenue from the Stock-exchange market and Digital-economy market. "
    },

    {
        id: 4,
        title: "- What Makes WaxMo different from others",
        description: "WAXMO simplicity, transparency, accountability, efficiency, and professional team management distinguish WAXMO from other investment firms."
    },
    {
        id: 5,
        title: "- How much is 1% share on WAXMO? ",
        description: "WAXMO issue different percentage of shares to its investors which makes them receive dividend on a monthly basis. 1% share on WAXMO is just #10,000. "
    },
    {
        id: 6,
        title: "- When do WAXMO pays its investors Dividend ? ",
        description: "WAXMO pays its investors dividend every 10th of each month for duration of 6months. "
    }

]

export default faq 