import React from 'react'

function Redvedprops(props) {
    return (
        <div className='recved-card'>
            <img className='rec-ved-img' src={} />
            <div className='recved-data'>
                <div className='dt-icon'>
                    <img src={props.icon} />
                </div>
                <div className='dt-text'>
                    <h3>
                       {props.info}
                    </h3>
                    <h5>{props.sng}</h5>
                   <div className='det-span'> <span>{props.view}</span><span>{props.date}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Redvedprops
