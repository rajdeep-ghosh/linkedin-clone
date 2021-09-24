import "../styles/Login.css";
import LinkedinLogoFull from "../images/LI-Logo.png";
import { useState } from "react";
import { auth } from "../services/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dp, setDp] = useState("");

  function register() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: dp,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                dpURL: dp,
              })
            );
          });
      })
      .catch((err) => {
        alert(err);
      });
  }

  function loginToApp() {}

  return (
    <div className="login">
      <header className="login__header">
        <a href="/">
          <img src={LinkedinLogoFull} alt="Linkedin Logo" />
        </a>
      </header>
      <div className="login__body">
        <div>
          <h1 className="login__title">
            Welcome to your professional community
          </h1>
          <form className="login__form">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              onChange={(e) => {
                setDp(e.target.value);
              }}
              value={dp}
              type="url"
              placeholder="Profile Pic URL (optional)"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit" onClick={loginToApp}>
              Sign in
            </button>
          </form>
          <p className="login__register">
            Not a member? <span onClick={register}>Register Now</span>
          </p>
        </div>
        <div className="login__bgImg">
          <img
            className="img-d"
            src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="bg-img"
          />
          <img
            className="img-m"
            src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn"
            alt="bg-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
