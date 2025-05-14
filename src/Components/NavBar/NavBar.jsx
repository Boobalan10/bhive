import React from 'react';
import Assets from '../../Assets/Assest';

function NavBar() {

    return (
        <section className='custom-container'>
            <div className='row justify-content-between mx-0'>
                <div className='logo-sec'>
                    <img src={Assets.Logo} alt="Logo-Img" />
                </div>
                <div className='call-icon text-right'>
                    <a href="tel:+8940922797">
                        <img src={Assets.CallIcon} alt="Call-Icon-Img" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default NavBar;
