import React from 'react'
import '../components/Navbar.css'
const Navbar = () => {


    return (
        <div>
            <nav className="navbar shadow-sm">
                <div className="navbar-left">
                    <div className="logo">
                        <span class=" fs-2  material-symbols-outlined">
                            stars
                        </span>

                        <span className='lg'>YOURLOGO</span>
                    </div>
                </div>
                <div className='.navbar-center'>
                    <ul className="nav-links">
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#products">Our Products</a></li>
                        <li><a href="#perks">Perks</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <button className='btn custom-button'>
                        Get In Touch
                    </button>
                </div>



            </nav >
        </div >
    )
}

export default Navbar


