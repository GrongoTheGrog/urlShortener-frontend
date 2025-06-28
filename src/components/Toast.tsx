"use client"

import { ToastType } from '@/types/ToastTypes'
import React, { useEffect, useRef } from 'react'

const Toast = ({toast}: {toast: ToastType | null}) => {

    const interval = useRef<any>(null);

    useEffect(() => {
        if (toast != null){
            const domToast = document.getElementById("toast");
            domToast?.classList.add("toast-toggle");
            
            if (interval.current){
                clearInterval(interval.current);
            }

            interval.current = setInterval(() => {
                domToast?.classList.remove("toast-toggle");
            }, 4000);
        }
    }, [toast])

    const bgColor = toast?.type === "error" ? "bg-toast-err-bg" : "bg-toast-suc-bg";

    return (
        <div className={`${bgColor} flex flex-column fixed right-[50%] translate-x-[50%] bottom-[-15%] px-[20px] py-[5px] rounded-[5px] transition-[bottom] duration-500 ease-in`} id='toast'>
            <span className='text-center font-bold text-[16px]'>
                {toast?.message}
            </span>
        </div>
    )
}

export default Toast