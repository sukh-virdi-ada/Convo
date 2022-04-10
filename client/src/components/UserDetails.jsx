import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSave } from "react-icons/io";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

export default function UserDetail() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState("");
    useEffect(async () => {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }, []);

    const handleBack = () =>{
      navigate("/");
    }
  
  return (
    <>
      <FormContainer>
      <form>
        
        <span align="center">
          <h1>Account Settings</h1>
          <br/> <br/> <br/>
            <div className="heading">
                <p>Convo Account Type</p>
                <br/> 
                <div className="data">{currentUser.type}</div>
                </div>
            <div className="heading">
                <br/> 
                <br/>             
                <p>Username</p>
                <br/> 
                {currentUser.type === "standard"
                ?<div className="data">{currentUser.username}</div>
              :<input type="text" id="username" name="username" placeholder="Enter a new username" value={currentUser.username}/>}
            </div>
            <div className="heading">   
                <br/> 
                <br/>
                <p>Email Address</p> 
                <br/> 
                <div className="data" contentEditable="true">{currentUser.email}</div>
                </div>
            <div className="heading">
                <br/> 
                <br/>
                <p>Avatar</p>
                <br/> 
                <img
                  src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                  alt="avatar"
                />
                </div>
                <br/> 
                <br/> 
                <button onClick={handleBack}><IoIosArrowBack/></button>
                <button ><IoIosSave/></button>
        </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    margin-right: 50px;
    margin-left: 50px;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
