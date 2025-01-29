import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    const handleNavigationClick = (path: string) => {
        navigate(path);
    };

    return(
        <div className="w-full bg-slate-800 h-36 m-0 text-white">
            <Link to="/" className="p-3 text-left">
                Home
            </Link>

            <div className="space-x-6 text-right">
                <button className="hover:text-blue-300">
                    Login  
                </button>
                <button className="hover:text-blue-300">
                    Signin
                </button>
                <button onClick={() => handleNavigationClick("/mylisting")} className="hover:text-blue-400">
                    My Listing
                </button>
                <button onClick={() => handleNavigationClick("/favorite")} className="hover:text-blue-400">
                    Favorite
                </button>
                <button onClick={() => handleNavigationClick("/setting")} className="hover:text-blue-400">
                    Setting
                </button>
            </div>
        </div>
    );
}

export default Header;