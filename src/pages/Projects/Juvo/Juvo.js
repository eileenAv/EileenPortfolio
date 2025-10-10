// import React from 'react';
// import './Juvo.css';

// const Juvo = () => {
//     return (
//         <main className="project-page juvo-project">
//             <section className="project-hero">
//                 <div className="hero-container">
//                     <div className="hero-media">
//                         <div className="gif-placeholder">
//                             {/* Replace this with your actual GIF */}
//                             <div className="placeholder-text">Project Demo GIF</div>
//                         </div>
//                     </div>
//                     <div className="hero-text">
//                         <h1>JUVO</h1>
//                         <p className="subtitle">
//                             A legal tech platform that simplifies legal processes and enhances access to justice.
//                         </p>
//                         <div className="hero-details">
//                             <ul>
//                                 <li><strong>Tools:</strong> VSCODE, React</li>
//                                 <li><strong>Role:</strong> UX / UI Designer, Frontend Developer</li>
//                                 <li><strong>Project Dates:</strong> 2025</li>
//                                 <li><strong>Team:</strong>Eileen Avci, Angelina Sprague, Khanh Nguyen, Ayleen Piteo-Tarpy</li>
//                             </ul>
                        
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="project-overview">
//                 <h2>Overview</h2>
//                 <p>
//                   Juvo is an app that allows users to trade services. Users can trade their talents for other services, giving an equal opportunity for people to access services that they may not be able to afford. My team and I built this as a project for the UWB Hackathon Save The World in 2-3 days. I worked on the front-end of this project. I designed and coded it using React.js, HTML and CSS. I also helped with the design of the presentation. We implemented the back-end using Java with the Spring Boot framework. Our database of choice was MongoDB. For deployment, the front-end was hosted on GitHub Pages, and the back-end was run on a personal server.
//                 </p>
//             </section>
//   <section className="project-overview">
//                 <h2>Goal</h2>
//                 <p>
//                 We got to talking about our economy and businesses and how difficult it can be to afford anything beyond necessities. We took inspiration from service worker friends who trade their talents with other service workers, and decided to build a system to facilitate those exchanges.
//                 </p>
//             </section>
//               <section className="project-overview">
//                 <h2>Solution</h2>
//                 <p>
//                 Juvo is made to connect businesses and services alike, for people to trade their arts and talents in place of money. For example, a user could trade massage for a tattoo, or a tutoring session for fresh baked muffins. These services would usually cost a pretty penny but now they can be paid for with a talent/service that you provide, further building community and the cashless economy.
//                 </p>
//             </section>

//             <section section className="project-role">
//                 <h2>Key Functionalities of Our App</h2>
//                  <ol>
//                     <li>User can create a profile to showcase their skills and services</li>
//                     <li>Users can post a contract where they state what service they want in exchange for their own service</li>
//                     <li>Users can browse and respond to contracts posted by others</li>
//                 </ol>
//             </section>

//                <section className="project-final-product">
//                 <h2>Final Product Demo</h2>
//                 <div className="video-container">
//                     <iframe
//                         width="100%"
//                         height="100%"
//                         src="https://www.youtube.com/embed/9aKA3Wpsqjw"
//                         title="Juvo Project Demo"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     ></iframe>
//                     <p>Learn more about the project here: https://devpost.com/software/juvo-idmzcl#updates</p>
//                 </div>
//               </section>

//               <section className="project-process">
//                 <h2>What I learned</h2>
//                 <p>I learned a lot during this process, especially the way I used Figma evolved as I had the chance to learn how they used the app. During the Hackathon, there were also workshops where we learned how to make our final presentation as well as how to use Figma and its shortcuts. I think that with this project, I was able to learn  from my peers on design, improve my collaboration skills, and improve my technical Figma skills.</p>
//             </section>
        
//         </main>
//     );
// };

// export default Juvo;

import React from 'react';
import './Juvo.css';

const Juvo = () => {
  return (
    <main className="juvo-page">
      <section className="juvo-hero">
        <div className="juvo-hero__container">
          <div className="juvo-hero__media">
            <div className="juvo-gif">
              <div className="juvo-gif__text">Project Demo GIF</div>
            </div>
          </div>

          <div className="juvo-hero__text">
            <h1 className="juvo-title">JUVO</h1>
            <p className="juvo-subtitle">
              A legal tech platform that simplifies legal processes and enhances access to justice.
            </p>

            <div className="juvo-hero__details">
              <ul className="juvo-list">
                <li><strong>Tools:</strong> VSCODE, React</li>
                <li><strong>Role:</strong> UX / UI Designer, Frontend Developer</li>
                <li><strong>Project Dates:</strong> 2025</li>
                <li><strong>Team:</strong> Eileen Avci, Angelina Sprague, Khanh Nguyen, Ayleen Piteo-Tarpy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="juvo-section">
        <h2 className="juvo-h2">Overview</h2>
        <p>
          Juvo is an app that allows users to trade services. Users can trade their talents for other services, giving an equal opportunity for people to access services that they may not be able to afford. My team and I built this as a project for the UWB Hackathon Save The World in 2-3 days. I worked on the front-end of this project. I designed and coded it using React.js, HTML and CSS. I also helped with the design of the presentation. We implemented the back-end using Java with the Spring Boot framework. Our database of choice was MongoDB. For deployment, the front-end was hosted on GitHub Pages, and the back-end was run on a personal server.
        </p>
      </section>

      <section className="juvo-section">
        <h2 className="juvo-h2">Goal</h2>
        <p>
          We got to talking about our economy and businesses and how difficult it can be to afford anything beyond necessities. We took inspiration from service worker friends who trade their talents with other service workers, and decided to build a system to facilitate those exchanges.
        </p>
      </section>

      <section className="juvo-section">
        <h2 className="juvo-h2">Solution</h2>
        <p>
          Juvo is made to connect businesses and services alike, for people to trade their arts and talents in place of money. For example, a user could trade massage for a tattoo, or a tutoring session for fresh baked muffins. These services would usually cost a pretty penny but now they can be paid for with a talent/service that you provide, further building community and the cashless economy.
        </p>
      </section>

      <section className="juvo-role">
        <h2 className="juvo-h2">Key Functionalities of Our App</h2>
        <ol className="juvo-ordered">
          <li>User can create a profile to showcase their skills and services</li>
          <li>Users can post a contract where they state what service they want in exchange for their own service</li>
          <li>Users can browse and respond to contracts posted by others</li>
        </ol>
      </section>

       <div className="images">
                <img src={require("../../../assets/Juvo/juvologo.png")} alt="Image 1" className="images__img" />
              
              </div>
        

      <section className="juvo-final">
        <h2 className="juvo-h2">Final Product Demo</h2>
        <div className="juvo-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9aKA3Wpsqjw"
            title="Juvo Project Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Learn more about the project here: https://devpost.com/software/juvo-idmzcl#updates</p>
        </div>
      </section>

      <section className="juvo-process">
        <h2 className="juvo-h2">What I learned</h2>
        <p>
          I learned a lot during this process, especially the way I used Figma evolved as I had the chance to learn how they used the app. During the Hackathon, there were also workshops where we learned how to make our final presentation as well as how to use Figma and its shortcuts. I think that with this project, I was able to learn  from my peers on design, improve my collaboration skills, and improve my technical Figma skills.
        </p>
      </section>
    </main>
  );
};

export default Juvo;

