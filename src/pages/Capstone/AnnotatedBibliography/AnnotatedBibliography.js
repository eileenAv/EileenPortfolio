import React from 'react';
import './AnnotatedBibliography.css';
import { FaBook } from 'react-icons/fa';

export default function AnnotatedBibliography(){
  return (
    <div className="bibliography-container">
      <div className="bibliography-header">
        <h1 className="bibliography-title">Annotated Bibliography</h1>
        <FaBook className="bibliography-icon" />
      </div>
      
      <div className="bibliography-sections">
        <div className="bibliography-section">
          <h2 className="bibliography-section-title" spellCheck="false">React Resources</h2>
          <p className="bibliography-section-text">
            These resources are the ones I used while coding the front-end in React. They helped me with React syntax, how to structure and order my app, and the elements I needed to code for the schedule view UI.
          </p>
          <br/>
          <p className="bibliography-section-text">
            Djirdeh, Hassan. "How to Implement the Scheduler Component in Your Next React Application." Telerik Blogs, 30 Jan. 2024, <br/>
            <a href="https://www.telerik.com/blogs/how-to-implement-scheduler-component-react-application" target="_blank" rel="noopener noreferrer">https://www.telerik.com/blogs/how-to-implement-scheduler-component-react-application</a>. <br/>
            Accessed 23 Nov. 2025. Telerik.com
          </p>
          <br/>
          <p className="bibliography-section-text">
            Fireship. "React in 100 Seconds." YouTube, 8 July 2020, <br/>
            <a href="https://www.youtube.com/watch?v=SqcY0GlETPk" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=SqcY0GlETPk</a>. <br/>
            Accessed 9 Dec. 2025. YouTube.com
          </p>
        </div>
        
        <div className="bibliography-section">
          <h2 className="bibliography-section-title" spellCheck="false">API Resources</h2>
          <p className="bibliography-section-text">
            These are the resources I used to learn more about how to use APIs I my project. They helped me understand how to structure API requests, handle OAuth authentication tokens, and interpret error codes. The OpenAI resource also helped me connect to the OpenAI model.
          </p>
          <br/>
          <p className="bibliography-section-text">
            UKG HR Service Delivery. "REST API v2." Doc.People-Doc.com, 2025, <br/>
            <a href="https://doc.people-doc.com/client/api/index-v2.html" target="_blank" rel="noopener noreferrer">https://doc.people-doc.com/client/api/index-v2.html</a>. <br/>
            Accessed 23 Nov. 2025. doc.people-doc.com
          </p>
          <br/>
          <p className="bibliography-section-text">
            OpenAI. "Quickstart." OpenAI Platform Documentation, <br/>
            <a href="https://platform.openai.com/docs/quickstart" target="_blank" rel="noopener noreferrer">https://platform.openai.com/docs/quickstart</a>. <br/>
            Accessed 9 Dec. 2025. OpenAI.com
          </p>
        </div>

        <div className="bibliography-section">
          <h2 className="bibliography-section-title" spellCheck="false">Prompt Engineering Resources</h2>
          <p className="bibliography-section-text">
            These are the resources I used to learn about prompt engineering and improve the prompt of the AI used in my capstone project. They taught me best practices for giving the AI instructions, debugging API requests, and structuring prompts. The guides helped me when I was interpreting my prompt to get more accurate answers.
          </p>
          <br/>
          <p className="bibliography-section-text">
            OpenAI. "Debugging Requests." OpenAI Platform Documentation, <br/>
            <a href="https://platform.openai.com/docs/api-reference/debugging-requests" target="_blank" rel="noopener noreferrer">https://platform.openai.com/docs/api-reference/debugging-requests</a>. <br/>
            Accessed 9 Dec. 2025. OpenAI.com
          </p>
          <br/>
          <p className="bibliography-section-text">
            Google Cloud. "What Is Prompt Engineering?" Google Cloud Documentation, <br/>
            <a href="https://cloud.google.com/discover/what-is-prompt-engineering" target="_blank" rel="noopener noreferrer">https://cloud.google.com/discover/what-is-prompt-engineering</a>. <br/>
            Accessed 9 Dec. 2025. Cloud.Google.com
          </p>
          <br/>
          <p className="bibliography-section-text">
            Prompting Guide. "Prompt Engineering Guide." PromptingGuide.ai, <br/>
            <a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">https://www.promptingguide.ai/</a>. <br/>
            Accessed 9 Dec. 2025. PromptingGuide.ai
          </p>
          <br/>
          <p className="bibliography-section-text">
            OpenAI. "Prompt Engineering Best Practices for ChatGPT." OpenAI Help Center, <br/>
            <a href="https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt" target="_blank" rel="noopener noreferrer">https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt</a>. <br/>
            Accessed 9 Dec. 2025. OpenAI.com
          </p>
        
        </div>

        <div className="bibliography-section">
          <h2 className="bibliography-section-title" spellCheck="false">Flask Resources</h2>
          <p className="bibliography-section-text">
            These are the resources I used to learn Flask. I used Flask to connect my React frontend to my Python backend. The resources provided instructions on routing, request handling, and database connectivity. I learned how to connect Flask and React which I integrated into my capstone project.
          </p>
          <br/>
          <p className="bibliography-section-text">
            Pallets. "Quickstart." Flask Documentation, <br/>
            <a href="https://flask.palletsprojects.com/en/stable/quickstart/" target="_blank" rel="noopener noreferrer">https://flask.palletsprojects.com/en/stable/quickstart/</a>. <br/>
            Accessed 9 Dec. 2025. PalletsProjects.com
          </p>
          <br/>
          <p className="bibliography-section-text">
            GeeksforGeeks. "How to Connect ReactJS with Flask API." GeeksforGeeks, <br/>
            <a href="https://www.geeksforgeeks.org/reactjs/how-to-connect-reactjs-with-flask-api/" target="_blank" rel="noopener noreferrer">https://www.geeksforgeeks.org/reactjs/how-to-connect-reactjs-with-flask-api/</a>. <br/>
            Accessed 9 Dec. 2025. GeeksforGeeks.org
          </p>
          <br/>
          <p className="bibliography-section-text">
            Tech With Tim. "Flask Tutorial - Python Web Development." YouTube, <br/>
            <a href="https://www.youtube.com/watch?v=7LNl2JlZKHA" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=7LNl2JlZKHA</a>. <br/>
            Accessed 9 Dec. 2025. YouTube.com
          </p>
        </div>
      </div>
    </div>
  );
}
