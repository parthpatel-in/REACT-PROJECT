import React from 'react'
import { CiStar } from "react-icons/ci";

 const currencyDropdown = ({
currencies,
currency,
setCurrency,
favourites,
handleFavourite,
title=""
 }) =>{
    
    return (
        <div>
            <label htmlFor={title} className='block text-sm font-medium text-gray-700'>{title}</label>
            <div className='mt-1 relative'>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}  className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                    {/* render favourites */}
{/* {favourites.map((currency))}
return  <option  className="bg gray-700" value={currency} key={currency}></option> */}
                      {currencies?.map((currency) => {
                        return( 
                            <option value={currency} key={currency}>
                                {currency}
                            </option>
                        )
                    })}

                </select>
                <button onClick={handleFavourite}className='absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'>
                <CiStar />
                </button>
                
             </div>
        </div>
    );
    
};
export default currencyDropdown;