"use client"

import Link from 'next/link';
import React from 'react'
import { RxOpenInNewWindow } from "react-icons/rx";

const UrlDisplayer = ({old, shortened}: {old: string, shortened: string}) => {
    return (
        <div className='flex flex-col items-center mount-animation-left mt-[80px]'>
            <Link className='items-center text-center w-full text-accent font-bold text-[36px] sm:text-[26px] flex gap-[25px] hover:underline justify-center' href={shortened} target='#'>
                {shortened}
                <RxOpenInNewWindow className='size-[40px] sm:size-[30px]'/>
            </Link>

            <span className='text-text-secondary w-[500px] break-all mt-[35px] text-[24px] sm:text-[16px]'>
                Old url: {old}
            </span>
        </div>
    )
}

export default UrlDisplayer;