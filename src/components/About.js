// This component provides information about the student management system, such as its purpose and the team behind it

import React from 'react';
import '../styles/About.css';
import Footer from './Footer';
import heroaboutimage from '../assets/images/about-page-hero-image.png';
import team1 from '../assets/images/manoj-profile-photo.png';

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
        <img src={heroaboutimage} alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>About StudentDB</h1>
          <p>StudentDB is dedicated to providing educational institutions with a robust tool for managing student data and enhancing administrative processes.</p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-section">
        <h2>Our Mission & Vision</h2>
        <div className="mission-vision-boxes">
          <div className="box">
            <p>Our mission is to empower educational institutions with efficient data management solutions.</p>
          </div>
          <div className="box">
            <p>We envision a world where administrative tasks are streamlined, allowing educators to focus on teaching.</p>
          </div>
          <div className="box">
            <p>Our goal is to continuously innovate and provide top-notch support to our users.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <div className="team-image">
          <img src={team1} alt="Manoj" />
          </div>
          <div className="team-content">
            <h3>Manoj Kumar</h3>
            <p><strong>Role:</strong> Founder, Coder & Customer Support</p>
            <p>My name is Manoj Kumar, the SOLO brainchild behind this web app. I live in Sydney, Australia, where I work full-time in digital advertising technology while also studying to become a full stack web developer.</p>
            <p>I have been involved in the education sector for a very long time both in marketing & admin, and understand clearly the pain points faced by institutes in effective data management using technology. Combining all those experiences, I built this app as the first step in bringing efficiencies to your centre!  </p>
            <p>Additionally, I am an indie author in the making, having published my first children’s picture book in 2024!</p>
            <p>I extend my heartfelt thanks to you for visiting this website, and I hope you enjoy using this app while supporting indie makers and their dreams. Your support motivates me to continue dreaming differently and creating unique products.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

