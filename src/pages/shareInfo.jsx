import { useState } from "react";
import Menu from '../components/menu'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";



const ShareInfo = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {


        if (selected === i) {
            return setSelected(null)

        }

        setSelected(i)
    }


    return (
        <div className='mt-2 p-2 '>
            <Menu PageName='Shares Information' />
            <div className="mt-8 relative">

            </div>



            {data.map((item) => (
                <div className='mt-1 ml-1 bg-darkGray p-1 rounded-lg' key={item.id}>

                    <div className="flex  font-medium  justify-between items-center" onClick={() => toggle(item.id)}>
                        <h3 className='text-overLay text-sm'>{item.title}</h3>

                        <span>{selected === item.id ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />
                        }</span>

                    </div>



                    <p className={selected === item.id ? 'text-black text-sm mt-5' : 'text-white text-lg mt-5 overflow-hidden max-h-0'}>{item.description} </p>

                </div>
            ))}

        </div>
    )
}



const data = [
    {
        id: 1,
        title: "- 1% of share: ₦10,000",
        description: " - Buying a share of 1% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },

    {
        id: 2,
        title: "- 2% of share: ₦20,000",
        description: " - Buying a share of 2% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },

    {
        id: 3,
        title: "- 3% of share: ₦30,000",
        description: " - Buying a share of 3% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },

    {
        id: 4,
        title: "- 4% of share: ₦40,000",
        description: " - Buying a share of 4% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 5,
        title: "- 5% of share: ₦50,000",
        description: " - Buying a share of 5% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 6,
        title: "- 6% of share: ₦60,000",
        description: " - Buying a share of 6% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 7,
        title: "- 7% of share: ₦70,000",
        description: " - Buying a share of 7% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 8,
        title: "- 8% of share: ₦80,000",
        description: " - Buying a share of 8% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 9,
        title: "- 9% of share: ₦90,000",
        description: " - Buying a share of 9% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    },
    {
        id: 10,
        title: "- 10% of share: ₦100,000",
        description: " - Buying a share of 10% makes you WaxMo limited partner, and you are entitled to recieve dividend at the end a 30 days. Worth up to 20% - 40% of initial capital. Duration of shares is 180 days "
    }
]

export default ShareInfo