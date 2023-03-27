import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomeComponent() {
    const [data, setdata] = useState([])

    const getnews = () => {
        axios.get("https://newsapi.org/v2/everything?q=sports&apiKey=e65ebcd65dea4f66a252e56e2d7e7ab7")
            .then((response) => {
                setdata(response.data.articles)
            })
    }
    return (
        <>
            <div className="container">

                {
                    data.map((value) => {
                        return (
                            <div className="row my-4">
                                <div className="col col-md-8 ">
                                    <div className="card">
                                        <img className="card-img-top" src={value.urlToImage} alt="images" />

                                        <div className="card-body">
                                            <h5 className="card-value.{value.title}">{value.title}</h5>
                                            <p>{value.description}</p>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                Mark
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
                <div className="container my-3">
                    <button className='btn btn-primary'
                        onClick={getnews}>fetch news</button>
                </div>

            </div>
        </>
    )
}
