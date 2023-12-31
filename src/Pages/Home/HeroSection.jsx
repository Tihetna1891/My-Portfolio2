import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import the Typed library
export default function HeroSection(){
  const downloadCV = () => {
    const fileName = 'TIHETNA mESFIN.pdf';
    const filePath = `./${fileName}`;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Your JavaScript logic for the HeroSection component
    console.log('HeroSection component mounted');

    // Initialize Typed here
    const typed = new Typed('.multiple-text', {
      strings: ['Fullstack Developer', 'Lecturer', 'Computer Vision Enthusiast'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // You can perform actions like manipulating the DOM, making API calls, etc.
    // For example, changing the background color after 3 seconds
    const timeoutId = setTimeout(() => {
      document.body.style.backgroundColor = 'white';
    }, 3000);
  

    // Cleanup function (will be called when the component unmounts)
    return () => {
      // Stop and destroy the Typed instance to prevent memory leaks
      typed.destroy();
      console.log('HeroSection component will unmount');
      // Perform any cleanup tasks here
    };
  }, []); // Empty dependency array ensures that the effect runs once on mount

    return (
      
        //<iframe src="C:/Users/dell/OneDrive/Desktop/my-files/nedamco projects/Portfolio/index.html" title="Portfolio" />
        <section id="heroSection" className="hero--section">
          <div className="hero--section--content--box">
            <div className="hero--section--content">
              <p className="section--title">Hey, I'm Tihetna Mesfin </p>
              <h1>And I'm a <span class="multiple-text">
              
                </span></h1>
             
              <p className="hero--section-description">This my offficial portfolio website to show all
                <br />Details and work experience.
              </p>
              
            </div>
            <button className="btn btn-primary btn-outline-primary" onClick={downloadCV}>Download CV</button>
          </div>
          <div className="hero--section--img">
            <img src="./img/myface1.png" alt="Hero Section" />
          </div>
          
       
        </section>
       
        
      );
      
      
      
        
}