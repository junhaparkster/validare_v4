import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [inputValue, setInputValue] = useState('');

      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

      return (
        <div className="app-container">
          <header className="header">
            <div className="header-left">
              <div className="logo">
                <span className="company-name">validare</span>
              </div>
              <nav className="nav">
                <a href="#" className="nav-link">Vision</a>
                <a href="#" className="nav-link">Blogs</a>
                <a href="#" className="nav-link">Pricing</a>
                <a href="#" className="nav-link">Support</a>
              </nav>
            </div>
            <div className="header-right">
              <a href="#" className="auth-link signin-button">Sign in</a>
              <a href="#" className="auth-link signup-button">Sign up</a>
            </div>
          </header>
          <main className="main-content">
            <h1 className="main-heading">
              Find & validate ideas on <span className="reddit-box"> reddit</span>
            </h1>
            <h2 className="sub-heading">Break out of analysis paralysis.</h2>
            <div className="input-container">
              <textarea
                className="search-input"
                placeholder="Search for a problem..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="search-button">
                <span className="search-button-text">Search</span>
              </button>
            </div>
          </main>

          <div className="section-separator top"></div>

          <section className="benefits-section" style={{ marginTop: '15px' }}>
            <h2 className="section-heading">Benefits</h2>
            <div className="section-content">
              <div className="benefit-grid">
                <div className="benefit-item">
                  <h3>Save Time</h3>
                  <p>Quickly validate your ideas without spending hours on research.</p>
                </div>
                <div className="benefit-item">
                  <h3>Data-Driven Decisions</h3>
                  <p>Make informed decisions based on real user feedback from Reddit.</p>
                </div>
                <div className="benefit-item">
                  <h3>Reduce Risk</h3>
                  <p>Minimize the risk of building products that nobody wants.</p>
                </div>
                <div className="benefit-item">
                  <h3>Stay Ahead</h3>
                  <p>Discover emerging trends and unmet needs in your industry.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="section-separator benefits"></div>

          <section className="how-it-works-section">
            <h2 className="section-heading">How it works</h2>
            <div className="section-content">
              <ul className="how-it-works-list">
                <li>Enter your problem statement in the search box.</li>
                <li>Our tool analyzes relevant Reddit discussions.</li>
                <li>Get insights to validate your idea.</li>
              </ul>
            </div>
          </section>

          <div className="section-separator"></div>

          <section className="testimonials-section">
            <h2 className="section-heading">Testimonials</h2>
            <div className="section-content">
              <div className="testimonials-grid">
                <div className="testimonial-item">
                  <div className="testimonial-profile-pic"></div>
                  <p>
                    "Validare helped me validate my startup idea in just a few minutes.
                    It's a game-changer!"
                  </p>
                  <p className="testimonial-author">- John D.</p>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-profile-pic"></div>
                  <p>
                    "I was skeptical at first, but the insights I got from Validare were
                    invaluable. Highly recommended!"
                  </p>
                  <p className="testimonial-author">- Sarah L.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="section-separator"></div>

          <section className="faq-section">
            <h2 className="section-heading">FAQ</h2>
            <div className="section-content">
              <ul className="faq-list">
                <li>
                  <p className="faq-question">What data sources do you use?</p>
                  <p>We analyze discussions from Reddit.</p>
                </li>
                <li>
                  <p className="faq-question">How accurate is the validation?</p>
                  <p>
                    Our tool provides insights based on user discussions, which can
                    help you gauge interest. However, it's not a guarantee of success.
                  </p>
                </li>
                <li>
                  <p className="faq-question">Is there a free trial?</p>
                  <p>Yes, we offer a free trial for new users.</p>
                </li>
              </ul>
            </div>
          </section>

          <div style={{textAlign: 'center'}}>
            <button className="signup-button-big">Sign up</button>
          </div>

          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Validare. All rights reserved.</p>
            <p>
              <a href="#">Privacy Policy</a> | Contact us:
              <a href="mailto:support@validare.app">support@validare.app</a>
            </p>
          </footer>
        </div>
      );
    }

    export default App;
