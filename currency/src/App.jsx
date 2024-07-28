import { useEffect, useState } from "react";
import Dropdown from './components/Dropdown.jsx'
import "./App.css";
import { HiArrowsRightLeft } from "react-icons/hi2";

function App() {
  const [currencies, SetCurrencies] = useState([]);  
  const [amount,Setamount] = useState(1); 
  const [fromCurrency,SetfromCurrency] = useState("USD");
  const [toCurrency,SettoCurrency] = useState("INR");
  const [convertedamount,Setconvertedamount] = useState(null); 
  const [converting,Setconverting] = useState(false); 
  //  const [favourites,Setfavourite] = useState(json.parse(localStorage.getItem("favourite") ||["INR", "EUR","USD","AUS"]))

  const fetchCurrencies = async () =>{
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

     SetCurrencies(Object.keys(data));
    } catch (error) {
      console.log("error fetching",error)
    }
  };
  useEffect(() =>{
  fetchCurrencies();
  },[])
  
  console.log(currencies);

  // ... conversion logic
  const currencyConvert = async() =>{
if(!amount) return;
Setconverting(true);
try {
  const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
  const data = await res.json();

 Setconvertedamount(data.rates[toCurrency]+" " +toCurrency)
} catch (error) {
  console.log("error fetching",error)
}finally{Setconverting(false)}
  };

  const handleFavourite = (currency) =>{
  
  }

  const Swapcurrency =(currency) =>{
    SetfromCurrency(SettoCurrency)
    SettoCurrency(SetfromCurrency)
  }
  return (
    <div className="bg-black-200 flex items-center justify-center min-h-screen bg-blue-200 ">
      <div className="max-w-lg -2xl w-full mx-auto p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold text-gray-700">
          Currency Converter
        </h2>
        <div className="mt-4 text-700 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <Dropdown currencies={currencies} setCurrency ={SetfromCurrency} currency={fromCurrency} title="From:" handleFavourite={handleFavourite}/> 
         
         {/* swap currency button */}
         
          <div className="flex justify-center align-center"> 
            <button onClick={Swapcurrency} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              <HiArrowsRightLeft className="text-xl text-gray-700"/></button>
          </div>
          <Dropdown currencies={currencies} setCurrency={SettoCurrency} currency={toCurrency} title="To:" handleFavourite={handleFavourite}/> 
     
        </div>
        <div className="mt-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            amount
          </label>
          <input
           value={amount}
           onChange={(e) => Setamount(e.target.value)}
            type="number"
            className="w-full p-4 mt-4 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 "
          />
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={currencyConvert} className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none foucs:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            ${converting?"animate-pulse" : ""}`}>
            convert
          </button>
        </div>
        {convertedamount && ( 
          <div className="mt-4 text-lg font-medium text-right text-green-600">
          Converted Amount:{convertedamount}
             </div>
        )}
      </div>
    </div>
  );
}

export default App;
