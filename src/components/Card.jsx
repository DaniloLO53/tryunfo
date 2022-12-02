import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Card(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    remove,
    setDeck,
    setHasTrunfo,
    // deck,
  } = props;

  const removeButton = (
    <StyledRemoveButton
      type="button"
      onClick={() => {
        setDeck((prevState) => prevState.filter((card) => card.cardName !== cardName));
        console.log(cardTrunfo);
        setHasTrunfo(!cardTrunfo);
      }}
    >
      Remover
    </StyledRemoveButton>
  );

  return (
    <StyledCardContainer>
      <StyledCard>
        <div>
          <div name="name">
            <p data-testid="rare-card">{cardRare}</p>
            <h3 data-testid="name-card">{cardName}</h3>
          </div>
          <figure>
            <img src={cardImage} alt={cardName} data-testid="description-card" />
            {cardTrunfo && (
              <div>
                <h3 data-testid="trunfo-card">Super Trunfo</h3>
              </div>
            )}

          </figure>
        </div>
        <div data-testid="description-card">
          <p>{cardDescription}</p>
        </div>
        <div name="attributes">
          <div>
            <p>Luta</p>
            <p>---------------------------</p>
            <span data-testid="attr1-card">{cardAttr1}</span>
          </div>
          <div>
            <p>Inteligência</p>
            <p>-------------------</p>
            <span data-testid="attr2-card">{cardAttr2}</span>
          </div>
          <div>
            <p>Resistência</p>
            <p>-------------------</p>
            <span data-testid="attr3-card">{cardAttr3}</span>
          </div>
        </div>
      </StyledCard>
      {remove && removeButton}
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div`
  background-color: #333333;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Epilogue', sans-serif;
  font-size: 1.2rem;
`;

const StyledCard = styled.div`
  background-color: #035e96;
  width: 50%;
  height: 70%;
  outline: 8px solid white;
  border-radius: 20px;

  div[name=name] {
    background-color: #012033;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    color: white;

    h3 {
      padding: 15px;
      text-align: end;
      font-weight: 900;
      text-shadow: 0 0 30px white;
    }
  }

  & div[name=attributes] {
    background-color: white;
    transform: translateY(-45px);
    clip-path: polygon(0 18%, 100% 0, 100% 100%, 0 100%);
    margin: 15px 20px 0 20px;
    height: 200px;
    padding-top: 34px;
    border-radius: 0 0 15px 15px;

    div {
      /* background-color: green; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0 5px 0;
      padding: 3px 20px 3px 20px;

      span {
        background-color: #012033;
        color: white;
        padding: 10px 15px 10px 15px;
        border-radius: 0 30% 30% 0;
        font-weight: 700;
      }
    }
  }

  & div:first-of-type figure {
    width: 100%;
    position: relative;
    /* background-color: red; */
  }

  & div:first-of-type figure div {
    background-color: #012033;
    color: white;
    width: 100px;
    height: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  & div:first-of-type figure img {
    width: 100%;
    clip-path: polygon(100% 0%, 100% 85%, 0% 100%, 0% 0%);
  }

  & div:nth-of-type(2)[data-testid=description-card] {
    /* background-color: green; */
    transform: rotateZ(-4.5deg) translateY(-20px);
    padding: 10px 30px 10px 30px;
    color: white;
  }
`;

const StyledRemoveButton = styled.button`
  background-color: white;
  padding: 10px 30px 10px 30px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  color: #035e96;
`;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  remove: PropTypes.bool.isRequired,
  setDeck: PropTypes.func.isRequired,
  setHasTrunfo: PropTypes.func.isRequired,
};

export default Card;
