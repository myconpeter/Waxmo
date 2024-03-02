import React from 'react'
import Menu from '../../components/menu'
import { Link } from 'react-router-dom'

const AdminHome = () => {
    return (
        <div>
            <Menu PageName='Admin Panel' />

            <div className='mt-16 m-5'>
                <div>
                    <h2 className='text-xl font-semibold text-center'>Statistical Data Analysis</h2>
                </div>

                <section className='mt-4'>
                    <div className='flex justify-evenly text-xl'>
                        <Link to='/admin/totalusers' className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p>Total Registered </p>
                            <p>300</p>

                        </Link>
                        <div className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p>Total Verified </p>
                            <p>100</p>

                        </div>
                    </div>
                    <div className='flex justify-evenly text-xl mt-5'>
                        <div className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p>Not Verified </p>
                            <p>300</p>

                        </div>
                        <div className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p>Amount to be paid </p>
                            <p>100</p>

                        </div>
                    </div>
                    <div className='flex justify-evenly text-xl mt-5'>
                        <div className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p> Total Paid out </p>
                            <p>300</p>

                        </div>
                        <div className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p>Total Unpaid </p>
                            <p>100</p>

                        </div>
                    </div>
                    <div className='flex justify-evenly text-xl mt-5'>
                        <div className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p> Total Expired </p>
                            <p>300</p>

                        </div>
                        <div className='flex flex-col justify-center items-center bg-darkGray p-2 rounded-lg'>
                            <p>Total Unexpired</p>
                            <p>100</p>

                        </div>
                    </div>
                </section>

                <section className='mt-5 '>

                    <div className='mb-3'>
                        <p className='text-center '>Notifications</p>
                    </div>
                    <div className='flex justify-evenly'>

                        <Link to='/admin/sendsingle' className='p-3 bg-overLay rounded-lg text-white'>Send Single</Link>
                        <Link to='/admin/sendall' className='p-3 bg-overLay rounded-lg text-white'>Send All</Link>


                    </div>
                </section>
                <section className='mt-5 '>

                    <div className='mb-3'>
                        <p className='text-center '>Action</p>
                    </div>
                    <div className='flex justify-evenly'>

                        <Link to='/admin/payout' className='p-3 bg-darkGreen rounded-lg text-white'>Pay Out ALL</Link>
                        <Link to='/admin/addDaily' className='p-3 bg-overLay rounded-lg text-white'>Daily Analysis</Link>




                    </div>
                </section>


            </div>
        </div>
    )
}

export default AdminHome