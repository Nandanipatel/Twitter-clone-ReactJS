import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreOutlinedIcon from '@mui/icons-material/MoreOutlined';
import Button from '@mui/material/Button';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className='twitter-icon' />
            <SidebarOptions Icon={HomeOutlinedIcon} text="Home" active={true} />
            <SidebarOptions Icon={ExploreOutlinedIcon} text="Explore"  />
            <SidebarOptions Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
            <SidebarOptions Icon={MailOutlineOutlinedIcon} text="Messages" />
            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOptions Icon={ListAltOutlinedIcon} text="List" />
            <SidebarOptions Icon={PermIdentityOutlinedIcon} text="Profile" />
            <SidebarOptions Icon={MoreOutlinedIcon} text="More" />
            <Button variant="contained" className='sidebar_tweet'>Tweet</Button>

        </div>
    )
}

export default Sidebar