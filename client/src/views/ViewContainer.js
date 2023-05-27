import Navigation from "components/Navigation"
import styled from "styled-components"


const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`







const ViewContainer = ({ children }) => {
  return (
    <StyledDiv>
      <Navigation/>
      { children }
    </StyledDiv>
  )
}

export default ViewContainer