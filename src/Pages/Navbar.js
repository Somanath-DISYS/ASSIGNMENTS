import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarComponent() {

    return (
        <div>
            <nav className="navbar navbar-expand bg-secondary ">
                <div className="ms-auto me-auto " >
                    <ul className="navbar-nav">
                  
                        <li className="nav-item">
                            <Link to='/' className="nav-link active mx-3">
                                <i className="bi bi-house me-1"></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Top' className="nav-link active mx-3">
                                <i className="bi bi-newspaper"></i>Top Headlines
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Choose' className="nav-link active mx-3">
                                <i className="bi bi-search"></i>Category
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Choose' className="nav-link active mx-3">
                            <i class="bi bi-person-bounding-box"></i>Login
                            </Link>
                        </li>

                       
                    </ul>

                </div>
            </nav >
        </div>
    )
}
