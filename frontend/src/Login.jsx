import { useState } from "react";
import axios from "axios";
import NavigationBar from "./components/NavigationBar";
import HollowTextfield from "./components/HollowTextfield";

function Login() {
  const [isMenuOpen, setMenuStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/login', {email, password});
      alert(response.data.message);
      
      if (response.status == 200) {
        localStorage.setItem('userID', response.data.userId);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div className="bg-gradient-to-tl from-lime-200 to-primary h-screen w-full flex flex-col items-center">
      <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus} />
      <div className="w-9/10 h-2/2 rounded-2xl bg-white p-3 flex flex-col justify-between items-center m-10 overflow-scroll lg:justify-around lg:overflow-auto lg:p-5">
        <h1 className="text-primary font-bold text-2xl md:text-4xl lg:text-6xl">
          LOGIN
        </h1>
        <div className="flex flex-col gap-1 w-full lg:gap-10">
          <HollowTextfield
            title="Email"
            placeholder="Enter email here"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <HollowTextfield
            title="Password"
            placeholder="Enter password here"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-full lg:gap-5">
          <button onClick={handleLogin} className="bg-primary text-white h-12 w-full rounded-xl transition duration-300 ease-in-out md:h-16 hover:cursor-pointer hover:text-primary hover:bg-white  hover:border-primary hover:border-1">
            <h1 className="font-bold text-center text-2xl md:text-2xl">
              Login
            </h1>
          </button>

          <div className="flex gap-1 justify-center md:gap-2">
            <h1 className="text-sm md:text-2xl">Don't have an account?</h1>
            <h1 className="text-sm md:text-2xl text-primary font-bold">
              Signup!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
