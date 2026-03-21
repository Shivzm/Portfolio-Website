import React from "react";
import mock01 from '../assets/images/mock01.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Shivzm/Synapse" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shivzm/Synapse" target="_blank" rel="noreferrer"><h2>Synapse</h2></a>
                <p>Synapse is a high-performance search aggregator that enables users to discover millions of unique, non-standard items through a fast, personalized, and highly relevant search experience. Think of it as "Google for Shopping" or a "Super-Aggregator" — an intelligent layer that ingests data from multiple sources, ranks items using AI, and serves results in milliseconds.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
