import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./footer";
import LoginModal from "./login";
import SignUpModal from "./signup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar 
        onLogin={() => setShowLogin(true)} 
        onSignUp={() => setShowSignUp(true)} 
      />

      {/* Hero Section */}
      <Hero 
        onGetStarted={() => setShowSignUp(true)} 
        onLearnMore={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })} 
      />

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Fast Performance</h3>
            <p>Experience lightning-fast speed and responsiveness.</p>
          </div>
          <div className="feature-card">
            <h3>Secure</h3>
            <p>Your data is safe with our advanced security measures.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive</h3>
            <p>Works perfectly on desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We are committed to building high-quality web solutions that are fast,
          secure, and easy to use. Our team focuses on delivering excellent
          user experiences and innovative features.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          {/* <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button> */}
          <p>Ph.no:+91 8657987450</p>
        </form>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </>
  );
}

export default App;
