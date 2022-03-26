import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOption.css'

function HeaderOption({avatar , Icon , title, onClick}) {
  const user=useSelector(selectUser)

  const dispatch=useDispatch()
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_icon'/>}
     {avatar && (<Avatar className='headerOption_icon' src={user?.photoUrl} >{user?.email[0].toUpperCase()}</Avatar>)}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
