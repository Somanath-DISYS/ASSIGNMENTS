import { useState } from "react";
import axios from "axios";

export default function TopComponent() {
  const [data1, setdata1] = useState([])

  let k = () => {
    axios.get("https://newsapi.org/v2/everything?q=cnn&apiKey=e65ebcd65dea4f66a252e56e2d7e7ab7")
      .then((response) => {
        setdata1(response.data.articles)
      })
  }
  return (
    <div className="container">
      {
        data1.map((value) => {
          return
        })
      }

    </div>
  )
}

