import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles/Mailopen.css'
import { selectOpenMail } from '../features/mailSlice'


function Mailopen() {

    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
   


    return (
        <div className='mail-open'>

        <div className='mail-open-header'>
            <div className='micns-left'>
                <i onClick={()=>history.push('/')} class="fas fa-arrow-left"></i>
                <i class="fas fa-inbox"></i>
                <i class="fas fa-info-circle"></i>
                <i class="fas fa-trash"></i>
                <i class="fas fa-envelope"></i>
                <i class="fas fa-clock"></i>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-angle-double-right"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>

            <div className='micns-right'>
                <i class="fas fa-angle-double-down"></i>
                <i class="fas fa-print"></i>
                <i class="fas fa-sign-out-alt"></i>
            </div>
        </div>

            <div className='m-o-matter'>
               <div className='m-o-matter-head'>  
                <h4>{selectedMail?.subject}</h4>
                <i class="fas fa-angle-double-right"></i>
                <p>{selectedMail?.title}</p>
                <span>{selectedMail?.time}</span>
               </div>
                <p className='m-o-matter-c'>{selectedMail?.description}</p>
            </div>

        </div>
    )
}

export default Mailopen;
