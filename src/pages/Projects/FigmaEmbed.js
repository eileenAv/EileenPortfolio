import React from 'react';

const FigmaEmbed = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width="800"
        height="450"
        src="https://embed.figma.com/proto/GspYGqlhQ6iZpSQv2u2eKW/FigBuild-2025?node-id=218-751&p=f&scaling=scale-down&content-scaling=fixed&page-id=218%3A367&starting-point-node-id=218%3A736&embed-host=share"
        allowFullScreen
        title="Figma Prototype"
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
