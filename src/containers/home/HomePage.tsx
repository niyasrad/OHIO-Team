import React from "react";
import './HomePage.css';
import weareohio from '../../assets/weareohio.png'
import whatdowedo from '../../assets/whatdowedo.png'
import Carousel from 'react-grid-carousel';
import { testimonies } from './data'
import TestimonialCard from "../../components/testimonialcard/TestimonialCard";
function HomePage() {
    return (
      <>
        <div className='homepage-screen-1'>
          <div className='homepage-left'>
            <div className='homepage-text'>
              <h1>We are OHIO</h1>
              <p>We provide for, the largest yet basic services for our clients, all across the world. We do some crazy things as well. We don’t need to spend as much time in meetings now that we use OHIO.If you want to take your business to the next level, use OHIO and don't look any further. Definitely worth the investment. It has been so important for us as we continue to grow our company.</p>
              <a href='#whatwedo'><button>Know More</button></a>
            </div>
            
          </div>
          <div className='homepage-right'>
            <img src={weareohio} />
          </div>
        </div>
        <div id="whatwedo" className='homepage-screen-2'>
          <div className='homepage-right'>
            <img src={whatdowedo} />
          </div>
          <div  className='homepage-left'>
            <div className='homepage-text'>
              <h1>What do we do?</h1>
              <p>This is the safest place in the state of OHIO.<br></br><br></br>We provide high-quality food and shelter to our customers. You'll feel like you're in OHIO no matter where you book our service. You'll be down in OHIO. OHIO has made a huge difference! Everyone’s on the same page. Many of our people are not very organized naturally, so OHIO is a godsend! OHIO is exactly what you've been looking for.</p>
              <a href='#testimoni'><button>Testimonies</button></a>
            </div>
          </div>
        </div>
        <div id="testimoni" className='homepage-screen-3'>
          <h1>Testimonials.</h1>
          <p className='p'>Learn about OHIO from our valuable clients!</p>
          <div className='carousel'>
            <Carousel
              cols={1} rows={1}  loop mobileBreakpoint={1}
            >
              {testimonies.map((testimony) => (
                <Carousel.Item>
                  <TestimonialCard img={testimony.img} desc={testimony.desc} name={testimony.name} />
                </Carousel.Item>
              )
            )}
          </Carousel>
          </div>
          
        </div>
      </>
    );
  }
  
  export default HomePage;
  