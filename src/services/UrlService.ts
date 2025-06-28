import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function shortenUrl(url: string){
    console.log(url);

    const response = await axios.post(
        backendUrl + "/shortenUrl",
        {url}
    )

    return response.data;
}