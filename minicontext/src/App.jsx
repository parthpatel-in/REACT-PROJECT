
import './App.css'
import Auth from './Components/Auth'
import Profile from './Components/Profile'

import UserContextProvider from './context/UserContextProvider'

function App() {
  
 
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
        <Auth/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
 

//  in the app  components <UserContextprovider> whatever component we provider here you have access </UserContextprovider>  goto create components