import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import MessagesSentOverTime from "./MessagesSentOverTime";
import TypeOfUsers from "./TypeOfUsers";
import UsersOverTime from "./UsersOverTime";
import OnlineUsers from "./OnlineUsers";
export default function Welcome() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(async () => {
    setCurrentUser(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )
    );
  }, []);
  return (
    <>
    {currentUser.type === "admin"
    ?(<Container>
      <div className="head">
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>This is the Admin Dashboard.</h3>
      </div>
     
      <div className="adminContainer">
      <UsersOverTime/>
      <TypeOfUsers/>
      <MessagesSentOverTime/>
      <OnlineUsers/>
      </div>      
    </Container>)

    :(<Container>
      <img src={Logo} alt="" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>)}
    </>
    
    
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  .head{
    margin: 30px;
  }
  .adminContainer{
    height: 100%;
    width: 100%;
    display: grid;
    row-gap: 5rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 45% 45%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 50% 50%;
    }
  }
`;

