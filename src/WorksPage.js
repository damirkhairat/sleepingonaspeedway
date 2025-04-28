import React from "react";
import { projects } from "./constants/project_constants";
import ProjectPreviewContainer from './ProjectPreviewContainer';
import './WorksPage.css'

export default function WorksPage() {
    return (
        <div id="projects-previews-collection">
            {projects.map((p, i) => {
                return (<ProjectPreviewContainer
                    index={i}
                    key={p.id}
                    id={p.id}
                    image_src={p.image_src}
                    video_src={p.video_src}
                    name={p.name}
                    year={p.year}
                    data_origin={p.data_origin}
                    forums={p.forums}
                    description={p.description}
                    isOnGoing={p.isOnGoing}
                />)
            })}
        </div>
    )
}