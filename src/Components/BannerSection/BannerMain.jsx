import React from 'react';
import Assets from '../../Assets/Assest';

function BannerMain({ Content, ClrContent, BannerImg }) {
    return (
        <section className='banner-sec'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-lg-8 order-2 order-lg-1'>
                    <div className='bg-diamond'>
                        <h1>{Content} {ClrContent && <span className='clr-content'>{ClrContent}</span>}</h1>
                        <img src={Assets.DiamondShape} alt="Diamond-Banner" />
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-lg-4 order-1 order-lg-2'>
                    <div className='banner-right-content'>
                        <img src={Assets.DiamondBanner} alt="" className='bg-yellow-diamond' />
                        <div className='banner-man-image'>
                            <img src={BannerImg} alt="Banner-Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerMain;
