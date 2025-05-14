import React from 'react';

function FacialityCard({ Content }) {

    return (
        <div className='col-6 col-lg-3'>
            <div className='faciality-sec'>
                <div className={`row box-sec 
                ${Content.id > 4 ? 'border-bottom-remove' : ''}
                ${Content.id === '4' || Content.id === '8' ? 'border-right-remove' : ''}`}>
                    <img src={Content.image} alt="Facility-Icon" />
                    <p>{Content.name}</p>
                </div>
            </div>
        </div>
    )
}

export default FacialityCard;
