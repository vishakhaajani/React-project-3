import React from 'react'
import { Link } from 'react-router-dom'
import '../menu.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ height: "70px" }}>
                <div className="container">
                    <Link className="navbar-brand  text-light">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active  text-light" aria-current="page" to={'/home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to={'/add'}>Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

