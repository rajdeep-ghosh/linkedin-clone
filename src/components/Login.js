import "../styles/Login.css";
import LinkedinLogoFull from "../images/LI-Logo.png";

function Login() {
  return (
    <div className="login">
      <header className="login__header">
        <a href="/">
          <img src={LinkedinLogoFull} alt="Linkedin Logo" />
        </a>
      </header>
      <div className="login__body">
        <h1 className="login__title">Welcome to your professional community</h1>
        <form className="login__form">
          <input type="text" placeholder="Full Name" required />
          <input type="url" placeholder="Profile Pic URL (optional)" />
          <input type="email" placeholder="Email" required /> 
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign in</button>
        </form>
        <p className="login__register">
          Not a member?{" "}
          <span>Register Now</span>
        </p>
      </div>
    </div>
  );
}

export default Login;

// https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4
