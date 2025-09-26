function SignUpModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={() => { alert("Signed up!"); onClose(); }}>Sign Up</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SignUpModal;
