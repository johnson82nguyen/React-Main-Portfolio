import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
import styled from "styled-components";
import { FaMailBulk } from 'react-icons/fa';
import { Link } from "react-scroll";

// npm i @emailjs/browser

const Contact = () => {

  const Button = styled.button`
    background-color: #DCDCDC;
    color: white;
    text-align: center;
    align-items: center;
    padding: 20px 32px;
    border-radius: 5px;
    margin-bottom: 2vh;
    border: 0;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    font-family: sans-serif;
    font-weight: bold;
    border-outline: 0px;
    &:hover {
      background-color: #E0E0E0;
    }
  `

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0hni9x4",
        "template_ta0h6d7",
        form.current,
        "6q-C5YEgzmxpwSwNo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      alert("Thanks for sending a message!");
  };

  return (
    <div id="contact" className="contactformContainer">
        <div className="hmuDiv">
            <h1 className="h1hmu"> HMU</h1>
            <p2 className="p2thanks">Thanks for checking out my website. </p2>
            <p2 className="p2thanks">Feel free to leave a message and I will get back to you as soon as I can :)</p2>
        </div>
        <div className="contactFormDiv">
            <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                <span style={{color: 'skyblue', alignSelf:'center'}} title="GitHub" target="_blank"><FaMailBulk/></span>
                <label>Name</label>
                <input type="text" placeHolder="name..." name="user_name" />
                <label>Email</label>
                <input type="email" placeHolder="email..." name="user_email" />
                <label>Message</label>
                <textarea placeholder="Send a message..." name="message" />
                <input type="submit" value="Send" />
                </form>
            </StyledContactForm>
        </div>
        <div className="button-container">
                <Link to="home" spy={true} offset={-150} smooth={true} duration={500}>
                    <Button> 
                        Back to top
                    </Button>
                </Link>
        </div>
     </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 600px;
  display: flex;
  margin:auto;
  justify-content: center;
  form {
    background-color: white;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    height: 50%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 12px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    a {
        font-size: 30px;
        margin-bottom: 5px;
    }
    textarea {
      width: 100%;
      height: 200px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      padding-bottom: 6px;
      font-weight: bold;
      color: grey;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: skyblue;
      color: white;
      border: none;
      align-self: center;
    }

    input[type="submit"]:hover {
        background-color: #9FD8EF;
    }
  }
`;