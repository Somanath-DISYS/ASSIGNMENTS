import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'

export default function NavbarComponent() {

    return (
        <div>
            <nav className="navbar navbar-expand bg-light ">
                <div className="ms-auto me-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">NewsAPI</li>
                        <li className="nav-item">
                            <a href="/" className="nav-link active mx-3"><i className="bi bi-house me-1"></i>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link active mx-3"><i className="bi bi-newspaper"></i>Top Headlines</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link active mx-3"><i className="bi bi-search"></i>Category</a>
                        </li>
                        <li className="nav-item">
                            <input className=" form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        </li>
                        <li className="nav-item ">
                            <a href="/" className="nav-link active mx-3"><i class="bi bi-bookmark"></i>Bookmark</a>
                        </li>
                    </ul>

                </div>
            </nav >
        </div>
    )
}
