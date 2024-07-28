import { createContext, useContext } from "react";

export  const ThemeContext = createContext({
    themeMode: "light",   //default value
    
    // methods
    darkTheme:  () =>{},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// custom hooks

export default function useTheme() {
    return useContext(ThemeContext)
}
// we can  add default value in create context jab aapka context banega (initial state) waha par bhi kuch value de sakte ho add kar sakte ho jab context pehli baar bane to usme kya kya value feed hoo , yaha pe hum ek default object presen kar rahe hai.

// ye theme mujhe kab milega jab koi context call karega usko theme bhi mil jayega or ye dark or light method bhi 

// aap variable or method me de sakte ho 

// diffrence between export or export default 
// What is the difference between export and export default in React?
// Use named (export) when you want to export multiple variables or functions from a file.

//  Use default export when you want to export only one variable or function from a file. Use named export when you want to keep the same name for your variables or functions across different files.13 Sept 2023