"use client";

import React, { act, useCallback, useState } from 'react';
import axios from 'axios';
import { shortenUrl } from '@/services/UrlService';
import UrlDisplayer from './UrlDisplayer';
import { useToast } from '@/context/ToastProvider';

const UrlInput = () => {

    const [urlState, setUrlState] = useState<{old: string, shortened: string}>({
        old: "",
        shortened: ""
    });

    const toast = useToast();

    const action = useCallback( async (formData: FormData) => {
        const formUrl = formData.get("url");
        if (!formUrl) {
            toast?.change({
                title: "",
                message: "You have to enter an url.",
                type: "error"
            })
            return;
        }

        try {
            const url = await shortenUrl(formUrl.toString());
            if (!url) return;

                    setUrlState({
                old: formUrl.toString(),
                shortened: url
            });

            toast?.change({
                title: "",
                message: "Url shortened.",
                type: "info"
            })
        } catch(err: unknown) {
            if (err instanceof Error){
                toast?.change({
                    message: err.message,
                    type: "error"
                })
            }
        }


    }, [])

    return (
        <>
            <form action={action} className='w-full flex flex-col align-middle gap-4 mount-animation'>
                <label className='mb-1.5 text-[26px] sm:text-[18px] font-bold italic text-text-secondary text-center'>
                    Enter the big url here:
                </label>
                

                <div className='w-[100%] flex flex-col sm:flex-row sm:items-center gap-[30px]'>
                    <input 
                        placeholder='https://really/huge?url=example'
                        className='flex-8/12 shadow-md rounded-[5px] px-[20px] py-1.5 focus:shadow-x outline-none text-[26px] sm:text-[18px]'
                        name='url'
                    >
                    </input>

                    <button className='mt-0.5 sm:mt-1.5 sm:mt-0 sm:h-fit text-[22px] sm:text-[16px] bg-accent text-background font-bold px-2 py-[5px] rounded-[5px] w-fit cursor-pointer click-animation'>
                        Shorten
                    </button>
                </div>
            </form>

            {urlState.shortened ? (
                <UrlDisplayer {...urlState}/>
            ) : null}
        </>
    )
}

export default UrlInput