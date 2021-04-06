import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectMail} from '../features/mailSlice'


function Maillist({id,title,subject,description,time}) {

    const history = useHistory(); const dispatch = useDispatch();
    const openMail = ()=>{
        dispatch(selectMail({
            id,title,subject,description,time
        }));
        history.push("/mail")   
    }

    
    return (
        <div onClick={openMail}  className='single-mail-list'>

            <div className='s-m-l-left'>
                <i class="far fa-square"></i>
                <i class="far fa-star"></i>
                <i class="fas fa-angle-double-right"></i>
            </div>

            <div className='s-m-l-right'>
                <h4>{title}</h4>
                <div className='grouped-text'>
                   <h5 className='gt-h'>{subject}<span>-{description}</span></h5>
                </div>
                <p>{time}</p>
            </div>

        </div>
    )
}

export default Maillist
