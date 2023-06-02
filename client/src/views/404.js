import styled from "styled-components"


const View404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  flex-grow: 2;
  font-size: 4em;
  color: rgba(200, 200, 200, 1);
`


const Error404 = () => {
  return (
    <View404>
      <h1>404</h1>
    </View404>
  )
}

export default Error404