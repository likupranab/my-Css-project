import React, { useEffect } from "react";
import "./Login.css"; // Import the CSS file
import { FaUser,FaLock } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    const handleClick = (event) => {
      for (let i = 0; i < 100; i++) {
        let spark = document.createElement("i");
        spark.classList.add("spark");

        const loginContainerRect = document
          .querySelector(".login-container")
          .getBoundingClientRect();
        const sparkX = event.clientX - loginContainerRect.left;
        const sparkY = event.clientY - loginContainerRect.top;

        spark.style.top = sparkY + "px";
        spark.style.left = sparkX + "px";

        let randomX = (Math.random() - 0.5) * loginContainerRect.width;
        let randomY = (Math.random() - 0.5) * loginContainerRect.height;
        spark.style.setProperty("--randomX", randomX + "px");
        spark.style.setProperty("--randomY", randomY + "px");

        let randomSize = Math.random() * 30 + 2;
        spark.style.width = randomSize + "px";
        spark.style.height = randomSize + "px";

        let duration = Math.random() * 2 + 0.5;
        spark.style.animationDuration = duration + "s";

        let colours = ["red", "pink", "yellow"];
        let randomColour = colours[Math.floor(Math.random() * colours.length)];
        spark.style.background = randomColour;

        document.querySelector(".login-container").appendChild(spark);

        setTimeout(() => {
          spark.remove();
        }, 2000);
      }
    };

    document
      .querySelector(".login-container")
      .addEventListener("click", handleClick);

    return () => {
      document
        .querySelector(".login-container")
        .removeEventListener("click", handleClick);
    };
  }, []);

  return (
    
    <div className="login-container">
     
     <div className="login-box">
     
      <h1>Login</h1>
      <div className="input-fileds">
      <input type="text" placeholder="Username."/><FaUser className="icon" />
      </div>
      <div className="input-fileds">
      <input type="password" placeholder="Password."/><FaLock className="icon" />
      </div>
      <button>Login</button>

     </div>
    </div>
    
  );
};

export default Login;
