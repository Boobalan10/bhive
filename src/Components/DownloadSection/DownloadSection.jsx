import React from 'react';
import Assets from '../../Assets/Assest';

function DownloadSection() {
    return (
        <div className="download-section">
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-5'>
                    <div className="download-left">
                        <img src={Assets.DownloadImage} alt="Download-Section" />
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                    <div className="download-right">
                        <p className='d-none d-md-block'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
                        <div className="store-buttons d-flex">
                            <a href="https://bhiveworkspace.com/" target="_blank" rel="noopener noreferrer"><img src={Assets.PlayStore} alt="GooglePlay" /></a>
                            <a href="https://bhiveworkspace.com/" target="_blank" rel="noopener noreferrer"><img src={Assets.AppStore} alt="AppStore" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;
