import React, { useRef, useState } from 'react';
import "./VideoCard.css";
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

const VideoCard = ({channel,avatarSrc,song,url,likes,shares,comments}) => {
    const [isVideoPlaying,setIsVideoPlaying]=useState(false);
   const videoRef=useRef(null);
   const onVideoPress=()=>{
       if(isVideoPlaying){
           videoRef.current.pause();
           setIsVideoPlaying(false)

       }else{
           videoRef.current.play();
           setIsVideoPlaying(true);

       }
   }



    return (
        <div className="videoCard">
           <VideoHeader/>
            <video
                className="videoCard__player"
                ref={videoRef}
                onClick={onVideoPress} 
                src={url}
                alt="IG video"
                loop
            />
            <VideoFooter
                 channel={channel}
                 avatarSrc={avatarSrc}
                 song={song}
                 likes={likes}
                 shares={shares}
                 comments={comments}
            
            />
            
            
        </div>
    )
}

export default VideoCard
