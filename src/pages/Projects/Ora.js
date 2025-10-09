import React from 'react';
import './Ora.css';

const Ora = () => {
    return (
        <main className="project-page ora-project">
            <section className="project-hero">
                <h1>Ora UX Project</h1>
                <p className="subtitle">
                    A case study on enhancing user experience for Ora, a productivity platform.
                </p>
                <h2>Interactive Prototype</h2>
                <div className="figma-embed">
                    <iframe 
                        style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
                        width="100%" 
                        height="100%" 
                        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/GspYGqlhQ6iZpSQv2u2eKW/FigBuild-2025?node-id=218-751%26p=f%26t=HVrZTwbkppIptQ85-1%26scaling=scale-down%26content-scaling=fixed%26page-id=218%3A367%26starting-point-node-id=218%3A736" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="project-overview">
                <h2>Overview</h2>
                <p>
                    Ora is a productivity tool designed to help teams collaborate efficiently. This project focuses on redesigning key user flows to improve usability and engagement.
                </p>
            </section>

            <section className="project-role">
                <h2>My Role</h2>
                <ul>
                    <li>UX Research</li>
                    <li>Wireframing & Prototyping</li>
                    <li>User Testing</li>
                </ul>
            </section>

            <section className="project-process">
                <h2>Process</h2>
                <ol>
                    <li>Research & Discovery</li>
                    <li>Ideation & Sketching</li>
                    <li>Prototyping</li>
                    <li>User Testing & Iteration</li>
                </ol>
            </section>

            <section className="project-results">
                <h2>Results</h2>
                <p>
                    The redesign led to a 30% increase in task completion rates and improved user satisfaction scores.
                </p>
            </section>
        </main>
    );
};

export default Ora;