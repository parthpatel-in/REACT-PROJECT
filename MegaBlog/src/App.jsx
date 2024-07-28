// mujhe dekhna padega ka jab app load hora hai to user loged-in hai ya nahi or ye me state me se directly dekh lenege ,agar user loged-in hai to kuch dikhayenge chize or nahi hai to dikha denge outlet ke hum aapko koi post nahi dikha sakte
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {login,logout} from "./store/authSlice";
import authService from "./appwrite/auth";
import { Header,Footer } from './components';
import {Outlet} from 'react-router-dom';
import './App.css';

function App() {

const [loading, setloading] = useState(true)
const dispatch = useDispatch()
// jaise hi application load ho ek useeffect lo usse pucho service ke app logged in ho !
useEffect(() => {
  authService.getCurrentUser().then((userData) =>{
    if(userData){
      dispatch(login({userData}))   //ask chat to why use obj not using simple parenthesis
    }else{
      dispatch(logout())   //18:28
    }
  }).finally(()=>setloading(false))
}, [])



return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
      TODO:  <Outlet />
      </main>
      <Footer />
    </div>
  </div>
) : null
}

export default App
// conditional rendering example:return !loading ? () : ()