import React from 'react';
import styled from "react-emotion";

const StyledDiv = styled("div")`
  margin: 0.5em;
  padding: 0;
  border: 2px solid red;
`;

const App = ({title})=>{
  return (
    <StyledDiv>{title} App</StyledDiv>
  )
}

export default App;