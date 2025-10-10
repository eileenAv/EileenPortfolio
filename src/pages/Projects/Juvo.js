import React from 'react';
import './Juvo.css';

const Juvo = () => {
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
                        <h1>JUVO</h1>
                        <p className="subtitle">
                            A legal tech platform that simplifies legal processes and enhances access to justice.
                        </p>
                        <div className="hero-details">
                            <ul>
                                <li><strong>Project:</strong> Legal Tech Innovation Project</li>
                                <li><strong>Role:</strong> UX / UI Designer</li>
                                <li><strong>Project Dates:</strong> 2025</li>
                                <li><strong>Team:</strong> Legal Tech Innovation Team</li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-overview">
                <h2>Overview</h2>
                <p>
                  
                </p>
            </section>
  <section className="project-overview">
                <h2>Goal</h2>
                <p>
                  Create an app that helps users plan their daily lives to reach a long-term goal they have set , and gamify the process to keep users motivated and engaged.
                
                </p>
            </section>
              <section className="project-overview">
                <h2>Solution</h2>
                <p>
                
                </p>
            </section>

            <section section className="project-role">
                <h2>Key Functionalities of Our App</h2>
                 <ol>
                    <li>User can input goal and change it whenever they want</li>
                </ol>
            </section>

               <section className="project-process">
                <h2>Final Prototype UI</h2>
              <div className="images">
                <img src="/media/img1.jpg" alt="Image 1" className="images__img" />
                <img src="/media/img2.jpg" alt="Image 2" className="images__img" />
                <img src="/media/img3.jpg" alt="Image 3" className="images__img" />
                <img src="/media/img4.jpg" alt="Image 4" className="images__img" />
              </div>
            </section>

              <section className="project-process">
                <h2>What I learned</h2>
                <p>I learned a lot during this process, especially the way I used Figma evolved as I had the chance to learn how they used the app. During the Hackathon, there were also workshops where we learned how to make our final presentation as well as how to use Figma and its shortcuts. I think that with this project, I was able to learn  from my peers on design, improve my collaboration skills, and improve my technical Figma skills.</p>
            </section>
        
        </main>
    );
};

export default Juvo;
