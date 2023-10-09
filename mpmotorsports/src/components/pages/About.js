import React from 'react';


function About() {
  return (
    <div>
      <h1 className='bodyheaders' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>About MP Motorsports</h1>
      <section style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='bodytext'>
        <div className="row">
          <div className="col-md-6 order-md-2 text-center">
            Some Place Holder Text heeeeere<br></br>
            This is probably for a PICTURE
          </div>
          <div className="col-md-6 order-md-1">
            <div style={{ marginLeft: '80px', marginRight: 'auto' }}>
              <p>
               and some place holder text heeeeerreeeee
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;