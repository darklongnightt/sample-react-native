import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        console.log(`Fetching data from: ${url}`);
        setIsLoading(true);
        fetch(url)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Failed to fetch data!');
                }
                return resp.json();
            })
            .then((data) => {
                setIsLoading(false);
                setFetchedData(data);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
    }, dependencies)

    return [isLoading, fetchedData];
}