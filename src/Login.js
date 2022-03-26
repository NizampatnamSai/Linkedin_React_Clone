import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {

  const [name, setName]=useState('')
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
   const [profilepic, setProfilepic]=useState('')
   
   const dispatch=useDispatch();
   
   
   
   const loginToSubmit=(e)=>{
     e.preventDefault();

     auth.signInWithEmailAndPassword(email,password).then (userAuth=>{
       dispatch(login({
         email:userAuth.user.email,
         uid:userAuth.user.uid,
         displayName:userAuth.user.displayName
         , profileUrl:userAuth.user.profilepic
       }))
     })
.catch(error=>alert(error))
    

   }


    const register =()=>{
      if(!name){
        return alert("Please enter a full name")
      }
      auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
        userAuth.user.updateProfile({
          displayName:name,
          photoUrl:profilepic
        })
        .then(()=>{
  dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoUrl:profilepic
  }))
        })
      }).catch(error=>alert(error))
        
    }
  return (
    <div className='login'>
      <img src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png' alt='logo'/>
    
    <form>
        <input value={name} onChange={e=>{setName(e.target.value)}} placeholder='Full name (required if registering)' type='text'/>
       <input value={profilepic}  onChange={e=>{setProfilepic(e.target.value)}} placeholder='Profile pic (optional' type='text'/>
       <input required value={email} onChange={e=>{setEmail(e.target.value)}} placeholder='Email' type='email'/>
       <input required value={password} onChange={e=>{setPassword(e.target.value)}} placeholder='Password' type='password'/>

       <button type='submit' onClick={loginToSubmit}>Sign In</button>
    
    
    </form>

    <p>Not a member? {''}
        <span className='login_register' onClick={register}>Register now</span>
    </p>
    
    </div>
  )
}

export default Login
