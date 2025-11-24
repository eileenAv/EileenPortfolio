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
            Djirdeh, Hassan. “How to Implement the Scheduler Component in Your Next React Application.” Telerik Blogs, 30 Jan. 2024, https://www.telerik.com/blogs/how-to-implement-scheduler-component-react-application. Accessed 23 Nov. 2025. Telerik.com </p>

<p>Summary: This blog post introduces the Kendo React Scheduler component and demonstrates how to integrate it into a React application. It covers package installation, creating events, and explains key features of the components such as event data modelling, and customizing behavior for scheduling scenarios. I found this to be a good reference when implementing the React scheduling part of my application. It gave me good starting points on what I wanted my schedule to look like and what my code would look like.

          </p>
        </div>
        
        <div className="bibliography-section">
          <h2 className="bibliography-section-title" spellCheck="false">API Resources</h2>
          <p className="bibliography-section-text">
           UKG HR Service Delivery. “REST API v2.” Doc.People-Doc.com, 2025, https://doc.people-doc.com/client/api/index-v2.html. Accessed 23 Nov. 2025. doc.people-doc.com </p>

<p>Summary: This documentation is on the version 2 REST API of the UKG HR Service Delivery. It outlines base URLs, authentication tokens like OAuth access tokens via client credentials, error-codes & response patterns, date/time formats, and the API lifecycle & deprecation policy for the UKG app.By reading this documentation, I was able to figure out how to connect to the UKG Api if needed. It also helped me refresh my memory on AP’s and error codes. I think this was very helpful 
for my project as I was able to understand how to connect to an API and what to look for when trying to connect to one.
          </p>
        </div>
      </div>
    </div>
  );
}
