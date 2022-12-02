/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import Play from './components/Play';

function App() {
  const [cardInfos, setCardInfos] = useState({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
  });
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const [deck, setDeck] = useState([]);
  const [showDeck, setShowDeck] = useState(false);
  const [play, setPlay] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [randomCards, setRandomCards] = useState([]);

  const onSaveButtonClick = () => {
    setDeck((prevState) => [...prevState, cardInfos]);
    setCardInfos({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
    setHasTrunfo(deck.some((card) => card.cardTrunfo) || cardInfos.cardTrunfo);
  };

  // console.log(deck);

  const verifyAttributes = (attr1, attr2, attr3) => {
    const indivdualLimit = 90;
    const sumLimit = 210;

    const between0And90 = [attr1, attr2, attr3]
      .every((number) => number >= 0 && number <= indivdualLimit);
    const lessThan210 = [attr1, attr2, attr3]
      .reduce((acc, curr) => acc + curr, 0) <= sumLimit;

    return between0And90 && lessThan210;
  };

  const verifyString = (cardDescription, cardImage, cardName) => (
    [cardDescription, cardImage, cardName].every((info) => info.length > 0)
  );

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
    } = cardInfos;

    setCardInfos((prevState) => ({
      ...prevState,
      [name]: name === 'cardTrunfo' ? !prevState.cardTrunfo : value,
    }));

    const attrValid = verifyAttributes(Number(cardAttr1), Number(cardAttr2), Number(cardAttr3));
    const stringsValid = verifyString(cardDescription, cardImage, cardName);
    setIsSaveButtonDisabled(!(attrValid && stringsValid));
  };

  const chooseRender = () => {
    if (showDeck) {
      return (
        <Deck
          setHasTrunfo={setHasTrunfo}
          deck={deck}
          setShowDeck={setShowDeck}
          setDeck={setDeck}
        />
      );
    } if (play) {
      return (
        <Play
          deck={deck}
          setRandomCards={setRandomCards}
          randomCards={randomCards}
        />
      );
    }
    return null;
  };

  return (
    chooseRender() || (
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
          hasTrunfo={hasTrunfo}
          onInputChange={onInputChange}
          onSaveButtonClick={onSaveButtonClick}
          isSaveButtonDisabled={isSaveButtonDisabled}
        />
        <button
          type="button"
          onClick={() => setShowDeck(true)}
          name="showDeck"
        >
          Mostrar baralho
        </button>
        <button
          type="button"
          disabled={deck.length === 0}
          onClick={() => {
            setPlay(true);
            setRandomCards(deck.sort(() => Math.random() - 0.5));
          }}
          name="play"
        >
          Jogar
        </button>
        <Card
          cardName={cardInfos.cardName}
          cardDescription={cardInfos.cardDescription}
          cardAttr1={cardInfos.cardAttr1}
          cardAttr2={cardInfos.cardAttr2}
          cardAttr3={cardInfos.cardAttr3}
          cardImage={cardInfos.cardImage}
          cardRare={cardInfos.cardRare}
          cardTrunfo={cardInfos.cardTrunfo}
          deck={deck}
        />
      </GreatDiv>
    )

  );
}

const GreatDiv = styled.div`
  display: flex;
  min-height: 100vh;

  button[name=showDeck]{
    background-color: #333333;
    color: white;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: calc(100% - 50px);
    transform: translate(-100%, -100%);
    padding: 20px 30px 20px 30px;
    border: none;
    border-radius: 10px 0 0 10px;
  }

  button[name=play]{
    background-color: white;
    color: #333333;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: calc(100% - 120px);
    transform: translate(0, -100%);
    padding: 20px 30px 20px 30px;
    border: none;
    border-radius: 0 10px 10px 0;
  }
`;

export default App;
