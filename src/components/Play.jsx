/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

function Play({ deck, randomCards, setRandomCards }) {
  const [position, setPosition] = useState(0);

  // console.log(position, randomCards);

  const renderCard = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = randomCards[position];

    return (
      <Card
        cardName={cardName}
        cardDescription={cardDescription}
        cardAttr1={cardAttr1}
        cardAttr2={cardAttr2}
        cardAttr3={cardAttr3}
        cardImage={cardImage}
        cardRare={cardRare}
        cardTrunfo={cardTrunfo}
      />
    );
  };

  return (
    <StyledPlayContainer>
      {renderCard()}
      <button
        type="button"
        name="next-card"
        onClick={() => {
          console.log(position, randomCards);
          setPosition((prevState) => (
            prevState === randomCards.length - 1 ? prevState : prevState + 1
          ));
        }}
      >
        Pŕoxima carta
      </button>
      <p name="cards-left">
        Cartas restantes:
        {' '}
        {`${randomCards.length - position - 1} / ${randomCards.length}`}
      </p>
      <Card default="default" />
    </StyledPlayContainer>
  );
}

const StyledPlayContainer = styled.div`
  display: flex;
  min-height: 100vh;

  button[name=next-card] {
    background-color: white;
    border-radius: 8px;
    position: absolute;
    left: calc(50% - 270px);
    top: calc(50% + 320px);
    transform: translate(-50%, 50%);
    padding: 20px;
  }

  p[name=cards-left] {
    background-color: white;
    border-radius: 8px;
    position: absolute;
    left: calc(50% + 270px);
    top: calc(50% + 320px);
    transform: translate(-50%, 50%);
    padding: 20px;
  }

  & > div {
    /* background-color: green; */
    align-items: flex-end;

    & > div {
      /* background-color: purple; */
      margin: 40px;
    }

    &:last-child > div {
      background-color: red;
      position: relative;
    }

    &:last-child > div::after {
      content: '';
      background-image: url('./assets/logo.jpg');
      background-position: center;
      background-size: cover;
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      top: 0;
      border-radius: 20px;
    }
  }

  & > div:last-child {
    /* background-color: red; */
    align-items: flex-start;
  }
`;

Play.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  randomCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  setRandomCards: PropTypes.func.isRequired,
};

export default Play;
