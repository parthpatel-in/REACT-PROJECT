
import React from "react";
import UserContext from "./UserContext";

// children is prop
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        // its important access the value of .provider without UserContext its gone be not working or which thing should access i have to pass the data prop  value (user) object or    
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
//  ye dono value isliye pass ki hai  props se kyuki koi value se data chaiye to user se data lelu or is state me koi value add karni hai to setuser se karlu Note ye set user ka acces mujhe use context hook se mil rahaa hai in the login.jsx file or we have to pass properly correct context  because then u will get set user


export default UserContextProvider


// first thing i have to wrap through provider 
// second konsi value access de rahe ho wo batana padega ex: line 8 value
    // value  property prop passing  object 