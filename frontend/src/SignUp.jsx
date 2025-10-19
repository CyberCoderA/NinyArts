import { useState } from "react";
import axios from "axios";
import NavigationBar from './components/NavigationBar'
import HollowTextfield from "./components/HollowTextfield";

function Signup() {
    const [isMenuOpen, setMenuStatus] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/users/signup', {email, password});

            if (response.status == 200) {
                alert(response.data.message);
            }

            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred during login');
        }
    };

    return(
        <div className='bg-gradient-to-tl from-lime-200 to-primary h-screen w-full flex flex-col items-center'>
            <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus}/>
            <div div className="w-9/10 h-2/2 rounded-2xl bg-white p-3 flex flex-col justify-between items-center m-10 overflow-scroll lg:justify-around lg:overflow-auto lg:p-5">
                <h1 className="text-primary font-bold text-2xl md:text-4xl lg:text-6xl">SIGNUP</h1>
                <div className="flex flex-col gap-1 w-full lg:gap-10">
                    <HollowTextfield title="Email" placeholder="Enter email here" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <HollowTextfield title="Password" placeholder="Enter password here" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <HollowTextfield title="Confirm Password" placeholder="Retype your password" type="password" value={confirmPassword} onChange={(e) => 
                        setConfirmPassword(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-full lg:gap-5">
                    <button onClick={handleSignup} 
                    className="bg-primary text-white h-12 w-full rounded-xl transition duration-300 ease-in-out md:h-16 hover:cursor-pointer
                     hover:text-primary hover:bg-white  hover:border-primary hover:border-1">
                        <h1 className="font-bold text-center text-2xl md:text-2xl">
                            Signup
                        </h1>
                    </button>
                    
                    <div className="w-full flex flex-col items-center justify-center md:flex-row md:gap-2"> 
                        <h1 className="text-sm md:text-2xl">Already have an account?</h1>
                        <h1 className="text-sm md:text-2xl text-primary font-bold">Login!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;