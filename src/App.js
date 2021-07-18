
import React,{useEffect, useState} from 'react'; 
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [reels,setReels]=useState([]);

  useEffect(()=>{
   db.collection("reels").onSnapshot(snapshot=>(
    // console.log("snapshot",snapshot.docs.map(doc=>(doc.data())))
     setReels(snapshot.docs.map(doc=>(doc.data())))
   ))
  },[]);
 console.log("reels",reels)


  return (
    <div className="app">
      <div className="app__top">
        <img 
          className="app__logo"
          src="https://firebasestorage.googleapis.com/v0/b/instagram-reels-21ae9.appspot.com/o/logo.png?alt=media&token=9bd5e9b1-0935-4dc6-a79a-c4ffc40c2e0f"
          alt="logo" />
          <h1>Reels</h1>

      </div>
      <div className="app__videos">
        {
          reels.map(({channel,avatarSrc,song,url,likes,shares,comments})=>(
            <VideoCard
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
              comments={comments}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
