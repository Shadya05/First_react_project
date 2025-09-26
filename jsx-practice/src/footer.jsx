function Footer() {
  const handlePrivacy = () => console.log("Privacy clicked");
  const handleTerms = () => console.log("Terms clicked");
  const handleContact = () => console.log("Contact clicked");

  return (
    <footer className="footer">
      <p>&copy; 2025 ReactProject. All rights reserved.</p>
      <div className="footer-links">
        <a href="#" onClick={handlePrivacy}>Privacy</a>
        <a href="#" onClick={handleTerms}>Terms</a>
        <a href="#" onClick={handleContact}>Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
