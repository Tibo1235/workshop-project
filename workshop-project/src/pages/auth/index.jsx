import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function AuthPage() {
    return (
        <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 items-center border-b">
            <Link to={"/"} className="flex items-center justify-left">
                <GraduationCap className="h-8 w-8 mr-4"></GraduationCap>
                <span className="font-extrabold text-xl">MentalCare</span>
                </Link>
            <Link to={"/"} className="flex items-center justify-right">
                <button>
                    Sign Up
                </button>
            </Link>
            </header>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md px-4 py-8">
                    <h1 className="text-2xl font-bold text-center mb-4">Sign in</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default AuthPage;