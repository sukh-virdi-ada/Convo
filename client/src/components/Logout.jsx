import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff, BiPieChart } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";

export default function Logout() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(async () => {
    setCurrentUser(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )
    );
  }, []);

  
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };

  const handlePiClick = () =>{
    navigate("/")
  }
  return (
    <Container>
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>

    {currentUser.type === "admin"
    ? <Button onClick={handlePiClick}>
    <BiPieChart />
    </Button>
    :<></>}
   
    </Container>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;

const Container = styled.div`
 
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    display: grid;
    grid-template-columns: 50% 50%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 50% 50%;
    }
  }
`;

