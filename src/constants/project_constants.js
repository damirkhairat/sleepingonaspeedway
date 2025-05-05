import React from "react";

import GulfWarIllnessCoverPhoto from '../assets/gulf war illness/gulfwarillness_cover.jpg';
import GulfWarIllnessCoverVideo from '../assets/gulf war illness/gulfwarillness_cover.mp4';
import GulfWarIllnessImage1 from '../assets/gulf war illness/web collection/gulfwarillness_1_1.jpg'
import GulfWarIllnessImage3 from '../assets/gulf war illness/web collection/gulfwarillness_image3.jpg'
import GulfWarIllnessImage4 from '../assets/gulf war illness/web collection/gulfwarillness_image4.jpg'

import FatherStephenCoverPhoto from '../assets/father stephen/fatherstephen_cover.png';
import FatherStephenCoverVideo from '../assets/father stephen/fatherstephen_cover.mp4';
import FatherStephenImage1 from '../assets/father stephen/web collection/fatherstephen_image1.jpg';
import FatherStephenImage2 from '../assets/father stephen/web collection/fatherstephen_image2.jpg';
import FatherStephenImage3 from '../assets/father stephen/web collection/fatherstephen_image3.jpg';
import FatherStephenImage4 from '../assets/father stephen/web collection/fatherstephen_image4.jpg';

import MotherCoverPhoto from '../assets/mother/mother_cover.jpg';
import MotherCoverVideo from '../assets/mother/mother_cover.mp4';
import MotherImage1 from '../assets/mother/web collection/mother_image1.jpg'

import WeDoItAllTheTimeCoverImage from '../assets/We do it all the time/wedoitallthetime_cover.jpg';
import WeDoItAllTheTimeCoverVideo from '../assets/We do it all the time/wedoitallthetime_cover.mp4';
import WeDoItAllTheTimeImage1 from '../assets/We do it all the time/web collection/wdiatt_image1.jpg';
import WeDoItAllTheTimeImage2 from '../assets/We do it all the time/web collection/wdiatt_image2.jpg';
import WeDoItAllTheTimeImage3 from '../assets/We do it all the time/web collection/wdiatt_image3.jpg';
import WeDoItAllTheTimeImage6 from '../assets/We do it all the time/web collection/wdiatt_image6.jpg';
import WeDoItAllTheTimeImage8 from '../assets/We do it all the time/web collection/wdiatt_image8.jpg';
import WeDoItAllTheTimeImage9 from '../assets/We do it all the time/web collection/wdiatt_image9.jpg';

