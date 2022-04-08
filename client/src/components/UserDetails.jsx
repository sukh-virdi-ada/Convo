import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosSave } from "react-icons/io";

export default function UserDetails() {
    const [currentUser, setCurrentUser] = useState("");
    useEffect(async () => {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }, []);
    return (
        <FormContainer>
        <form>
        <h1> Account Settings</h1>
        <span align="center">
            <div className="heading">
                <br/> 
                <br/> 
                <br/>               
                <p>Convo Account Type</p>
                <br/> 
                <div className="data">{currentUser.type}</div>
                </div>
            <div className="heading">
                <br/> 
                <br/> 
                <br/>               
                <p>Username</p>
                <br/> 
                <input type="text" id="username" name="username" placeholder="Enter a new username" value={currentUser.username}/>
            </div>
            <div className="heading">                
                <br/> 
                <br/> 
                <br/>
                <p>Email Address</p> 
                <br/> 
                <div className="data" contentEditable="true">{currentUser.email}</div>
                </div>
            <div className="heading">
                <br/> 
                <br/> 
                <br/>
                <p>Avatar</p>
                <br/> 
                <img
                  src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                  alt="avatar"
                />
                </div>
                <button><IoIosSave/></button>
        </span>
        <div className="settings">test</div>
        </form>
        </FormContainer>
    );
  }

  const FormContainer = styled.div`
  height: 85vh;
  width: 85vw;
  align-items: center;
  flex-direction: column;
  background-color: #00000076;
  display: flex;
  span {
    color: white;
    text-transform: uppercase;
    width:237.3px;
    height:32px;
    display:table;
    margin-left: auto;
    margin-right: auto;
    }
    h1 {
      align: center;
      color: white
    };
  
  .settings {
    width: 200px;
    color: white;
  }
  .username {
    font-weight: bold;    
  }
  .data {
    font-weight: normal;    
  }
  .heading {
    font-weight: bold;    
  }
  button {
    padding: 0.3rem 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9a86f3;
    border: none;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      padding: 0.3rem 1rem;
      svg {
        font-size: 1rem;
      }
    }
    svg {
      font-size: 2rem;
      color: white;
    }
  }
  
`