import React from 'react'
import Menu from '../../../components/menu'

const TotalRegistered = () => {
    return (
        <div>

            <div>

                <Menu PageName='All Users' />
            </div>



            <div className="relative overflow-x-auto shadow-md mt-10">
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
                                <a href="#" class="font-medium text-black bg-overLay p-2 rounded-lg">Edit</a>
                                <a href="#" class="font-medium text-black bg-danger p-2 rounded-lg mx-3">Remove</a>
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
                                <a href="#" class="font-medium text-black bg-overLay p-2 rounded-lg">Edit</a>
                                <a href="#" class="font-medium text-black bg-danger p-2 rounded-lg mx-3">Remove</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">

                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                michealpeter@gmail.com
                            </th>
                            <td className="px-6 py-4">
                                Ekanem
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                No
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4">
                                0.2 lb.
                            </td>
                            <td className="flex items-center px-6 py-4">
                                <a href="#" class="font-medium text-black bg-overLay p-2 rounded-lg">Edit</a>
                                <a href="#" class="font-medium text-black bg-danger p-2 rounded-lg mx-3">Remove</a>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TotalRegistered