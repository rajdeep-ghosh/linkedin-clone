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
    </div>
  );
}

export default Login;

// https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4
