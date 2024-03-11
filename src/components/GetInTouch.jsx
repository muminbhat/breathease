import React from 'react';

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="get-in-touch-section" style={{ textAlign: 'center', padding: '50px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '900px', width: '100%', margin: '20px auto', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, textAlign: 'left', marginRight: '20px' }}>
          <img src="/map.png" alt="Location Map" style={{ maxWidth: '100%', height: 'auto' }} />
          <a href="https://maps.app.goo.gl/1ccHjBsHAKFhbBZA9" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#00B2EC', marginTop: '10px' }}>
            <img src="/map-icon.png" alt="Map Icon" style={{ marginRight: '5px', width: '16px', height: '16px' }} />Open in Google Maps
          </a>
        </div>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ marginTop: '20px', position:'relative', right:'-74px'}}>
            <p> Dr. Tarun Sharma would love your feedback.</p>
            <p> Post a review to our profile.</p>
            <a href="https://g.page/r/Cb9owB_EBbf7EBI/review" target="_blank" rel="noopener noreferrer" style={{ color: '#00B2EC' }}>Write a Review</a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;