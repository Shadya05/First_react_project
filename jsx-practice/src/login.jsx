function LoginModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={() => { alert("Logged in!"); onClose(); }}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default LoginModal;
