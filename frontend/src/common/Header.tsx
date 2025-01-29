import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../components/auth/signup";
import Modal from "../components/auth/modal";

const Header = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false); //for ther register and login
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return(
        <div className="w-full bg-slate-800 h-20 m-0 text-white flex justify-between items-center">
            <Link to="/" className="p-3 text-left">
                Home
            </Link>

            <div className="space-x-6 text-right">
                <button className="hover:text-blue-300" onClick={openModal}>
                    Login  
                </button>
                <button className="hover:text-blue-300" onClick={openModal}>
                    SignUp
                </button>
                <Link to="/mylisting" className="hover:text-blue-400">
                    MyListing
                </Link>
                <Link to="/favorite" className="hover:text-blue-400">
                    Favorite
                </Link>
                <Link to="/setting" className="hover:text-blue-400">
                    Setting
                </Link>
            </div>

            <Modal isOpen={modal} onClose={closeModal}>
                <div className="text-black">Hello</div>
            </Modal>
        </div>
    );
}

export default Header;