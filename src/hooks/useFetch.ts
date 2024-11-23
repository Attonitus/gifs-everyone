import { useEffect, useState } from "react"

interface DataProps{
    data: [
        {
            id: string,
            title: string,
            images: {
                original: {
                    url: string
                }
            }
        }
    ]
}


export const useFetch = (search: string) => {
    const [data, setData] = useState<DataProps>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const url = `https://api.giphy.com/v1/gifs/search?api_key=R9vjEHe7dGrC6LXy6mlyeqUNfGiaHl5W&q=${search}&limit=3`;

    const fetchGifs = async() => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetch(url);
            const json : DataProps = await res.json();
            setData(json);
            setError(false);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGifs();
    }, [url]);


    return {
        data,
        error,
        loading
    }
}