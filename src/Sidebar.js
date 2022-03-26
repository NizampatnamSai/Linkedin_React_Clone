import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'
function Sidebar() {
 
   const user=useSelector(selectUser)
console.log(user.dispalyName)


const recentItem =(topic)=>{
  return (
  <div className='sidebar_recentItem'>
    <span className='sidebar_hash'>
     #
    </span>
    <p>{topic}</p>

  </div>)
}

  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
<img src='https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1185382671?k=20&m=1185382671&s=612x612&w=0&h=QvHSiV0uDYhl69m1rpIt0aYbk4vmpl9kjVcfkMkgyfw='/>
        
        <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0].toUpperCase()}</Avatar>
        <h2>{user.dispalyName}</h2>
        <h4>{user.email}</h4>
        </div>

        <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed u </p>
            <p className='sidebar_statnumber'>8587
            </p>
        </div>
        <div className='sidebar_stat'>
        <p>views on post </p>
            <p className='sidebar_statnumber'>8588
            </p>
        </div>




        </div>

        <div className='sidebar_bottom'>
            <p>Recent</p>

            {recentItem("reactjs")}
            {recentItem('web developer')}
            {recentItem('programming')}
            {recentItem('Frontend web')}
            {recentItem('softwere engineering')}
            

        </div>
     
    </div>
  )
}

export default Sidebar
