import { useState } from "react";
import NavigationBar from './components/NavigationBar'
import HollowTextfield from "./components/HollowTextfield";
import ButtonRectangular from "./components/ButtonRectangular";

function Login() {
    const [isMenuOpen, setMenuStatus] = useState(false);

    return (
        <div className='bg-gradient-to-tl from-lime-200 to-primary h-screen w-full flex flex-col items-center'>
            <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus}/>
            <div className="w-10/12 h-10/12 rounded-2xl bg-white p-5 flex flex-col justify-between items-center m-10 overflow-scroll lg:justify-around lg:overflow-auto">
                <h1 className="text-primary font-bold text-2xl md:text-4xl lg:text-6xl">LOGIN</h1>
                <div className="flex flex-col gap-1 w-full lg:gap-10">
                    <HollowTextfield title="Email" placeholder="Enter email here" type="email" />
                    <HollowTextfield title="Password" placeholder="Enter password here" type="password" />
                </div>
                <div className="flex flex-col gap-2 w-full lg:gap-5">
                    <button className="bg-primary text-white h-12 w-full rounded-xl transition duration-300 ease-in-out md:h-16 hover:cursor-pointer hover:text-primary hover:bg-white  hover:border-primary hover:border-1">
                        <h1 className="font-bold text-center text-xl md:text-2xl">
                            Login
                        </h1>
                    </button>
                    
                    <div className="flex gap-1 justify-center md:gap-2"> 
                        <h1 className="text-sm md:text-2xl">Don't have an account?</h1>
                        <h1 className="text-sm md:text-2xl text-primary font-bold">Signup!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;