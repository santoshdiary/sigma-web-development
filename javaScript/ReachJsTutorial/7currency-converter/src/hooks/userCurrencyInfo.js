import {useEffect, useState} from "react"

//creaing custom hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
)
        .then((res) => res.json()) //convert string into json formate
        .then((res) => setData(res[currency])) //hold data in useState hook 
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;