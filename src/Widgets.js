import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {


   const newsArticle=(heading, subtitle)=>{ return(
       <div className='widgets_article'>

           <div className='widgets_articleLeft'>
       <FiberManualRecordIcon/>
           </div>
           <div className='widgets_articleRight'>
      <h4>{heading}</h4>
      <p>{subtitle}</p>
           </div>
           <br></br>

       </div>)
   }

  return (
    <div className='widgets'>
      <div className='widgets_headers'>
          <h2>LinkedIn News</h2>

          <InfoIcon/>

      </div>

      {newsArticle("NSai Project!!",'@NIT SIKKIM')}
      {newsArticle("Corana Cases are raising from Yesterday!",'Cases : Around 12,000')}
      {/* {newsArticle("TY Jesus for this!!",'✝🥳🙏')} */}
      {newsArticle("Project with React!",'With Redux + Firebase + MaterialUI')}
      {newsArticle("Offline Classes are going to start from",'4th April 2022!')}



    </div>
  )
}

export default Widgets
