import React from 'react'
import Menu from '../../components/menu'

const PayOut = () => {
    return (
        <div>

            <div>
                <Menu PageName='Pay Out' />

            </div>



            <div className="relative overflow-x-auto shadow-md mt-20">
                <table className="w-full text-sm text-left rtl:text-right text-black ">
                    <thead className="text-xs text-black bg-darkGray">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Verified
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Account Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Account Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bank Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b ">

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                michealpeter040@gmail.com
                            </th>
                            <td className="px-6 py-4">
                                micheal
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                3.0 lb.
                            </td>
                            <td className="flex items-center px-6 py-4">
                                <a href="#" class="font-medium text-black bg-overLay p-2 rounded-lg">Paid</a>

                            </td>
                        </tr>
                        <tr class="bg-white border-b ">

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                michealpet0@gmail.com
                            </th>
                            <td className="px-6 py-4">
                                peter
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                No
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                1.0 lb.
                            </td>
                            <td className="flex items-center px-6 py-4">

                                <a href="#" class="font-medium text-black bg-overLay p-2 rounded-lg mx-3">Paid</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PayOut