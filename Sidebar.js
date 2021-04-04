import React from 'react'
import {useDispatch} from 'react-redux'
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className='sidebar-bdy'>
          <div className='sidebar-list'>  
            <div className='sblist big' onClick={()=>dispatch(openSendMessage())}> 
                <i class="fas fa-plus"></i>
                <span>Compose</span>
            </div>
            <div className='sblist selected-list-sidebar'>
                <i class="fas fa-inbox"></i>
                <span>Inbox</span>
                <span>5</span>
            </div>
            <div className='sblist'>
                <i class="fas fa-star"></i>
                <span>Starred</span>
            </div>
            <div className='sblist'>
                <i class="far fa-clock"></i>
                <span>Snoozed</span>
            </div>
            <div className='sblist'>
                <i class="fas fa-angle-double-right"></i>
                <span>Important</span>
            </div>
            <div className='sblist'>
                <i class="fas fa-location-arrow"></i>
                <span>Sent</span>
            </div>
            <div className='sblist'>
                <i class="fas fa-folder-plus"></i>
                <span>Drafts</span>
            </div>
            <div className='sblist'>
                <i class="fas fa-caret-down"></i>
                <span>More</span>
            </div>
          </div>

         <div className='sb-minilist'>
            <i class="fas fa-user-alt"></i>
            <i class="fas fa-video"></i>
            <i class="fas fa-phone-alt"></i>
         </div>
        </div>
    )
}

export default Sidebar
