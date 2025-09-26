function Hero({ onGetStarted, onLearnMore }) {
  return (
    <section className="hero">
      <h1>Build Modern React UIs 🚀</h1>
      <p>Professional, responsive, and clean React components for your web app.</p>
      <div className="hero-buttons">
        <button className="btn signup-btn" onClick={onGetStarted}>Get Started</button>
        <button className="btn login-btn" onClick={onLearnMore}>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
