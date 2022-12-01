import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

function Deck({ deck, setShowDeck }) {
  return (
    <div>
      <SyledFilter>
        <h2>Todas as cartas</h2>
        <div>
          <p>Filtrar</p>
          <label htmlFor="name-filter">
            <input
              id="name-filter"
              placeholder="Nome da Carta"
            />
          </label>
          <label htmlFor="rare-filter">
            <input
              id="rare-filter"
              placeholder="Raridade"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={() => setShowDeck(false)}
        >
          Voltar
        </button>
      </SyledFilter>
      <StyledDeck>
        {deck.map(({
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        }) => (
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

        ))}
      </StyledDeck>
    </div>

  );
}

const SyledFilter = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
      padding: 20px 30px 20px 30px;
      background-color: #035e96;
      color: white;
      font-weight: 700;
      border-radius: 8px;
      border: none;
    }

  div {
    /* background-color: purple; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    width: 40%;
    font-size: 24px;

    label {
      height: 40px;
      width: 300px;
      background-color: red;
    }

    input {
      height: 100%;
      width: 100%;
    }
  }
`;

const StyledDeck = styled.div`
  /* background: green; */
  display: flex;
  flex-wrap: wrap;

  & > div > div {
    /* background-color: red; */
    min-height: 750px;
    margin: 60px;
  }
`;

Deck.propTypes = {
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
  setShowDeck: PropTypes.func.isRequired,
};

export default Deck;
