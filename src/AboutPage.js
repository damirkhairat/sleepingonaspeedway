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
const artistBioText = <div><div>Damir Khairat is a web crawler––ingesting and interpreting the mass of online data produced as byproducts of ideological and geopolitical violence. In turn, he uses this data to produce investigations on behalf of those affected by such violence. Currently a Research Technologist with the Digital Investigations Lab at Human Rights Watch, Khairat holds a BS in Computer Science from the University of Washington and an MA in Design from the Design Academy Eindhoven. Originally from Kazakhstan and the United States, he currently resides in London.</div></div>;

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
                <a href="https://docs.google.com/document/d/1Aoa3TtB7JHwlq6VbFykcicWjtx_quW1CGmkTIk5G7mA/edit?usp=sharing" target="_blank">CV</a><br />
            </div>
        </div>
    </div>)
}