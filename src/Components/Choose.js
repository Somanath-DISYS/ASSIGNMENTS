import { useState } from "react";
import axios from "axios";
export default function ChooseComponent() {
    const [dataUS, setdataUS] = useState([])
    const getUS = () => {
        axios.get("https://newsapi.org/v2/everything?q=us&apiKey=e65ebcd65dea4f66a252e56e2d7e7ab7")
            .then((response) => {
                setdataUS(response.data.articles)
            })
    }
    const [dataBBC, setdataBBC] = useState([])
    const getBBC = () => {
        axios.get("https://newsapi.org/v2/everything?q=bbc&apiKey=e65ebcd65dea4f66a252e56e2d7e7ab7")
            .then((response) => {
                setdataBBC(response.data.articles)
            })
    }
    const [dataGmy, setdataGmy] = useState([])
    const getGermany = () => {
        axios.get("https://newsapi.org/v2/everything?q=germany&apiKey=e65ebcd65dea4f66a252e56e2d7e7ab7")
            .then((response) => {
                setdataGmy(response.data.articles)
            })
    }
    return (
        <>

            {
                dataUS.map((value) => {
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
                    onClick={getUS}>fetch US news</button>
            </div>

            {
                dataBBC.map((value) => {
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
                    onClick={getBBC}>fetch BBC news</button>
            </div>


            {
                dataGmy.map((value) => {
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
                    onClick={getGermany}>fetch Germany news</button>
            </div>

        </>
    )
}
