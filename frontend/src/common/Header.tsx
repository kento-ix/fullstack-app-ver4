import { useState } from "react";
import { Link} from "react-router-dom";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Modal from "../components/auth/modal";

const Header = () => {
    const [modal, setModal] = useState(false); //for ther register and login
    const [modalType, setModalType] = useState<'login' | 'register'| null>(null);

    const openModal = (type: 'login' | 'register') => {
        setModalType(type);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setModalType(null);
      };

    return(
        <div className="w-full bg-slate-800 h-20 m-0 text-white flex justify-center">
            <div className="max-w-[2000px] w-full flex justify-between items-center px-4">
                <Link to="/" className="p-3"> Home </Link> 

                {/* fixed component */}
                <div className="space-x-10 flex">
                    <button className="hover:text-blue-300" onClick={() => openModal('login')}> Login </button>
                    <button className="hover:text-blue-300" onClick={() => openModal('register')}> SignUp </button>
                    <Link to="/mylisting" className="hover:text-blue-400"> MyListing </Link>
                    <Link to="/favorite" className="hover:text-blue-400"> Favorite </Link>
                    <Link to="/setting" className="hover:text-blue-400"> Setting </Link>
                </div>
            </div>

            <Modal isOpen={modal} onClose={closeModal}>
                {modalType === 'login' ? <Login /> : modalType === 'register' ? <Register />: null}
            </Modal>
        </div>

    );
}

export default Header;

