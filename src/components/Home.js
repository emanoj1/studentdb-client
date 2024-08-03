// The Home component is the landing page of the application, presenting general information.

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import review1 from '../assets/images/review-1.png';
import review2 from '../assets/images/review-2.png';
import review3 from '../assets/images/review-3.png';
import icon1 from '../assets/images/data-mgt-icon.png';
import icon2 from '../assets/images/user-friendly-icon.png';
import icon3 from '../assets/images/secure-icon.png';
import heroimage from '../assets/images/hero-image-homepage.png';
import studentListImage from '../assets/images/student-list-display-studentdb.png';
import addStudentImage from '../assets/images/add-student-display-studentdb.png';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
          <img src={heroimage} alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>Welcome to StudentDB!</h1>
          <h2>Your Ultimate Online Student Management System.</h2>
          <p>
            StudentDB helps educational institutions manage their student data
            efficiently and effectively. Join us today and streamline your
            student management process.
          </p>
          <Link to="/register" className="button register-button">
            Register Now!
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <h2 className="section-heading">Discover how StudentDB can enhance your institution's <br/> <span className="highlight"> efficiency and streamline your operations</span>. </h2>
      <div className="features-section">
        <div className="feature-box">
          <div className="feature-icon">
            <img src={icon1} alt="Feature 1" />
          </div>
          <div className="feature-content">
            <h3>Efficient Data Management</h3>
            <p>Easily organize and access all student information in one centralized location, reducing administrative workload and improving data accuracy.</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-icon">
            <img src={icon2} alt="Feature 2" />
          </div>
          <div className="feature-content">
            <h3>User-Friendly Interface</h3>
            <p>Intuitive design ensures that administrators, teachers, and staff can quickly navigate and utilize the system without extensive training.</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-icon">
            <img src={icon3} alt="Feature 3" />
          </div>
          <div className="feature-content">
            <h3>Secure and Compliant</h3>
            <p>Built with robust security measures to protect sensitive student data, ensuring compliance with educational data protection regulations.</p>
          </div>
        </div>
      </div>

      {/* Student List image Section */}
      <div className="image-section">
        <h2>Our platform is designed to be intuitive and user-friendly, ensuring a seamless experience for all users.</h2>
        <div className="image-container">
          <img src={studentListImage} alt="Student List Display" />
        </div>
        <h3>Easily view your list of students and have tools to edit and delete content at your finger tips!</h3>
      </div>

      {/* Add Student image Section */}
      <div className="image-section">
        <h2>Your data entry will be an enjoyable experience!</h2>
        <div className="image-container">
          <img src={addStudentImage} alt="Add Student Display" />
        </div>
        <h3>A simple, quick and easy to use form for your student entry tasks! </h3>
      </div>

      {/* Video Walk-thru Section */}
      <div className="video-section">
        <h2 className="section-heading">Watch our video walkthrough</h2>
        <div className="video-wrapper">
          <iframe src="https://www.loom.com/embed/132bc7bb472a45489ce28d018b19100e?sid=b0519afa-c434-435e-81e6-1a9b83e524da" webkitAllowFullScreen mozAllowFullScreen allowFullScreen title="StudentDB Video Walkthrough"></iframe>
        </div>
        <h3>In the above video, we give you a quick overview of the website - the registration process, login steps, dashboard overview, and student management features. We hope this walkthrough will help you to familiarize yourself with the platform & get you started!</h3>
      </div>

      {/* Testimonials Section */}
      <h2 className="section-heading">See why institutions around the world <span className="highlight">trust StudentDB </span><br/> for their student management needs.</h2>
      <div className="testimonials-section">
        <div className="testimonial-box">
          <div className="testimonial-image">
            <img src={review1} alt="Person 1" />
          </div>
          <div className="testimonial-content">
            <p><strong>"StudentDB has transformed the way we manage student data."</strong></p>
            <p>Blake Gemi</p>
            <p><em>The Art School</em></p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-image">
            <img src={review2} alt="Person 2" />
          </div>
          <div className="testimonial-content">
            <p><strong>"An indispensable tool for our institution."</strong></p>
            <p>Janet Theodore</p>
            <p><em>The Wright Flying School</em></p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-image">
            <img src={review3} alt="Person 3" />
          </div>
          <div className="testimonial-content">
            <p><strong>"Highly recommended for all educational institutions."</strong></p>
            <p>Austin Serini</p>
            <p><em>University of Life</em></p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </div>

      {/* New Contact Section */}
      <div className="contact-section">
        <h2>Drop us a Line.</h2>
        <p>Ask us a question, share ideas, or just say Hello.</p>
        <Link to="/contact" className="button contact-button">
          Contact Us
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 StudentDB. All rights reserved | NOTE: This is a test website designed as a part of a coding project. Do not signup for professional services.</p>
      </footer>
    </div>
  );
}

export default Home;


