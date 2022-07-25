import React, {forwardRef} from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const Post = forwardRef(({ displayName,
    userName,
    verified,
    text,
    image,
    avatar,
}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className='post-avatar'>
                <Avatar alt="Nandani Patel" src={avatar} />
            </div>
            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-headertext'>
                        <h3>{displayName} {" "} 
                        <span className='post-headerSpecial'>{ verified && <VerifiedIcon className='post-verified' />}
                            @{userName} 
                        </span>
                        </h3>
                    </div>
                    <div className='post-headerDescription'>
                        <p>{text}</p>
                    </div>
                    <img src={image} />
                    <div className='post-footer'>
                        <CommentOutlinedIcon fontSize='small' />
                        <RepeatOutlinedIcon fontSize='small' />
                        <FavoriteBorderOutlinedIcon fontSize='small' />
                        <IosShareOutlinedIcon fontSize='small' />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Post