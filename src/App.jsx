import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [cardInfos, setCardInfos] = useState({
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: '',
  });
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const onSaveButtonClick = () => {

  };

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setCardInfos((prevState) => ({ ...prevState, [name]: value }));

    console.log(value, name);
  };

  console.log(setIsSaveButtonDisabled, setCardInfos);

  return (
    <GreatDiv>
      <Form
        cardName={cardInfos.cardName}
        cardDescription={cardInfos.cardDescription}
        cardAttr1={cardInfos.cardAttr1}
        cardAttr2={cardInfos.cardAttr2}
        cardAttr3={cardInfos.cardAttr3}
        cardImage={cardInfos.cardImage}
        cardRare={cardInfos.cardRare}
        cardTrunfo={cardInfos.cardTrunfo}
        hasTrunfo={cardInfos.hasTrunfo}
        onInputChange={onInputChange}
        onSaveButtonClick={onSaveButtonClick}
        isSaveButtonDisabled={isSaveButtonDisabled}
      />
      <Card
        cardName={cardInfos.cardName}
        cardDescription={cardInfos.cardDescription}
        cardAttr1={cardInfos.cardAttr1}
        cardAttr2={cardInfos.cardAttr2}
        cardAttr3={cardInfos.cardAttr3}
        cardImage={cardInfos.cardImage}
        cardRare={cardInfos.cardRare}
        cardTrunfo={cardInfos.cardTrunfo}
      />
    </GreatDiv>
  );
}

const GreatDiv = styled.div`
  display: flex;
  min-height: 100vh;
`;

export default App;
