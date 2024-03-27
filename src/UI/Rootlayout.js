import { Outlet } from "react-router-dom";
import logo from '../images/logo.svg';
import rules from '../images/image-rules.svg'
import closeModal from '../images/icon-close.svg'
import '../index.css'
import '../queries.css'
import { useContext, useState } from "react";
import { PicksContext } from "../context/picks-context";

function Rootlayout() {
    const { score } = useContext(PicksContext)
    const [showModal, setShowModal] = useState(false)

    const handleModalShow = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className="heading">
                <img src={logo} alt="main logo" />
                <div className="score">
                    <span>SCORE</span>
                    <span>{score}</span>
                </div>
            </div>
            <div className="wrapper">
                <Outlet />
                <span className="rules" onClick={handleModalShow}>RULES</span>
                {showModal &&
                    <div className="modal_overlay" >
                        <div className="modal_backdrop" onClick={handleModalShow} />
                        <div className="modal_content">
                            <div className="modal_icon">
                                <p>RULES</p>
                                <img src={closeModal} alt="close modal icon" onClick={handleModalShow} className="close" />
                            </div>
                            <img src={rules} alt="rules" />
                            <img src={closeModal} alt="close modal icon 2" onClick={handleModalShow} className="close_for_responsive" />
                        </div>
                    </div>}
            </div>
        </>
    );
}

export default Rootlayout;