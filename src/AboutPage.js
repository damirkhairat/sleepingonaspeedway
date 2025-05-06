import React, { useState } from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import FacesVideo from '../src/assets/split_frames/icouldnthelpbutlook2.mp4'
import {isMobile} from 'react-device-detect';

function importAll(r) {
    let sortedKeys = r.keys().sort()

    let images = {};
    sortedKeys.map((item, index) => { return images[index] = r(item); });

    return images;
}

const images = importAll(require.context('./assets/split_frames', false, /\.jpg/));
const artistBioText = <div>Damir Khairat is researcher who specialises in ingesting and interpreting masses of online data produced as byproducts of ideological and geopolitical conflict. In turn, he uses this data to investigate on behalf of those affected by such violence. Khairat is currently a Research Technologist with the Digital Investigations Lab at Human Rights Watch. He resides in London.</div>;

export default function AboutPage() {
    const [hoverIndex, setHoverIndex] = useState(93);

    return (<div id="about-page">
        {!isMobile && <div id='scroll-markers-container'>
            {
                Object.keys(images).map((key, i) => {
                    return <div key={key} id={key} className='scroll-marker' onMouseEnter={() => { setHoverIndex(i) }} />
                })
            }
        </div>}
        <div id="about-page-content">
            {!isMobile && <div id="cover-images">
                {
                    Object.keys(images).map((key, i) => {
                        return <img src={images[i]} key={i} className={hoverIndex === i ? 'cover-image' : 'cover-image hidden-cover-image'} alt="I cant close my eyes" />
                    })
                }
            </div>}

            {isMobile && <video playsInline id='cover-images-video' muted="true" autoPlay loop>
                <source src={FacesVideo} type="video/mp4" />
            </video>
            }

            <div id="cover-image-caption">
                <i>I couldn't help but watch</i>
            </div>
            <div id="artist-bio-text">
                {'***'}
                <br />
                <div id="bio-main-text">{artistBioText}</div>
                <br />
            </div>
            <div id="contact-links">
                <Link className='contact-link' to='mailto:damirkhairat@gmail.com' target='_blank'>damirkhairat@gmail.com</Link><br />
            </div>
        </div>
    </div>)
}