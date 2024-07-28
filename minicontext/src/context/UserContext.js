import React from "react";

const UserContext = React.createContext();

export default UserContext;
    
// explanation 

//  first create context create context is method and  store in variable then throw in output export default
// when u   create  context is provide major thing that provider that provider (user context) variable its global var end of the day we wrap all the components in   usercontext fragments <> </> , and this component become provider or components have access of global user context  , store created access store in app or main jsx file

// example  <UserContextProvider>
// <h1>React with Chai and share is important</h1>
//   <Auth/>
//   <Profile/>
// </UserContextProvider>

