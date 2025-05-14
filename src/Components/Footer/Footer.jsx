import React from 'react';

function Footer() {

    const CurrentYear = new Date().getFullYear();

    return (
        <section className='footer'>
            <p>&copy; Copyright {CurrentYear}. <a href="https://bhiveworkspace.com/" target="_blank" rel="noopener noreferrer">Bhive Private Limited</a></p>
        </section>
    )
}

export default Footer;
