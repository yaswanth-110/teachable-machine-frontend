import { useState, useRef, useEffect } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [userdata, setuserdata] = useState("");
  const [passdata, setpassdata] = useState("");
  const imageref = useRef(null);
  const passref = useRef(null);
  // const [isLoggedin, setisloggedin] = useState(false);
  const onusernamechangehandler = (e) => {
    setuserdata(e.target.value);
  };
  const onpasschangehandler = (e) => {
    console.log(e.target.value);
    setpassdata(e.target.value);
  };

  const onsubmitchangehandler = (event) => {
    event.preventDefault();
    if (userdata.length == 0) {
      imageref.current.focus();
    } else if (passdata.length == 0) {
      passref.current.focus();
    }
    // if (userdata.length > 0 && passdata.length > 0) {
    //   localStorage.setItem({ username: 'userdata', passvalue: 'passdata' });
    //   setisloggedin(true);
    // }

    setuserdata("");
    setpassdata("");
  };
  // useEffect(() => {
  //   const storageitem = localStorage.getItem("isLoggedin");
  //   if (storageitem == "1") {
  //     setisloggedin(true);
  //   }
  // }, []);
  // if (isLoggedin) {
  //   return (
  //     <div>
  //       <h2>userLogged in</h2>
  //     </div>
  //   );
  // } else {
  return (
    <div className="login_class" style={{ backgroundColor: "white" }}>
      <h2 style={{ fontSize: "30px" }}>Login</h2>
      <form className="form_class" onSubmit={onsubmitchangehandler}>
        <div>
          <input
            ref={imageref}
            onChange={onusernamechangehandler}
            type="text"
            value={userdata}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            ref={passref}
            onChange={onpasschangehandler}
            type="password"
            value={passdata}
            placeholder="Password"
          />
        </div>
        <div>Forgot Password?</div>
        <button>Login</button>
        <div>Don't have an account? Signup</div>
        <div>------- Or ----------</div>
      </form>
    </div>
  );
};

export default LoginForm;
