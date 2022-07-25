import React, { useState, useEffect } from 'react';
import './Feed.css';
import TwittBox from './TwittBox';
import Post from './Post';
import { db } from "./Firebase";
import Flipmove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))

  }, []);

  return (
    <>
      <div className='feed'>
        <div className='feed-header'>
          <h2> HOME</h2>
        </div>
        <TwittBox />
        <Flipmove>
        {posts.map((post) =>
          <Post
          key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        )}
        </Flipmove>
      </div>
    </>
  )
}

export default Feed