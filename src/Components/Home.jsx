import React from "react";
// import myimage from '../logo/My image.jpg'
import one from '../logo/a62f3691-b190-45c7-885e-7f38da60ffef.avif'
import two from '../logo/a62f3691-b190-45c7-885e-7f38da60ffef.avif'
import three from '../logo/689b20a5b76a216ae4cc4fb4_a5433fa7-7ac9-4bb8-acbb-a2444ebd405b.avif'
import four from '../logo/689b20a5a9a38cc10d957071_3843a7c7-873a-4df7-8aca-5d50bc15b04c.avif'
import five from '../logo/689b20a5e89d08d0be2b138e_6e9e2dd7-8bab-4480-babe-2a41fa0d84c8.avif'
import six from '../logo/689b20a52a3c78aa6643f39d_998e65fd-b10b-46fd-8f87-c0ca168d0512.avif'
import wow from '../logo/wow.png'
import unichin from '../logo/unichin.png'
import './Home.css'
export default function Home() {
  return (
    <>
    
      {/* Hero Section */}
      
        <div className="hi">
          <div className="mes">
             <div className="te">
                <h1>
                  Web magic,<br /> made real. 
                </h1>
        
                <p>
                  Hey there! I'm a web developer with a passion for creating stunning and functional websites. Whether you need a personal blog, a business site, or an e-commerce platform, I've got you covered. Let's bring your ideas to life.
                </p>
                <button>See Projects</button>
              </div>
              <div className="im">
                <div className="im1">
                  <img src={one} alt="" />
                  <img src={two} alt="" />
                </div>
                <div className="im2">
                  <img src={three} alt="" />
                  <img src={four} alt="" />
                </div>
                <div className="im3">
                  <img src={five} alt="" />
                  <img src={six} alt="" />
                </div>
              </div>
          </div>
        </div>


        <div className="pro">
            <div className="frt">
              <div className="pim">
                <img src={unichin} alt="" />
              </div>
              <h3>
                Unichain, a Landing Page created with care and attention to detail.
              </h3>
              <p>Take a peek behind the scenes at my creative process and see how I bring ideas to life.<br />
                Every project is a collaboration,<br />
                every detail thoughtfully considered-because your story deserves to shine online.
              </p>
            </div>  
              <div className="srt">
                <div className="pim1">
                  <img src={wow} alt="" />
                </div>
                <h3>Wow, a Creative Showcase that Captivates and Inspires.</h3>
                <p>Step into a world of creativity and innovation, where every project tells a story.<br />
                  Join me on this journey of exploration and discovery, and let's create something amazing together.
                </p>
              </div>
            
        </div><br /><br /><br /><br />
        <div className="touch">
          <div className="text">
            <h3>Get in Touch</h3>
            <p>If you're interested in collaborating or just want to say hi, feel free to reach out!</p>
          </div>
          <div className="tbutt">
            <button>Get in Touch</button>
          </div>
        </div>

    </>
  );
}
