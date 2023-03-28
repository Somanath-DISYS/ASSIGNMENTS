import React from 'react'

export default function TailerComponent() {
    return (
        <>
            <div className="App" >
                <footer className="py-3 my-4" style={{
                    "position": "fixed",
                    "padding": "10px 10px 0px 10px",
                    "bottom": "0",
                    "width": "100%",
                    "height": " 40px"
                }}>
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About also via</a></li>

                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted bi bi-facebook">Facebook</a></li>


                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted bi bi-instagram">Instgaram</a></li>


                    </ul>
                    <p className="text-center text-muted">© 2022 Company, Inc</p>
                </footer>
            </div>
        </>
    )
}
