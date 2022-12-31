import React from "react";
import './HomePage.css';
import weareohio from '../../assets/weareohio.png'
import whatdowedo from '../../assets/whatdowedo.png'
function HomePage() {
    return (
      <>
        <div className='homepage-screen-1'>
          <div className='homepage-left'>
            <div className='homepage-text'>
              <h1>We are OHIO</h1>
              <p>We provide for, the largest yet basic services for our clients, all across the world. We do some crazy things as well.</p>
              <a href='#whatwedo'><button>Know More</button></a>
            </div>
            
          </div>
          <div className='homepage-right'>
            <img src={weareohio} />
          </div>
        </div>
        <div className='homepage-screen-2'>
          <div className='homepage-right'>
            <img src={whatdowedo} />
          </div>
          <div id="whatwedo" className='homepage-left'>
            <div className='homepage-text'>
              <h1>What do we do?</h1>
              <p>This is the safest place in the state of OHIO.<br></br><br></br>We provide high-quality food and shelter to our customers. You'll feel like you're in OHIO no matter where you book our service. You'll be down in OHIO.</p>
              <a href='#whatwedo'><button>Testimonies</button></a>
            </div>
          </div>
          
        </div>
      </>
    );
  }
  
  export default HomePage;
  