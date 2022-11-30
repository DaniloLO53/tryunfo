import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';

function App() {
  return (
    <GreatDiv>
      <Form />
    </GreatDiv>
  );
}

const GreatDiv = styled.div`
  display: flex;
  min-height: 100vh;
`;

export default App;
