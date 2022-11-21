import { useRouter } from 'next/router'
import React from 'react'
import BookRepairLayout from '../../components/Layout/BookRepairLayout'
export default function Address() {
    const router = useRouter()
    return (
        <>
            <h2 className='font-light text-4xl text-darkLight mb-8'>Book a repair</h2>
            <a href='' className='flex items-center mb-6'>
                <img src='/plus.webp' alt="" className='w-12' />
                <p>Add new address</p>
            </a>
            <div className="mb-6 white-glass p-4 sm:p-8 rounded-xl">
                <div className="flex flex-col sm:flex-row">
                    <div className="left">
                        <div className="flex items-center mb-2">
                            <input type="radio" name="" id="" />
                            <h3 className='ml-2 text-primary font-medium text-xl'>Home Address</h3>
                        </div>
                        <p className='text-gray-500 mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum autem, quaerat obcaecati ad reprehenderit velit ex incidunt reiciendis!</p>
                        <p className='text-gray-500 mb-2'><b>Mobile: </b>142464354</p>
                    </div>
                    <div className="right sm:w-28 w-full flex justify-end sm:block">
                        <img src="/options.svg" alt="" className='w-12 h-12 sm:mb-4 mr-4' />
                        <img src="/trash.svg" alt="" className='w-14 h-14 sm:mb-4 mr-4' />
                    </div>
                </div>
            </div>
            <button className='brand-btn' onClick={() => router.push('/book-a-repair/review')}>
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </>
    )
}


Address.getLayout = function (page) {
    return (
        <BookRepairLayout>
            {page}
        </BookRepairLayout>
    )
}


