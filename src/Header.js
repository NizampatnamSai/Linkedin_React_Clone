import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Chat from '@material-ui/icons/Chat';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';





function Header() {

  const dispatch=useDispatch()
  const logoutofApp=()=>{

    dispatch(logout())
    auth.signOut()
  }


  return (
    <div className='header'>
    {/* <h1> Header</h1>  */}
    <div className='header_left'>
<img src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png' alt='logo'/>


<div className='header_search'>
    <SearchIcon/>
    <input placeholder='Search' type='text'/>
</div>

    </div>
    <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>


<HeaderOption avatar='https://lh3.google.com/u/0/ogw/ADea4I5vNNN80wn5Syeg5SngmpwiqmTcR1HuBeAwEvoS=s32-c-mo' title='me' onClick={logoutofApp} />
    
    
    </div>


    </div>
  )
}

export default Header
