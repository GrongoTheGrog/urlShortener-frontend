"use server";

import UrlInput from "@/components/UrlInput";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default async function Home() {

    return (
        <div className="flex flex-col align-middle w-[95%] sm:w-[50%] min-w-[600px] pt-[220px] px-[30px] mx-auto">
            <Link href="https://github.com/GrongoTheGrog">
                <FaGithub className="size-[35px] sm:size-[28px] fixed top-4 right-4 cursor-pointer"/>
            </Link>
            <UrlInput/>
        </div>
    );
}
