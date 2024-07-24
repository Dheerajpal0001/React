import { useEffect, useState } from 'react';
import axios from 'axios';

function useCurrencyInfo() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const apiKey = 'fca_live_En6YevqSJomUWRoTTF4mTxbTddb0ozED43F3ETRV';
                const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;
                const response = await axios.get(apiUrl);
                console.log(response);
                setData(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchCurrencyData();
    }, []);

    return { data, loading, error };
}

export default useCurrencyInfo;













// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;