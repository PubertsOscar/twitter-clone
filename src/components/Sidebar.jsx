import React from 'react'
import '../componentsCSS/Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Search } from "@mui/icons-material";
import SidebarOption from './SidebarOption';
import Home from '@mui/icons-material/Home'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { Button } from '@mui/material';

function Sidebar() {
  
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOption active text="Home" Icon={Home}/>
        <SidebarOption text="Explore" Icon={Search}/>
        <SidebarOption text="Notifications" Icon={NotificationsNoneOutlinedIcon}/>
        <SidebarOption text="Messages" Icon={EmailOutlinedIcon}/>
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderOutlinedIcon}/>
        <SidebarOption text="Lists" Icon={ArticleOutlinedIcon}/>
        <SidebarOption text="Profile" Icon={PersonOutlineOutlinedIcon}/>
        <SidebarOption text="More" Icon={PendingOutlinedIcon}/>
        <Button variant='outlined' className="sidebar__tweet" fullWidth >Tweet</Button>
        </div>
  )
}

export default Sidebar