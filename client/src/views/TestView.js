import styled from "styled-components"


const StyledDiv = styled.div`

`

const TestView = ({ children }) => {
  return (
    <StyledDiv>
      { children }
    </StyledDiv>
  )
}

export default TestView