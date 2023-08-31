import React from 'react';
import './title.css';
import { Link } from 'react-router-dom';
const Title=({title})=>{
    return(
      <>
      <div className='title_nav'>
      <Link to='/home'>ZamyApp</Link> / <span>{title}</span>
      </div>
      </>
    )
}
export default Title;