import Menu from '../components/menu'

import Grow from '../assets/grow.jpg'
import Dividend from '../assets/dividend.jpg'

const information = () => {
    return (
        <div>
            <Menu PageName='Information' />
            <div className="mt-10 relative">

            </div>
            <div className='px-4'>
                <div className='space-y-4'>
                    <p className='font-bold text-center '>
                        Investment Overview
                    </p>

                    <p>
                        Investment is traditionally defined as the commitment of resources to achieve later benefits. If an investment involves money, then it simply mean commitment of finance to receive more money later
                    </p>
                </div>

                <img src={Grow} className="h-52 w-full rounded-lg" alt="" />
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Shares: Overview
                    </p>

                    <p>
                        A share is a unit of ownership, in which investor in return receives dividend.                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center mt-4 '>
                        Limited partner: Overview
                    </p>

                    <p>
                        A limited partner is a partner in a company who do not partake in the day-to-day activities of the business but yet get paid it dividend as a return of investment.                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Dividend: Overview
                    </p>

                    <p>
                        Dividend is a distribution of profits by a company to it’s investors.                    </p>
                </div>

                <img src={Dividend} className="h-52 w-full rounded-lg" alt="" />
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        WaxMo: Overview
                    </p>

                    <p>
                        WaxMo is a financial technology Investment company set up to serve as a channel of investment to investor and as source of income. On WaxMo, buying a share of 1% amounting #10,000 makes you WaxMo investor(limited partner), and you are entitled to receive dividend on a monthly basis without performing or partaking in the day-to-day activities of the firm. WaxMo is discover in September 16th, 2023                    </p>
                </div>
                <div className='space-y-4 mt-4'>
                    <p className='font-bold text-center '>
                        Dividend payment date
                    </p>

                    <p>
                        Dividend payment date is fixed at every 10th of the month.                    </p>
                </div>



            </div>

        </div>
    )
}

export default information