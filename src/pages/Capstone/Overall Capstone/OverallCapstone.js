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
            The idea for my capstone was born one day, at a moment that I least expected, at work. I was talking to my manager, and they mentioned that it took them at least 3 days to create a schedule. I remember thinking that, in the current age of AI development, there should be a faster way to schedule employees than doing it manually, as my supervisors did. I wanted to help them so they could spend more time on critical and urgent tasks.
          </p>
          <p className="overall-section-text">
            At that moment, I decided to take matters into my own hands. For my capstone, I wanted to create something that would benefit the people around me and solve a real-life problem. I thought that AI was an excellent fit for this project because I would be analyzing large quantities of data (employee preferences) and making decisions based on that data (when an employee should be working). I asked my supervisor, and with their permission, I decided to make my project for them to use for scheduling.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false"> Value of User Research</h2>
          <p className="overall-section-text">
            One aspect of my capstone journey that I appreciate is the value of user research and feedback. When I started my capstone project, the first thing I did was schedule a user interview with my supervisor to learn more about how she approached scheduling. I had no idea how to plan or make decisions about who to schedule, and I had no experience in this area. I wanted to understand her thought process and how she handled unexpected cases so that I could incorporate her workflow and decision-making logic into my AI through prompt engineering.
          </p>
          <p className="overall-section-text">
            This experience was very insightful because it helped me understand my supervisor's thought process. I was also surprised by the amount of information that my supervisor had to keep in mind because of the limited resources in UKG Pro for employees to insert their preferences. This helped me shape my Employee UI to collect all the information, such as the maximum and minimum hours of work employees wanted per week, whether they were minors, and which days they had off, so my AI could schedule them accurately. This experience taught me how important it is to know your users and their needs, because this knowledge is the core of my application, and without it, my app wouldn't be working as effectively.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false"> Concept to Code</h2>
          <p className="overall-section-text">
            One of the biggest challenges of this capstone project was how to implement my ideas into code. I went through some interactions and tool changes before I was able to execute my idea and create a solid plan for my project. This was the first time I was going to use an app with a database, so my initial system architecture was very basic. I assumed I would store employee data and send it to the AI. Then I would turn that data into a schedule form and display it. However, after talking to my expert, I realized I would also need to store the AI-generated data for use in the UI page. This changed my system architecture and gave me a better understanding of my app's structure.
          </p>
          <p className="overall-section-text">
            After finalizing my system architecture, I began researching tools for my app. Initially, I wanted it to be a plugin for UKG, the app that my supervisor currently uses for scheduling. However, the IT Department did not grant me access to the company's UKG, so I decided to build it as a standalone app. After that, I researched and received recommendations from my expert on which tools to use, and decided to use MongoDB for the database and OpenAI for the AI. Once I defined the tools I needed with the help of research and my expert, I had a much clearer idea of how I would create my project, and by continuing this project, I gained experience in turning a concept into code and planning a long-term project.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false">Innovative AI Use </h2>
          <p className="overall-section-text">
           This capstone project forced me to use AI in a way I hadn't before. In my previous projects using AI, I used it as a chatbot. I had just printed the response directly to the UI without changing or affecting my code.   But in this project, I wanted to use AI to make decisions, and then the decisions should affect the outcome and my code. I wasn’t sure how to do this, but after discussing the idea with my expert, I decided to send the AI the employee preferences data and have it return the scheduled times for that employee. I would then save that data as JSON, send it to the database as scheduled employee data, and pull it to place in the schedule interface. 
           </p>
          <p className="overall-section-text">
           This experience was challenging but rewarding. There were many strict rules for scheduling employees, including shift hours, limits on the number of people who can work per shift, shift flexibility, and employees' work preferences, which caused some problems. The AI would often ignore the rules I had set, so I had to research and implement prompt engineering techniques to force it to abide by them. I also set up methods for the output that corrected inconsistencies. This experience taught me a lot about AI and prompt engineering and opened up new possibilities for how I could use AI in my future projects. I also gained experience implementing AI in projects and learned how to use and format AI outputs differently to achieve different results.
          </p>
        </div>
        
        <div className="overall-section">
          <h2 className="overall-section-title" spellCheck="false">Conclusion</h2>
          <p className="overall-section-text">
            In conclusion, through my capstone portfolio, I gained experience working on a long-term project, used AI in a new way, and created a project with real-world impact. I gained project management skills by planning and consistently working on my project. I learned new coding concepts, such as React, Flask, and the Python Pandas library, as well as prompt engineering skills. I found this experience very valuable because I want to pursue a career in Frontend and AI, and these skills I have gained from this project will be used in my future career.
          </p>
          <p className="overall-section-text">
            The next step I am considering is improving my app to include multiple job types rather than just one. I also want to create an account-based system. Right now, the app collects data only by having employees fill out a form. Giving supervisors and employees accounts will not only enable me to store previous availability data but also allow me to implement a feature that shows whether an employee has submitted their availability. Another advantage of having previous availability data is that I can implement an agent that predicts and recommends when an employee could be available, so the supervisor can schedule employees even when they do not have the data. Lastly, I want to add reminders and alerts when there are holes in the schedule.
          </p>
        </div>
      </div>
    </div>
  );
}
