import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div class="footer">
        <div class="about">
          <h2>About Interview</h2>
          <p>
            A fresh and an upcoming service provider, we write, design, develop
            content and consult to cater to unconventional and unorthodox
            requirements of companies, startups, and professionals. Just tell us
            what your problem is, and we’ll put in our best to ensure that
            you’re happy.
          </p>
          
        </div>
        <div class="contact-us">
          <h2>Contact Us</h2>
          <h4>: contact@dfgadjsy.in</h4>
          <h4>: +91 99999999</h4>
          <h3>Subscribe to get updates</h3>
          <input type="text" placeholder="E-mail Address" />
          <button>SIGN UP</button>
          <h5>We promise we won't span you.</h5>
        </div>
        <div class="extension">
          <h4>About Chrome extension</h4>
          <h4>About Inprep</h4>
          <h4>Target Audience</h4>
          <h4>FAQ's</h4>
          <h4>Carrier</h4>
          <p>
            A fresh and an upcoming service provider, we write, design, develop
            content and consult to cater to unconventional .
          </p>
          <button>I'm Interested</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .footer {
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    background: #001929;
    color: #ffffff;
  }
  .about {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* border: 1px solid red; */
  }
  .about h2 {
    /* text-align: center; */
    /* border: 1px solid red; */
    /* width: 50%; */
    margin: 40px 0px 0px 0px;
  }
  .about p {
    text-align: start;
    padding: 25px 42px 15px 0px;
    letter-spacing: 0.9px;
    width: 26vw;
    color: #ffffff;
    opacity: 0.8;
  }
  .logo {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* margin-left: 3rem; */
  }
  .round {
    border-radius: 50%;
    background: #2dabff;
    height: 1.5em;
    width: 1.5em;
    padding: 25px;
    margin-right: 15px;
  }
  .contact-us {
    /* border: 1px solid red; */
    text-align: start;
    /* margin-top: 10px; */
  }
  .contact-us h2 {
    /* text-align: start; */
    padding: 20px;
  }
  .contact-us h4 {
    font-size: small;
    padding: 5px;
  }
  .contact-us h3 {
    letter-spacing: 0.4px;
    font-size: larger;
    padding: 10px 0px 10px 0px;
  }
  .contact-us input {
    padding: 10px;
    width: 80%;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  .contact-us button {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #033455;
    color: #fff;
  }
  .contact-us h5 {
    padding: 10px 10px 10px 0px;
    text-align: start;
  }
  .extension h4 {
    cursor: pointer;
    padding: 0px 6px 6px 0px;
    font-size: smaller;
  }
  .extension p {
    width: 20vw;
    font-size: small;
    opacity: 0.8;
  }
  .extension button {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #033455;
    color: #fff;
  }

  @media (max-width: 400px) {
  
  .about, .contact-us, .extension {
      width: 100%;
      margin-left: 50px;
  }
  .about p{
    width: 100%;
  }
  .extension{
    margin-top: 20px;
  }
  .extension p {
    width: 100%
  }
}
  @media (max-width: 800px) {
  
  .about, .contact-us, .extension {
      width: 100%;
      margin-left: 50px;
    }
    .about p{
      width: 100%;
    }
    .extension{
      margin-top: 10px;
    }
    .extension p{
    width: 100%;
    padding: 0px 40px 0 0px;
  
  }
  .extension button{
    margin: 0px 0px 20px 0px;
  }
  .contact-us button{
    padding: 10px;
  }
}
`;

export default Footer;
