import React, { useContext, useEffect } from 'react';
import Assets from '../Assets/Assest';
import BannerMain from '../Components/BannerSection/BannerMain';
import FacilityContent from '../Components/Faciality/FacialityContent';
import FacialityCard from '../Components/Faciality/FacialityCard';
import SpaceCard from '../Components/SpaceCard/SpaceCard';
import DownloadSection from '../Components/DownloadSection/DownloadSection';
import { GetAPI } from '../Api/Api';
import AppContext from '../Context/AppContext';

function HomeView() {

    const { spaceData, setSpaceData } = useContext(AppContext)

    const url = '/data.json';

    useEffect(() => {
        const CollectData = async () => {
            const response = await GetAPI({ url })
            setSpaceData(response.data)
        };
        CollectData();
    }, []);

    return (
        <section className='home-main'>
            <div className='banner-main'>
                <BannerMain Content={'Host your meeting with world-class amenities. Starting at '} ClrContent={'₹199/-!'} BannerImg={Assets.BannerImage} />
            </div>
            <div className='custom-container'>
                <section className='common-top-space facilaity-main'>
                    <h2>Why Choose us? <img src={Assets.Arrow} alt="Arrow-Image" className='d-block d-sm-none arrow-head' /></h2>
                    <div className='row mx-0'>
                        {FacilityContent.map((data) => (
                            <FacialityCard key={data.id} Content={data} />
                        ))}
                    </div>
                </section>
                <section className='common-top-space space-main'>
                    <h2>Our Space Overview <img src={Assets.Arrow} alt="Arrow-Image" className='d-block d-sm-none arrow-head' /></h2>
                    <div className='row'>
                        {spaceData.map((data) => (
                            <SpaceCard key={data.id} Content={data} />
                        ))}
                    </div>
                </section>
                <section className='common-top-space app-download-main'>
                    <h2>Download our app now <img src={Assets.Arrow} alt="Arrow-Image" className='d-block d-sm-none arrow-head' /></h2>
                    <DownloadSection />
                </section>
            </div>
        </section>
    )
}

export default HomeView;
