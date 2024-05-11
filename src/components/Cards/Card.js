import React from "react";
import "../Cards/Card.css";

const Card = () => {
  return (
    <div className="box-container">
      <div className="main-heading">
        <p>
          We Understand Your Challenges and{" "}
          <div>
            have
            <span
              className="head ms-2"
              style={{ color: " rgba(13, 102, 235, 0.721)" }}
            >
              Solution just for you
            </span>
          </div>
        </p>
      </div>
      <div class="card-container">
        <div class="row row-cols-1 row-cols-md-2">
          <div>
            <div class="col-12 col-sm-6 col-md-3-12 col-12 col-sm-6 col-md-3-sm-6 col-12 col-sm-6 col-md-3-md-3">
              <div className="card1">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title">For Students</h6>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Goal based Mock simulation</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Games And resourses</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>practice anytime anywhere</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div className="card2">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yJTIwYnVzc2luZXNzJTIwY29kaW5nfGVufDB8fDB8fHww"
                    alt=".."
                  />
                  <div class="card-body">
                    <h6 class="card-title">For Bussiness</h6>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>upskil all student for interview</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>for hiring interview</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>analyze student and mentor performance</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="col-12 col-sm-6 col-md-3">
              <div className="card3">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt=".."
                  />
                  <div class="card-body">
                    <h6 class="card-title">For Colleges</h6>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Overcome the lack of mentor</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Product based comuncator</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Increase placement</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div className="card4">
                <div class="card">
                  <img
                    src="https://media.istockphoto.com/id/1449171785/photo/young-it-specialist-working-at-pc-at-home-debugging-java-script-cyber-space-error.jpg?s=2048x2048&w=is&k=20&c=Rdz13C792Muqpnz6Ejc5uNTWzWsjTTq1EZNMZINTl3Q="
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title">For Instructor</h6>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Create Template for entire cohart</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Monitor progress for individual student</h6>
                    </div>
                    <div className="main d-flex">
                      <div></div>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <h6>Improve teaching goals </h6>
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

export default Card;
