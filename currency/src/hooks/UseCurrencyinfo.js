import { useEffect,useState } from 'react'



function UseCurrencyinfo(currencies){
    const [data,Setdata] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)  
    .then((res) => res.json())
    .then((res) => Setdata(res [currencies]))
    console.log(data);
  }, [currencies])
    return(
        <>

        </>
    )
}


export default UseCurrencyinfo