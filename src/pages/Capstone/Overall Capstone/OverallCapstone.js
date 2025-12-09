import React from 'react';
import './OverallCapstone.css';
import { FaLightbulb } from 'react-icons/fa';

export default function OverallCapstone(){
  return (
    <div className="overall-container">
      <div className="overall-header">
        <h1 className="overall-title">Overall Capstone</h1>
        <FaLightbulb className="overall-icon" />
      </div>
      
      <div className="overall-sections">
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false">Real World Impact</h2>
          <p className="overall-section-text">
            The idea for my capstone was born one day at a moment that I least expected, at work. I was talking to my manager, and they mentioned that it took them at least 3 days to create a schedule. I remember thinking that, in the current age of AI development, there should be a faster way to schedule employees rather than doing it manually like my supervisors.
          </p>
          <p className="overall-section-text">
            At that moment, I decided to take matters into my own hands. For my capstone, I wanted to create something that would benefit the people around me and solve a real-life problem. I asked my supervisor, and with their permission, I decided to make my project for them to use for scheduling.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false"> Value of User Research</h2>
          <p className="overall-section-text">
            One aspect of my capstone journey that I appreciate is the value of user research and feedback. When I started my capstone project, the first thing I did was schedule a user interview with my supervisor to learn more about how she approached scheduling.
          </p>
          <p className="overall-section-text">
            This experience was very insightful because I had no knowledge of scheduling, and by using her knowledge and expertise, I was able to implement decision-making criteria to my AI in its prompt. This knowledge is the core of my application and without this experience, my app wouldn't be working as effectively.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false"> Concept to Code</h2>
          <p className="overall-section-text">
            One of the biggest challenges of this capstone project was how I was going to implement my ideas into code. I went through some interactions and tool changes before I was able to execute my idea and create a solid plan for my project.
          </p>
          <p className="overall-section-text">
            Once I defined the tools I needed with the help of research and my expert, I had a much clearer idea of how I would create my project. This project gave me experience in turning a concept into code and planning a long-term project.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false">Innovative AI Use </h2>
          <p className="overall-section-text">
            This capstone project forced me to use AI in a way I hadn't before. In my previous projects using AI, I used it as a chatbot and developed the results it generated into text format. But in this project, I had to use AI to make decisions and then act on those decisions.
          </p>
          <p className="overall-section-text">
            This experience opened up new possibilities for how I could use AI in my future projects. I also gained experience in implementing AI to projects and how I could use and format the outputs differently to achieve different results.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false">Conclusion</h2>
          <p className="overall-section-text">
            In conclusion, through my capstone portfolio, I was able to gain experience working on a long-term project, utilize AI in a new way, and create a project that has a real-world impact. I learned new coding concepts like React, Flask, and the Python Pandas library.
          </p>
          <p className="overall-section-text">
            The next step I am considering is improving my app to include multiple job types rather than just one. I also want to improve the manager's view to include the names of users who have submitted their preferences and those who have not. I also want to add reminders and alerts when there are holes in the schedule.
          </p>
        </div>
      </div>
    </div>
  );
}
