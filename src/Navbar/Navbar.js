import {Link} from "react-router-dom";
import {useState} from "react";
import Modal from "./Home/Modal/Modal";
import "../index.css"
const Navbar = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <nav className='navbar'>
            <h1>The products list</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <button onClick={()=> setModalActive(true)}>Create product</button>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </nav>


    )

}
export default Navbar