"use client";

import React, { act, useCallback } from 'react'

const UrlInput = () => {

    const action = useCallback((formData: FormData) => {

    }, [])

    return (
        <form action={action} className='w-full flex flex-col align-middle gap-4 mount-animation'>
            <label className='mb-1.5 text-[18px] font-bold italic text-text-secondary text-center'>
                Enter the big url here:
            </label>
            

            <div className='w-[100%] flex flex-col sm:flex-row sm:items-center gap-[30px]'>
                <input className='flex-8/12 shadow-md rounded-[5px] px-[20px] py-1.5 focus:shadow-x outline-none text-[18px]'>
                </input>

                <button className='mt-1.5 sm:mt-0 sm:h-fit text-[16px] bg-accent text-background font-bold px-2 py-[5px] rounded-[5px] w-fit cursor-pointer click-animation'>
                    Shorten
                </button>
            </div>
        </form>
    )
}

export default UrlInput