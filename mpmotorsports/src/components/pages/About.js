import React from 'react';
import engine from '../images/engine.jpg';
import engine2 from '../images/engine2.jpg';
import engine3 from '../images/engine3.jpg';
import grinder from '../images/grinder.jpg';
import hillman from '../images/hillman.jpg';
import max from '../images/max1.jpg';
import maxprofile from '../images/maxprofile.jpg';
import '../assets/style.css';

function About() {
  return (
    <div>
      <h1 className='aboutheader' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>About MP Motorsports</h1>
      <section style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='bodytext'>
        <div className="row">
          <div className="col-md-6 order-md-2 text-center">
            <img src={maxprofile} alt= 'maxprofile' className='maxprofile'/>
          </div>
          <div className="col-md-6 order-md-1">
            <div style={{ marginLeft: '80px', marginRight: 'auto' }}>
              <p className='aboutus'>
                
                    At MP Motorsports our number one priority is the relationship we develop with each one of our customers.<br></br>
                    <br></br>
                    MP Motorsports aims to offer high-quality auto repair services. 
                    We recognize the inconvenience and stress involved when your regular 
                    daily routine is interrupted by the necessity for auto repair, and we are 
                    committed to making the process personalized, convenient, and easy from start to finish.
                    <br></br><br></br>
                    As a company, we strive to give you the highest quality, 
                    most cost-effective auto repair and to take care of your needs with compassion and kindness. 
                    We believe in conducting our business the same way we live our lives - with honesty, integrity, 
                    and fairness.
                    <br></br><br></br>
                    Not only do we affirm the unique worth of each one of our customers, 
                    but we also recognize each MP Motorsports  employee as a valuable member of our family and strive 
                    to treat each other with the same loyalty, respect, and dignity we give to you.
                    <br></br><br></br>
                    <br></br><br></br>
 

                    Additionally, MP    Motorsports is technologically savvy with computerized diagnostic services, 
                    to ensure that the autos we service get the latest, most up to date technology used, 
                    while keeping customer costs to a minimum. Finally, 
                    MP Motorsports  has strong vendor relationships with the most service conscious vendors 
                    who are capable of delivering our products in a short amount of time, which cuts the service 
                    time and we then can pass this on to our customers.
              </p>
            </div>
          </div>
        </div>

       <div id="carouselWithControls" className="carousel slide piccarousel fixed-size-carousel" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={engine} className="d-block w-100 carousel-image" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src={engine2} className="d-block w-100 carousel-image" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src={engine3} className="d-block w-100 carousel-image" alt="Slide 3" />
    </div>
    <div className="carousel-item">
      <img src={grinder} className="d-block w-100 carousel-image" alt="Slide 4" />
    </div>
    <div className="carousel-item">
      <img src={hillman} className="d-block w-100 carousel-image" alt="Slide 5" />
    </div>
    <div className="carousel-item">
      <img src={max} className="d-block w-100 carousel-image" alt="Slide 6" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>

      </section>
    </div>


  );
}

export default About;
