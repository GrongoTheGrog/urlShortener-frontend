"use client"

import Toast from '@/components/Toast';
import { ToastType, ToastTypeContext } from '@/types/ToastTypes';
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

const ToastContext = createContext<ToastTypeContext | null>(null);

export function useToast(): ToastTypeContext | null{
    return useContext(ToastContext);
}

const ToastProvider = ({children}: {children: ReactNode}) => {


    //  DECLARE STATE
    const [toast, setToast] = useState<ToastType | null>(null);

    //  SET A FUNCTION TO CHANGE THE STATE AND PASS IT TO THE CONTEXT
    const changeToast = useCallback((toast: ToastType) => {
        setToast(toast);
    }, [])

    //  CREATE THE CONTEXT ON EVERY RENDER BASED ON THE CURRENT TOAST INFORMATION
    const contextToast: ToastTypeContext = {
        toast,
        change: changeToast
    }


    return (
        <ToastContext.Provider value={contextToast}>
            <Toast toast={toast}/>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider