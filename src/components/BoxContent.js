import React from "react";
import "../components/BoxContent.css";

const BoxContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>The Numbers Speak for themselves</h4>
        </div>
        <div className="col">
          <div className="wrapper col">
            <div className="box">
              <div className="box-content">
                <div className="font">
                  <span class="material-symbols-outlined">check_box</span>
                </div>
                <h1>1Lakh+</h1>
                <p>LOI for user</p>
              </div>
            </div>
            <div className="box">
              <div className="box-content">
                <div className="font">
                  <span class="material-symbols-outlined">check_box</span>
                </div>
                <h1>40+</h1>
                <p>startup collabration</p>
              </div>
            </div>
          </div>
          <div className="wrapper col">
            <div className="box">
              <div className="box-content">
                <div className="font">
                  <span class="material-symbols-outlined">check_box</span>
                </div>
                <h1>60+</h1>
                <p>MOU signed</p>
              </div>
            </div>
            <div className="box">
              <div className="box-content">
                <div className="font">
                  <span class="material-symbols-outlined">check_box</span>
                </div>
                <h1>50+</h1>
                <p>pilots deployed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxContent;
