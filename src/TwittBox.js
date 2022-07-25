import React, { useState } from 'react';
import './TwittBox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { db } from './Firebase';

function TwittBox() {
  const [twittMessege, setTwittMessege] = useState("");
  const [twittImage, setTwittImage] = useState("");

  const setTwitt = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Nandani__",
      userName: "nandani_",
      verified: true,
      text: twittMessege,
      avatar: './Images/user.jpg',
      image: twittImage,
    });

    setTwittImage("");
    setTwittMessege("");
  }
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox-input'>
          <Avatar alt="Nandani Patel" src="./Images/user.jpg" />
          <input
            onChange={(e) => setTwittMessege(e.target.value)}
            value={twittMessege}
            placeholder="What's Happening !!" type="text" />
        </div>
        <input
          onChange={(e) => setTwittImage(e.target.value)}
          value={twittImage}
          className='tweetbox-inputImg'
          placeholder=" Optional: Enter image URL here..."
          type="text" />
        <Button onClick={setTwitt} variant="contained" className='feed-tweet-btn'>Tweet</Button>
      </form>
    </div>
  )
}

export default TwittBox