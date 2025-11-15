import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Capstone.css';

const CapstoneLanding = () => {
    const navigate = useNavigate();

    return (
        <div className="capstone-container">
            <h1 className="capstone-title">My Capstone</h1>
            <p className="capstone-text">Here is the landing page of my capstone project. I have decided to create an AI-powered scheduler that uses employee preferences to schedule shifts. Click on the buttons below to explore different sections of the project.</p>
            <div className="buttons-container">
                <button className="capstone-button" onClick={() => navigate('/capstone/overall')}>Overall Capstone</button>
                <button className="capstone-button" onClick={() => navigate('/capstone/user')}>The User</button>
                <button className="capstone-button" onClick={() => navigate('/capstone/experience')}>The Capstone Experience</button>
                <button className="capstone-button" onClick={() => navigate('/capstone/bibliography')}>Annotated Bibliography</button>
            </div>
        </div>
    );
};

export default CapstoneLanding;