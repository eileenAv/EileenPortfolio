
import React from 'react';
import '../../Projects/ORA/Ora.css';

const Ora = () => {
    return (
        <main className="project-page ora-project">
            <section className="project-hero">
                <div className="hero-container">
                    <div className="hero-media">
                        <div className="ora-gif">
                            <img src={require("../../../assets/Ora/Recording 2025-10-10 at 13.22.21.gif")} alt="ORA App Demo" className="ora-gif__image" />
                        </div>
                    </div>
                    <div className="hero-text">
                        <h1>ORA: FigBuild 2025 Project</h1>
                        <p className="subtitle">
                          
                        </p>
                        <div className="hero-details">
                            <ul>
                                <li><strong>Tools:</strong> Figma</li>
                                <li><strong>Role:</strong> UX / UI Designer</li>
                                <li><strong>Project Dates:</strong> 3 Days - April 15-17</li>
                                <li><strong>Team:</strong> Eileen Avci, Clara Chen, Asem Kiyalova, ChiYu Zheng</li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-overview">
                <h2>Overview</h2>
                <p>
                   I had the opportunity to attend Figbuild 2025, where I collaborated with a group of 3 students. The prompt was to choose a daily problem that we faced and create a superpower that solves that problem. Our task was to create a tool to help the user use their superpower efficiently. We decided to tackle the problem of anxiety about the future, and the superpower we chose to solve this problem was the ability to see every possible future.
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
                "ORA", a decision-making and future-planning app designed to help users reach their goals. The app guides users in picking the best option to reach their desired goal, builds a detailed daily task schedule, and gives the user a timeline of how long it will take them to achieve their goal. 
                </p>
            </section>

            <section section className="project-role">
                <h2>Key Functionalities of Our App</h2>
                 <ol>
                    <li>User can input goal and change it whenever they want</li>
                    <li>The metrics that determine the user’s success are Happiness, Achievement, and Significance/Value. User gains points, counting towards these metrics, by doing their daily tasks. When the user fulfills these metrics, then that means they have reached their goal.</li>
                    <li>The app will give an estime of how long it will take to reach their goal</li>
                </ol>
            </section>

            
            {/* <section className="project-process">
                <h2>Sketches of the App</h2>
                  <p>Here are some of the sketches that I made for the potential prototype. The design was the Duolingo interface, which is a language learning app where the user needs to do daily practice. I was also inspired by tarot readings, which I incorporated into the daily cards feature, where the user draws cards that contain their daily tasks. </p>
              
            </section> */}

               <section className="project-process">
                <h2>Final Prototype UI</h2>
              <div className="images" style={{ marginTop: '20px' }}>
                <img src={require("../../../assets/Ora/mainpage.png")} alt="ORA Main Page" className="images__img" />
                <img src={require("../../../assets/Ora/doors.png")} alt="ORA Doors Interface" className="images__img" />
                <img src={require("../../../assets/Ora/cards.png")} alt="ORA Cards View" className="images__img" />
                <img src={require("../../../assets/Ora/card.png")} alt="ORA Card Detail" className="images__img" />
                <img src={require("../../../assets/Ora/gains.png")} alt="ORA Gains Dashboard" className="images__img" />
              </div>
            </section>

              <section className="project-process">
                <h2>What I learned</h2>
                <p>I learned a lot during this process, especially the way I used Figma evolved as I had the chance to learn how they used the app. During the Hackathon, there were also workshops where we learned how to make our final presentation as well as how to use Figma and its shortcuts. I think that with this project, I was able to learn  from my peers on design, improve my collaboration skills, and improve my technical Figma skills.</p>
            </section>
        
        </main>
    );
};

export default Ora;