const GulfWarIllnessVideo3 = (<div className='embed-responsive-parent' id='gulf-war-illness-video1-parent'><iframe className="embed-responsive-item" src="https://www.youtube.com/embed/wk1H-OuTvos?si=7R3vXifQ32rLgOVw" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const GulfWarIllnessVideo4 = (<div className='embed-responsive-parent' id='gulf-war-illness-video2-parent'><iframe className="embed-responsive-item" src="https://www.youtube.com/embed/pxmj0zpSDIs?si=NhTV7p8e7xi8PPza" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const FatherStephenVideo1 = (<div className='embed-responsive-parent' id='father-stephen-video1-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859296717?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const MotherVideo1 = (<div className='embed-responsive-parent' id='mother-video1-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859296871?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const MotherVideo2 = (<div className='embed-responsive-parent' id='mother-video2-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859296979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);
const WeDoItAllTheTimeVideo1 = (<div className='embed-responsive-parent' id='wdiatt-video1-parent'><iframe className="embed-responsive-item" src="https://player.vimeo.com/video/859297173?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="fatherstephen_video1"></iframe></div>);

export const projects = [
    {
        id: "gulf-war-illness",
        image_src: GulfWarIllnessCoverPhoto,
        video_src: GulfWarIllnessCoverVideo,
        name: "Gulf War Syndrome",
        isOnGoing: false,
        year: 2023,
        data_origin: ["Yuma, USA/Baghdad, Iraq"],
        forums: ["Kinetic installation", "archive", "documentary"],
        description: "This installation reproduces the facilities of YPG––a US military test-site in Arizona which simulates Middle Eastern climate. This mock-facility demonstrates how respiratory systems in Iraq and Arizona suffer parallel harms due to analogously hostile climates and military activity. Moreover, the project speculates how YPG assets could be reappropriated to produce mutualistic computation favoring the vulnerable in both regions.",
        long_description: '<b>i. Project context</b><br/><p>Situated in the expansive deserts of Southwestern Arizona, the US Army Yuma Proving Ground (YPG) is one of the largest military test sites in the world. The selection of this location is the result of extensive studies to find terrains that are analogous to Middle Eastern deserts, where the US has been active militarily for thirty years. Here, a despotic system of production creates weapons that master and make use of desert climates.</p><p>Despite US soil being used to simulate <i>future conflict</i>, the analogous climate and in turn, analogous climate change-related hostilities in the American Southwest and Middle East produce a <i>shared precarity</i> for bodies on opposing ends of these simulations. <i>Gulf War Illness</i> is a body of research comprising case studies which explore and articulate a set of chronic conditions being experienced globally by respiratory systems in similar harsh desert climates. Largely, these studies are situated in two cities––Yuma, home to YPG, and Baghdad––where these shared conditions are exacerbated by US military activity and training.</p><br/><b>ii. Installation</b><br/><p>The research of <i>Gulf War Illness</i> manifests through an installation in which a film narrating these case-studies is screened within a loosely-reproduced YPG facility. This mock-facility features a <i>dust aggravation chamber</i>, a system commonly used at YPG to ensure weapon durability by exposing them to simulations of dust storms. This chamber provides a three-dimensional layer to the film, presenting the climate-conditions it narrates in real-time.</p><p>In contrast to the weapons tested at YPG, the device tested in <i>this</i> dust aggravation chamber is a low-cost medical ventilator. Such medical devices are used to treat extreme respiratory issues, ailments which will certainly increase in prevalence as climate conditions in Yuma and Baghdad deteriorate. Similarly synchronized with the film, this ventilator is an artificial stand-in for the respiratory systems of individuals featured in the case studies––imitating how one under these conditions would breathe and at times, struggle and fail to.</p><p>The ventilator used in this project has an unconventional build, using a combination of open-source assets and declassified YPG weapon design documents relating to dust. Thus, while this device is representative of the respiratory systems in these climates, it underscores the stark discrepancy between the machines optimized for these environments and the bodies that are forced to endure them. Yet, in leveraging weapon design documents to build a medical device, the aim of <i>Gulf War Illness</i> is to speculate how YPG assets could be reappropriated––producing an alternative conclusion to that of YPG’s original architects.</p><p>Considering, could such assets be leveraged to produce mutualistic computation where the vulnerable in <i>many regions</i> become tightly networked beneficiaries, rather than in favor of a single despot? Thinking more broadly, analogous conditions exist in many contexts globally and thus, could such a model be reproducible and multiplicious?</p>',
        visual_content: [
            {
                content: GulfWarIllnessVideo4,
                type: "vimeo-video"
            },
            {
                src: GulfWarIllnessImage1,
                description: "Mechanical ventilator and dust aggravation chamber",
                type: "image"
            },
            {
                content: GulfWarIllnessVideo3,
                description: "Early draft of the film component in <i>Gulf War Illness</i>. In its current form, this essay-film explores how respiratory systems in Yuma and Iraq face parallel precarity as a result of analogous climate hostilities and nearby military activity. Given this shared experience, the film highlights how current climate change models expose a morbid irony in the ways in which Yuma’s climate has been leveraged to build weapons which have historically decimated Baghdad.",
                type: "vimeo-video"
            },
            {
                src: GulfWarIllnessImage3,
                description: "This project included downloading, parsing, and sorting existing declassified military research from YPG. Pertinent topics have been: analogous climates, management of desert hostilities, as well as innovation in response to these hostilities, to name a few. This has produced a baseline archive of documents, which I developed a meaningful archive-structure and tagging system for. Future value for such documents could include evaluating the relevance and application of this research for regular individuals, as well as, additional channels for such documents to be sourced and eventually dispersed. Of course, this extends beyond the desert, where analogous climates exist in numerous global contexts. At its core, this project explores how such assets can be leveraged to produce mutualistic computation where the vulnerable in many regions become tightly networked beneficiaries, rather than in favor of a single despot such as the US military.",
                type: "image"
            },
            {
                src: GulfWarIllnessImage4,
                description: "There are various documented military technologies within this growing archive of research used to track dust and model its impact, including GIS modeling systems. With this, how might these technologies be repurposed for general use?",
                type: "image"
            }

        ]
    },
    {
        id: "father-stephen",
        image_src: FatherStephenCoverPhoto,
        video_src: FatherStephenCoverVideo,
        name: "Father Stephen Lesniewski",
        isOnGoing: false,
        year: 2022,
        data_origin: ["Chicago, USA"],
        forums: ["AV sculpture", "Language model"],
        description: "In the early 2000s, Father Stephen Lesniewski, a relatively unknown Chicago priest, used the voice recording of a child and a stack of CD-ROMs to create what is now a viral anti-abortion ‘character’. In this installation, a language model strips the imagined reality of Lesniewski’s rhetoric––one dependent on an emotional appeal from a character that could never be real.",
        long_description: "<p>Father Stephen Lesniewski is a Chicago-based priest and ardent abortion access opponent who has been active since the early 1990s. Though relatively unknown, Lesniewski’s name appears alongside the earliest mentions online of the “Letter from an Unborn Child”––a viral form of anti-abortion content which is frequently shared amongst right-wing circles. The “letter” is written from the perspective of an aborted child speaking to its mother.</p><p><a href=\"https://wng.org/articles/letter-from-an-aborted-child-1617287857\" target=\"_blank\">According to a number of evangelical journals,</a> this letter was written by the priest or a member of his parish in the early 2000s. Shortly thereafter, Lesniewski recorded an eight year old child reading the letter and began distributing CD copies of this audio outside of abortion clinics. The audio is disturbing, creating a character that, at its core, effectively masks its middle-aged author. </p><p>In the decades since, <a href=\"https://www.youtube.com/@fatherstephen6925/videos\" target=\"_blank\">Lesniewski has also recorded and uploaded dozens of digital sermons to his YouTube channel.</a> Each video, running nearly half an hour, is full of gaffes, non sequiturs, unintelligible comments and factual errors. They are unlike the audio recording of the “Letter from the Unborn Child,” which is to say they don’t conceal Lesniewski’s voice behind a character, instead presenting the priest and his ideologies bare.</p><p>This installation is an explicit representation of how Lesniewski projected his incoherent oration onto an illusory character––one which he depended on for emotional appeal. Here, a hyper-realistic  baby/doll––representing the fictional character Stephen Lesniewski created––watches Lesniewski’s sermons on a television and translates them into similar phrases from the “Letter from an Unborn Child.” This works through a call and response system, where the baby actively listens for phrases and responds using Natural Language Processing semantic matching techniques.</p><p>The letter and the priest's manipulation of it signifies a rudimentary prelude to the current landscape of methods used by political operatives. Namely, in which content production and technology are used beyond misinformation, but to achieve emotional appeal by distorting the very nature of reality––creating an <i>imaginary</i> under which their arguments are more tenable. With the recording of a child, the imaginary that Lesniewski created was the existence of “Unborn Child” itself, which having never been born, could only ever have <i>truly lived</i> in his dreams. Today, this kind of reality-production has exponentiated, occurring at the high octane churn of content production––where audiences are immersed in imaginaries which have only grown in sophistication since Lesniewski.</p>",
        visual_content: [
            {
                src: FatherStephenImage1,
                description: "Installation setup. The baby/doll watches and translates Stephen Lesniewski's sermons, which play in the background.",
                type: "image"
            },
            {
                content: FatherStephenVideo1,
                description: "Installation preview and context",
                type: "vimeo-video"
            },
            {
                src: FatherStephenImage2,
                description: "",
                type: "image"
            },
            {
                src: FatherStephenImage3,
                description: "",
                type: "image"
            },
            {
                src: FatherStephenImage4,
                description: "",
                type: "image"
            }
        ]
    },
    {
        id: "mother",
        image_src: MotherCoverPhoto,
        video_src: MotherCoverVideo,
        name: "portrait of mother",
        isOnGoing: false,
        year: 2022,
        data_origin: ["Seattle, USA"],
        forums: ["Kinetic sculpture"],
        description: "A portrait of my mother using the kind of private data she provides medical institutions. Using an ML generated model, based on actual vitals measured from her, these machines pump and breath at the (generated) rate that my mother’s heart and lungs did on 22/02/22. A portrait in the form of a clock, running everyday and reliving 22/02/22 forever.",
        long_description: "<p>A contemplation of the kind of specters that have been scraped from our existence and retained to live online. As well as the degrees to which different means of data collection retain or disfigure the images that our loved ones can piece together from these spectres.</p><p>This installation is a fictional scenario, approaching these contemplations from a P2P model of data ownership. Where after losing someone for whom I am a beneficiary, I might be granted access to a digital server bearing extensive traces of them. Among these spectres, could be medical logs that under today’s data collection standards, are stored by your provider and thus inaccessible to dependents. Using data from the locker and spare parts I find in my shed––motors, gears, pulleys and string––I might be able rebuild an image of this person’s experience. <i>Not trying to bring them back</i>, but rather painting a portrait using their vitals to remember how their heart raced, the times it dropped and the moments their lungs filled and filled and filled.</p><p>To create this scenario, the fictional medical data was supplied by my own mother. I asked her to record her vitals every half hour on the 22nd of February 2022, which I then ran a model on to generate a 24 hour image of her heart and breathing rate. This information powers a couple of machines––a mechanical heart and lungs.</p><p>Thus, if you looked at these machines at this moment, they’d be pumping and breathing at the (generated) rate that my mother’s heart and lungs did at the same time on the 22nd of February. A portrait of my mother in the form of a clock, running everyday and reliving 22/02/22 forever.</p>",
        visual_content: [
            {
                src: MotherImage1,
                type: "image"
            },
            {
                content: MotherVideo1,
                description: "Installation preview",
                type: "vimeo-video",
            },
            {
                content: MotherVideo2,
                description: "A stream of my mother's generated vitals from the 22nd of February 2022 overlaid with a voice recording she recorded the same day.",
                type: "vimeo-video",
            }
        ]
    },
    {
        id: "we-do-it-all-the-time",
        image_src: WeDoItAllTheTimeCoverImage,
        video_src: WeDoItAllTheTimeCoverVideo,
        name: "We do it all the time",
        isOnGoing: false,
        year: 2021,
        data_origin: ["A Google server, somewhere"],
        forums: ["Programmatic film", "sculpture", "thesis"],
        description: "Highway Hypnosis is a phenomenon where a person driving <i>stretches of repetitive scenery</i> has no recollection doing so. This film uses Highway Hypnosis as a metaphor to explore how computational transactions define ‘crisis.’ The film renders programmatically, updating its visuals to feature crises in my recent web history––suggesting that through a stream of <i>interchangeable scenery</i>, just like on the road, we’ve fallen asleep at the wheel.",
        long_description: "<p><b>i. <i>We do it all the time</i> (film)</b></p><p>Isn’t unpredictability what keeps our eyes open?</p><p><i>Highway hypnosis</i> is a phenomenon occurring on roads with <i>only one type of visual scenery</i> in which a person can drive great distances with no recollection of having done so. One moment you’re on the highway and the next you’re blankly sitting outside your destination; half an hour of driving reduced to a blip––the distance you’ve driven and a slightly emptier tank as the only proof of the gaping hole in your memory.</p><p><i>We do it all the time</i> is an essay film which uses highway hypnosis as metaphor to explore how contemporary computing has redefined our understanding and experience of crisis. The film proposes the ‘transactional crisis,’ where related crises are disjointed and expressed as seemingly isolated units with a transactional solution––a click, a share, a donation. Under this disjointed view of crises, digital content––such as GoFundMe requests for medical bills––are so commonplace that the posts themselves, <i>like a singular roadside scenery,</i> have developed a shared vernacular and visual language.</p><p>To make this point clear, <i>We do it all the time</i> is a film that generates dynamically. Prior to each run, a program parses my web history and updates the film’s visuals content with videos of crises that I have recently viewed. Thus, each runtime is different––collaging videos which reference different events, but are stylistically similar. Thus, in all of the sameness that these different videos produce, the film’s argument remains the same: that through an unending stream of interchangeable crises, we’ve fallen asleep on the wheel.</p><br/><p><b>ii. <i>Sing about me, I’m dying of thirst</i> (thesis)</b></p>",
        visual_content: [
            {
                src: WeDoItAllTheTimeImage2,
                description: "A photo taken during one of the screenings of the <i>We do it all the time</i>. The clips from this generated iteration featured newsreel from the <a href='https://en.wikipedia.org/wiki/Killing_of_Abdulrahman_al-Awlaki' target='_blank'>2011 murder of a US teenager named Abdulrahman Anwar al-Awlaki</a> by the CIA via drone strike.",
                type: "image"
            },
            {
                content: WeDoItAllTheTimeVideo1,
                description: "Introductory excerpt from <i>We do it all the time</i>",
                type: "vimeo-video",
            },
            {
                src: WeDoItAllTheTimeImage3,
                type: "image",
            },
            {
                src: WeDoItAllTheTimeImage9,
                type: "image",
                description: "To dynamically generate the film, a program parses a JSON input containing my Google Chrome history. From these entries, the program identifies the most recent links to YouTube videos whose titles contain keywords relating to crises. These videos are then downloaded and collaged into the film."
            },
            {
                src: WeDoItAllTheTimeImage1,
                description: "Installation setup––<i>We do it all the time</i> is streamed on a shattered windshield above pieces from a car interior.",
                type: "image"
            },
            {
                src: WeDoItAllTheTimeImage6,
                description: "For the installation and screening of <i>We do it all the time</i> a series of car interior parts were created based on clips that were found in previous iterations of the film. This particular piece is a headrest upholstered with teddy bear skins that resembled stuffed animals placed at the memorial of <a href='https://en.wikipedia.org/wiki/Dimitris_Christoulas' target='_blank'>Dimitris Christoulas, a Greek pensioner who committed suicide in protest of austerity measures the government took after the '08 financial crisis.</a>",
                type: "image",
            },
            {
                src: WeDoItAllTheTimeImage8,
                description: "Reference image: Félix González-Torres, Untitled (A Portrait), 1991",
                type: "image",
            }
        ]
    }
]
