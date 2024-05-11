import React from "react";
import "../Cards/TextCard.css";

const TextCard = () => {
  return (
    <div className="texthead">
      <a href="/">FAQs</a>
      <h1>incase you missed anything</h1>
      <div className="section4">
        <div className="input d-flex">
          <span class=" fs-2 material-symbols-outlined">
            arrow_circle_right
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamu
            dfgsdfg bsrfgsdfg fhf.
          </p>
        </div>
        <div className="input d-flex">
          <span class=" fs-2 material-symbols-outlined">
            arrow_circle_right
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dfgsdfg bsrfgsdfg fhf.
          </p>
        </div>
        <div className="input  d-flex">
          <span class="fs-2 material-symbols-outlined">arrow_circle_right</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dfgsdfg bsrfgsdfg fhf.
          </p>
        </div>
        <p className="bottom">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum at
          esse eum optio enim rem perferendis fugiat temporibus veniam soluta,
          suscipit, facere alias dolorum in dolorem."
        </p>
      </div>
    </div>
  );
};

export default TextCard;
