import React from "react";
import "../Pages/Animate.css"; // Make sure the path to your CSS file is correct.

const Animate = () => {
  return (
    <div className="section">
      <div className="section1">
        <div className="wavecontainer">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
        <div className="section2">
          <div class="container2">
            <div class="row1">
              <div class="row">
                <div class="col">
                  <div class="card shadow-sm" style={{ width: "18rem" }}>
                    <div class="card-body d-flex">
                      <span class="material-symbols-outlined">schedule</span>
                      <p class="card-text d-block">
                        <div>
                          <div>24*7 mock</div>
                          <div>interview simulator</div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm" style={{ width: "18rem" }}>
                    <div className="card-body d-flex">
                      <span class="material-symbols-outlined">
                        emoji_events
                      </span>
                      <p class="card-text d-block">
                        <div>
                          <div>360 goals</div>
                          <div>oriented learning</div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm" style={{ width: "18rem" }}>
                    <div class="card-body d-flex">
                      <span class="material-symbols-outlined">monitoring</span>
                      <p class="card-text d-block">
                        <div>
                          <div>Detailed</div>
                          <div>Progress tracking</div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row2">
              <div class="row">
                <div class="col">
                  <div class="card shadow-sm" style={{ width: "18rem" }}>
                    <div class="card-body d-flex">
                      <span class="material-symbols-outlined">description</span>
                      <p class="card-text d-block">
                        <div>
                          <div>choose from</div>
                          <div>100+ templates</div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm" style={{ width: "18rem" }}>
                    <div class="card-body d-flex">
                      <span class="material-symbols-outlined">
                        sports_esports
                      </span>
                      <p class="card-text d-block">
                        <div>
                          <div>Personalised</div>
                          <div>Games and resouses</div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm" style={{ width: "18rem" }}>
                    <div class="card-body d-flex">
                      <span class="material-symbols-outlined">draft</span>
                      <p class="card-text d-block">
                        <div>
                          <div>create custom</div>
                          <div>interviw template</div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animate;
