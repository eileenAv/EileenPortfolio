import React from 'react';
import './Ora.css';

const Ora = () => {
    return (
        <main className="project-page ora-project">
            <section className="project-hero">
                <div className="hero-container">
                    <div className="hero-media">
                        <div className="gif-placeholder">
                            {/* Replace this with your actual GIF */}
                            <div className="placeholder-text">Project Demo GIF</div>
                        </div>
                    </div>
                    <div className="hero-text">
                        <h1>Ora UX Project</h1>
                        <p className="subtitle">
                            A case study on enhancing user experience for Ora, a productivity platform.
                        </p>
                        <div className="hero-details">
                            <h3>Project Highlights</h3>
                            <ul>
                                <li>Enhanced user workflow efficiency</li>
                                <li>Modernized interface design</li>
                                <li>Improved team collaboration features</li>
                            </ul>
                            <p className="impact-text">
                                Resulting in 30% faster task completion and improved user satisfaction
                            </p>
                        </div>
                    </div>
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