import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase.js'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'


function Feed() {
   const [posts, setPost]=useState([])
   const [input, setInput]=useState('')
   const user=useSelector(selectUser)

   useEffect(()=>{
       db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
         setPost(snapshot.docs.map((doc)=>({
           
             id:doc.id,
             data:doc.data(),
           
         })))
       }) ;
   },[])


   const sendPost=(e)=>{
    e.preventDefault();
    // sendPost()
    db.collection('posts').add({
      name:user.dispalyName,
      description:user.email,
      message:input,
      photoUrl:'',
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),

    })
    setInput('')
   }


  return (
    <div className='feed'>
     
      <div className='feed_inputContainer'>
          <div className='feed_input'>
              <CreateIcon/>
              <form>
                  <input value={input} onChange={e=>{setInput(e.target.value)}} type='text'/>
                  <button onClick={sendPost} type='submit'>Send</button>
              </form>

          </div>
          <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} title='photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
            <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />

          </div>

      </div>

      {/* Post */}

      <FlipMove>
    {posts.map(({id,data:{name,description, message,photoUrl, timestamp}})=>
    
    
    {
      return(
      <Post
       key={id}
       name={name}
       description={description}
       message={message}
       photoUrl={photoUrl}
       timestamp={timestamp}
       
      
      />)
      // console.log(photoUrl)
    })}
</FlipMove>

      {/* <Post name='Nsai' description='Test' message='WOw'/> */}
    </div>
  )
}

export default Feed
