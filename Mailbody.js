import React,{useState,useEffect} from 'react'
import Maillist from './Maillist'
import './styles/Mailbody.css'
import {db} from '../firebase'

function Mailbody() {

    const [emails, setEmails] = useState([])

    useEffect(()=>{
        db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot =>
            setEmails(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data(),
            }))))
    },[]);

    return (
        <div className='mail-bdy'>
           
          <div className='left-right'> 
            <div className='left-i'>
                <i class="far fa-square"></i>
                <i class="fas fa-caret-down"></i>
                <i class="fas fa-redo"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>
            <div className='right-i'>
                <i class="fas fa-angle-left"></i>
                <i class="fas fa-angle-right"></i>
                <i class="fas fa-keyboard"></i>
                <i class="fas fa-cog"></i>
            </div>
          </div>

            <div className='sec-type-mail'>
                <div className='mail-type primary selected-mail-type'>
                    <i class="fas fa-inbox"></i>
                    <span>Primary</span>
                </div>
                <div className='mail-type social'>
                    <i class="fas fa-user-friends"></i>
                    <span>Social</span>
                </div>
                <div className='mail-type promotions'>
                    <i class="fas fa-tag"></i>
                    <span>Promotions</span>
                </div>
            </div>

            <div className='mails-list-box'>
                {emails.map(({id,data:{
                    to,subject,message,timestamp
                }}) => (
                    <Maillist
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>

        </div>
    )
}

export default Mailbody
