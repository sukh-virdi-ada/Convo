import UserDetails from "../components/UserDetails"
import styled from "styled-components";

export default function UserProfile() {
  
  return ( 
  <div>
    <Container>
      <UserDetails/>
    </Container>
  </div>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131324;

  }
`;