import styled from "styled-components"


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: white;
  flex-grow: 2;
  
  border-radius: 10px 0 0 10px;
  padding: 40px 0 0 20px;
`

const ViewContainer = ({ children }) => {
  return (
    <StyledDiv>
      { children }
    </StyledDiv>
  )
}

export default ViewContainer