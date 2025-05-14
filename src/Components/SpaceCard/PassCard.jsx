import React from 'react';

function PassCard({ BoxClr, PassType, Price, Discount }) {

    return (
        //pass-gray pass-yellow//
        <div className={`pass-card ${BoxClr}`}>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='left-content'>
                    <p>{PassType}</p>
                    {Discount ? (
                        <>
                            <h4>₹ {Price}<small> /{Discount !== undefined ? Discount[0]?.days : ''}Days</small></h4>
                            <span className='discount-number'>{Discount !== undefined ? Discount[0]?.value : ''} Discount</span>
                        </>

                    ) : (
                        <h4>₹ {Price}<small> /Day</small></h4>
                    )
                    }
                </div>
                <div className='right-content'>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
        </div >
    )
}

export default PassCard;
