import React from 'react'
import Menu from '../components/menu'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <Menu PageName='Error 404' />

            <div className='mt-20 flex flex-col items-center'>
                <div>
                    <h2 className='text-2xl font-bold'>Page Not Found</h2>
                </div>

                <div className='mt-5'>
                    <p className='text-lg'> Sorry, this page isn&#x27;t available</p>
                </div>

                <div>
                    <Link
                        class="px-2 py-2 mt-16 text-lg font-light transition duration-200 ease-in bg-brightYellow border-2 border-gray-700 w-36 hover:bg-yellow-400 focus:outline-none"
                        type="button" to='/home/homepage'>
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage