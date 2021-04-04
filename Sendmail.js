import React from 'react'
import './styles/Sendmail.css'
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux'
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase';
import firebase from 'firebase'

function Sendmail() {

    const dispatch = useDispatch(); 

    const {register,handleSubmit,watch,errors} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        db.collection('emails').add({
            to: data.to,
            subject : data.subject,
            message : data.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage)
    };

    return (
        <div className='sendmail'>

            <div className='sm-header'>
                <h4>New Message</h4>
                <i  onClick={()=>dispatch(closeSendMessage())} class="fas fa-times"></i> 
            </div>
                <form className='sm-form' onSubmit={handleSubmit(onSubmit)}>
                    
                    <input name='to' placeholder='To' type='email' ref={register({required:true})} />
                    {errors.to && <p>To is required</p>}
                    <input name='subject' placeholder='Subject' type='text' ref={register({required:true})}  />
                    {errors.subject && <p>Subject is required</p>}
                    <input className='threeinp' name='message' placeholder='Message' type='text' ref={register({required:true})} />
                    {errors.message && <p>Message is required</p>}
                    <button>Send</button>

               </form>
        </div>
    )
}

export default Sendmail
