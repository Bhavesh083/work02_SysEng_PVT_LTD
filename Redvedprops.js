import React from 'react'

function Redvedprops(props) {
    return (
        <div className='recved-card'>
            <img className='rec-ved-img' src={} />
            <div className='recved-data'>
                <div className='dt-icon'>
                    <img src={} />
                </div>
                <div className='dt-text'>
                    <h3>
                       {}
                    </h3>
                    <h5>{}</h5>
                   <div className='det-span'> <span>{}</span><span>{}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Redvedprops
