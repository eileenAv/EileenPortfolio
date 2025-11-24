import React from 'react';
import './TheUser.css';
import { FaUser } from 'react-icons/fa';

export default function TheUser(){
  return (
    <div className="user-container">
      <div className="user-header">
        <h1 className="user-title">The User</h1>
        <FaUser className="user-icon" />
      </div>
      
      <div className="user-sections">
        <div className="user-section">
          <h2 className="user-section-title">Who?</h2>
          <p className="user-section-text">
            This app is designed for managers, supervisors, or any user who needs to create a schedule based on employees' work-hour preferences, time preferences, and days they cannot work. 
          </p>
        </div>
        
        <div className="user-section">
          <h2 className="user-section-title">Why?</h2>
          <p className="user-section-text">
           This app is useful for scheduling because it uses AI to give accurate decisions based on the employee’s preferences and quickly creates a digestible and ready-to-implement schedule. Managers can then use this schedule as a reference or starting point to start scheduling, rather than going through every employee's preferences.</p>

<p>This not only cuts down on the time used on scheduling but also decreases the chance of human error and gives managers more time to use on other more important matters.

          </p>
        </div>
        
        <div className="user-section">
          <h2 className="user-section-title">How?</h2>
          <p className="user-section-text">
            <p>There are two user interfaces for the app: Manager Interface and Employee Interface.</p>
            </p>

            <p>In the <b color="purple">employee interface</b>, employees will fill out a form to record their availability preferences, hours, age, and days they cannot work. This will then be stored in the app's database for later use. </p>
        <p>In the <b>manager interface</b>, the manager can see the percentage of employees who have input their availability. They can use this to decide whether to create the schedule. They also have a button that, when pressed, creates an accurate schedule for them using the submitted availability data.</p>
        </div>
      </div>
    </div>
  );
}
