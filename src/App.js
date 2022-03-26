import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {

const user=useSelector(selectUser)
const dispatch=useDispatch()

useEffect (()=>{
  auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      //use logged in
      dispatch(login({
        email:userAuth.email,
        uid:userAuth.uid,
        dispalyName:userAuth.displayName,
        photoUrl:userAuth.photoURL,
      }))
    }
    else 
    //user not logged in or logged out
    dispatch(logout())
  })
},[])

  return (
    <div className="app">

  <Header/>

  {!user ? <Login/> :(<div className='app_body'>
    <Sidebar/>

  <Feed/>
  {/* {Widgets} */}
  </div> )}

   
  
     
    </div>
  );
}

export default App;
