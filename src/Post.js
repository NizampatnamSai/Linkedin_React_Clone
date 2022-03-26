import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'


function Post({name, description, message, photoUrl, timestamp}) {
  return (
    <div className='post'>
      <div className='post_header'>
      <Avatar src={photoUrl}/>
         <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
         </div>
      </div>


      <div className='post_body'>
     <p>{message}</p>
     {/* <small>{timestamp}</small> */}

     <div className='post_buttons'>
  {/* <InputOption /> */}
  <InputOption Icon={ThumbUpAltOutlinedIcon} title='like' color='gray' />
  <InputOption Icon={ChatOutlinedIcon} title='like' color='gray' />
  <InputOption Icon={ShareOutlinedIcon} title='like' color='gray' />
  <InputOption Icon={SendOutlinedIcon} title='like' color='gray' />
     
     </div>

      </div>
    </div>
  )
}

export default Post
