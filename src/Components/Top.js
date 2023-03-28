import { useState, useEffect } from "react";
import axios from "axios";

export default function TopComponent() {
  const [data1, setdata1] = useState([])
  
  const call = () => {
    axios.get("https://newsapi.org/v2/everything?q=cnn&apiKey=e65ebcd65dea4f66a252e56e2d7e7ab7")
      .then((response) => {
        setdata1(response.data.articles)
      })
  }
  return (
    <div className="container">
      {
        data1.slice(1,11).map((value) => {
          return (
            <>
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body ">
                      <h5 className="card-title text-danger">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                    </div>
                  </div>
                </div>
                
              </div>

              
            </>
          )
        })
      }
      <button id="toop" onClick={call}>open Top HeadLines</button>

    </div>
  )
}

