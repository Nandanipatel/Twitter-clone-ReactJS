import React from 'react'
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widget-input'>
                <SearchOutlinedIcon className='widget-searchIcon' />
                <input placeholder='Search Twitter' type="text" />
            </div>
            <div className='widget-container' >
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1458672523730571264"} />
                <TwitterTweetEmbed tweetId={'1466021770670972939'} />
                <TwitterTimelineEmbed sourceType='profile' screenName='Nandani_1406'
                    options={{ height: 400 }} />

                 <TwitterShareButton url={"https://twitter.com/Nandani_1406"}
                 options={{ text:"Twitter clone is in progress" , via: "Nandani_1406"}} />   
            </div>
        </div>
    )
}

export default Widgets