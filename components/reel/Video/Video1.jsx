"use client"
import React,{userState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import "./Video1.css";
import ReactDom from "react-dom";
const Video1 = ({ channel, song, url, likes, comment, shares }) => {
    
   
    const handleClick=(e)=>{
        e.preventDefault();
        e.target.muted=!e.target.muted;
    }
    const handlescroll=(e)=>{
        let next=ReactDom.findDOMNode(e.target).parentNode.nextSibling
        if(next){
            next.scrollIntoView()
            e.target.muted=true
        }
    }
    return (
    <>
        {/* <video 
        className='videostyle' 
        src={url}
        onEnded={handlescroll}
        muted="muted"
        onClick={handleClick}
        loop
        

        /> */}

        <ReactPlayer className='p-10' url={url} />

      
    </>
  )
}

export default Video1