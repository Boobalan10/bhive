import React, { useMemo } from 'react';
import PassCard from './PassCard';
import Assets from '../../Assets/Assest';

function SpaceCard({ Content }) {


    const DiscountData = useMemo(() => {
        return Object.entries(Content.day_pass_discounts_percentage).map(([key, obj]) => ({
            days: key,
            value: obj.value,
            message: obj.message

        })).filter(item => item.value > 0);
    }, [Content]);

    return (
        <div className='col-12 col-sm-12 col-lg-6 col-xl-4 mb-4 mb-sm-5'>
            <div className='card-sec'>
                <div className='card-top'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4>{Content.name}</h4>
                        <div className='distance-sec'>
                            <img src={Assets.DirectionIcon} alt="Distance-Icon" />
                            <small>6 Kms</small>
                        </div>
                    </div>
                </div>
                <div className='card-middle'>
                    <img src={Content.images[0]} alt="Workspace-Image" />
                </div>
                <div className='card-bottom'>
                    <div className='d-flex amount-sec'>
                        <PassCard BoxClr={'pass-gray'} PassType={'Day Pass'} Price={Content?.day_pass_price} />
                        <PassCard BoxClr={'pass-yellow'} PassType={'Bulk Pass'} Price={Content?.bulk_price} Discount={DiscountData || []} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpaceCard;
