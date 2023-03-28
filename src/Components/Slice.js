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
                    data.slice(1,11).map((value) => {
                        return (
                            <div className="container my-4">
                                <div className="row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={value.urlToImage} alt="" width="350" height="200" />
                                                <h5 className="card-title">{value.title}</h5>
                                                <p className="card-text">{value.description}</p>
                                                
                      <button className="btn btn-primary">Mark to read later</button>
                                            </div>
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
