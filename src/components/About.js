// This component provides information about the student management system, such as its purpose and the team behind it

import React from 'react';
import '../styles/About.css';
import Footer from './Footer';

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
        <img src="/images/about-page-hero-image.png" alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>StudentDB is dedicated to providing educational institutions with a robust tool for managing student data and enhancing administrative processes. We are located in Sydney, Australia and serving the educational community worldwide from here!</p>
          <p>We launched in August 2024 and have already been warmly embraced by a diverse range of educational institutions. The swift acceptance of our platform is a testament to its effectiveness in addressing the critical need for efficient data management in education. Institutes of all sizes and types have recognized the value of our user-friendly and comprehensive solution, which streamlines administrative processes and enhances overall productivity. Our commitment to continuous improvement and understanding of the education sector's unique challenges has resonated with educators and administrators, making our app an indispensable tool for modern educational management.</p>
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
          <img src="/images/manoj-profile-photo.png" alt="Manoj" />
          </div>
          <div className="team-content">
            <h3>Manoj Kumar</h3>
            <p><strong>Role:</strong> Founder, Coder & Customer Support</p>
            <p>My name is Manoj Kumar, the SOLO brainchild behind this web app. I live in Sydney, Australia, where I work full-time in digital advertising technology and a full-stack web developer.</p>
            <p>With extensive experience in both marketing and administration within the education sector, I understand the challenges that institutes face in effective data management. Drawing from this background, I developed this app as a first step toward enhancing operational efficiency at your institution.</p>
            <p>Additionally, I am an indie author in the making, having published my first children’s picture book in 2024! Check that out here: <a href="https://www.chesterthedino.com/" target="_blank" rel="noopener noreferrer">Chester, the Dino.</a></p>
            <p>I extend my heartfelt thanks to you for visiting this website, and I hope you enjoy using this app while supporting indie makers and their dreams. Your support motivates me to continue dreaming differently and creating unique products.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

