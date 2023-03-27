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
          return (
            <div className="container">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    {value.title}
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                   </div>
                   {value.description}
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}


{/* <div className="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Accordion Item #2
    </button>
  </h2>
  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
    <div class="accordion-body">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Accordion Item #3
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div class="accordion-body">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div> */}