import { useState } from "react";
import Menu from '../components/menu'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";



const BuyShare = () => {

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

            <div className="mt-2 relative">

            </div>


            <div>
                <div className="">
                    <p className="text-overLay text-3xl font-bold underline">Want to buy a Share ? </p>

                </div>

                <div>
                    <p className="text-overLay ">Choose below the percentage (%) of shares you want to buy</p>
                </div>
            </div>


            {data.map((item) => (
                <div className='mt-2 ml-4 bg-darkGray h-fit p-3 rounded-lg' key={item.id}>

                    <div className="flex text-lg font-medium  justify-between items-center cursor-pointer" onClick={() => toggle(item.id)}>
                        <h3 className='text-black'>{item.title} </h3>
                        <p className="text-darkGreen">{item.Amount}</p>

                        <span>{selected === item.id ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />
                        }</span>

                    </div>
                    <p className={selected === item.id ? 'text-black text-md mt-1' : 'text-white text-lg  overflow-hidden max-h-0'}>{item.link0ne} </p>
                    <p className={selected === item.id ? 'text-black text-md mt-1' : 'text-white text-lg overflow-hidden max-h-0'}>{item.linkTwo} </p>
                    <p className={selected === item.id ? 'text-black text-md mt-1' : 'text-white text-lg overflow-hidden max-h-0'}>{item.linkThree} </p>

                    <p className={selected === item.id ? 'text-overLay text-sm mt-1' : 'text-white text-lg overflow-hidden max-h-0'}> Note : Link will redirect you to WaxMo Manager whatsapp page </p>
                </div>
            ))}

        </div>
    )
}


const data = [
    {
        id: 1,
        title: "- 1% of share: ",
        Amount: " ₦10,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "


    },

    {
        id: 2,
        title: "- 2% of share: ",
        Amount: " ₦20,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },

    {
        id: 3,
        title: "- 3% of share: ",
        Amount: " ₦30,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },

    {
        id: 4,
        title: "- 4% of share: ",
        Amount: " ₦40,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },
    {
        id: 5,
        title: "- 5% of share: ",
        Amount: " ₦50,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },
    {
        id: 6,
        title: "- 6% of share: ",
        Amount: " ₦60,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },
    {
        id: 7,
        title: "- 7% of share: ",
        Amount: " ₦70,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },
    {
        id: 8,
        title: "- 8% of share: ",
        Amount: " ₦80,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },
    {
        id: 9,
        title: "- 9% of share: ",
        Amount: " ₦90,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    },
    {
        id: 10,
        title: "- 10% of share: ",
        Amount: " ₦100,000",
        link0ne: " link to manager 1 ",
        linkTwo: " link to manager 2 ",
        linkThree: " link to manager 3 "
    }
]

export default BuyShare