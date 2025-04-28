import React from 'react';
import './ProjectPage.css';
import { toCommaSeperateList } from './lib/utils';
import { Navigate, useLocation } from 'react-router-dom';
import { projects } from './constants/project_constants';
import { lowerCase } from 'lodash';
import { useContext, useState } from 'react';
import { WindowContext } from './App';

export default function ProjectPage() {
    const browserWindow = useContext(WindowContext).browserWindow;
    const initialTextDisplay = !browserWindow.isWidthBelowThreshold;
    const [isTextDisplayed, setIsTextDisplayed] = useState(initialTextDisplay);

    const location = useLocation();
    const project = getProject(location);

    if (!project)
        return <Navigate to="/" replace />

    const projectTitleCard = (<div>
        <div id="project-page-name">
            {project.name}
            {project.isOnGoing && <div id="project-page-ongoing">{"currently ongoing"}</div>}
        </div>
        <div className="project-page-metadata">
            <div className='project-metadata-entry'>
                <div className='project-page-metadata-title'>Year</div>
                <div className='project-page-metadata-value'>{project.year}</div>
            </div>
            <div className='project-metadata-entry'>
                <div className='project-page-metadata-title'>Data origin</div>
                <div className='project-page-metadata-value'>{toCommaSeperateList(project.data_origin)}</div>
            </div>
            <div className='project-metadata-entry'>
                <div className='project-page-metadata-title'>Media</div>
                <div className='project-page-metadata-value'>{toCommaSeperateList(project.forums)}</div>
            </div>
        </div></div>);

    const projectDescription = <div id="project-page-description">
        <div dangerouslySetInnerHTML={{ __html: project.long_description }} />
    </div>;

    return (<div id="project-page">
        <div id="project-page-row1" className='project-page-row'>
            {browserWindow.isWidthBelowThreshold && <div>
                {projectTitleCard}
                <button id="project-description-toggle" onClick={() => { if (browserWindow.isWidthBelowThreshold) setIsTextDisplayed(!isTextDisplayed) }}>{isTextDisplayed ? "Hide project description" : "Show project description"}</button>
                {isTextDisplayed && projectDescription}
            </div>}
            {project.visual_content.map((item, i) => {
                return (i >= 0 && <div key={i} className={(project.visual_content.length - 1 === i) ? "trailing-project-page-content" : ""}>
                    {renderVisualContent(item)}
                    <div className="project-content-description" dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>)
            })}
        </div>
        {!browserWindow.isWidthBelowThreshold && <div id="project-page-row2" className='project-page-row'>
            {projectTitleCard}
            {projectDescription}
        </div>}
    </div>)
}

function getProject(location) {
    let pathname = location.pathname;
    pathname = pathname
        .replace(/\/+/g, '/') // replace consecutive slashes with a single slash
        .replace(/\/+$/, ''); // remove trailing slashes

    const pathValues = pathname.split("/");
    const id = pathValues[pathValues.length - 1];
    const match = projects.find(p => lowerCase(id) === lowerCase(p.id));
    return match ? match : null;
}

function renderVisualContent(content) {
    if (content.type === 'image') {
        return (<img className="project-content-item" src={content.src} alt="project content item" />)
    } else if (content.type === 'video') {
        return (<video className="project-content-item" poster={content.coverPhoto} controls>
            <source src={content.src} type="video/mp4" />
        </video>)
    } else if (content.type === 'muted-video') {
        return (<video className="project-content-item" poster={content.coverPhoto} muted controls>
            <source src={content.src} type="video/mp4" />
        </video>)
    } else if (content.type === 'vimeo-video') {
        return content.content;
    }

    return (<div />)

}