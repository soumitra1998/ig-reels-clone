import React from 'react';
import "./VideoFooter.css";
import Avatar from '@material-ui/core/Avatar';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
const VideoFooter = ({channel,avatarSrc,song,likes,shares,comments}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__sides">
                <div className="videoFooter__left">
                    <div className="videoFooter__text">
                        <Avatar alt="Remy Sharp" src={avatarSrc}  />
                        <h3>
                            {channel} . <button>Follow</button>
                        </h3>
                    </div>
                    <div className="videoFooter__ticker">
                        <MusicNoteIcon className="videoFooter__icon"/>
                        <Ticker mode="smooth">
                            {({index})=>(
                                <>
                                    <h1> {song}</h1>
                                </>
                            )}
                        </Ticker>
                    </div>
                </div>

            
                <div className="videoFooter__right">
                    <FavoriteBorderIcon/>
                    <p>{likes}</p>
                    <ChatBubbleOutlineIcon/>
                    <p>{comments}</p>
                    <TelegramIcon/>
                    <p>{shares}</p>
                    <MoreHorizIcon/>

                </div>
            </div>
           
           
                
           
        </div>
    )
}

export default VideoFooter
