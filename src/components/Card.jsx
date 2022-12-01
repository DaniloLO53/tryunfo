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
  } = props;

  return (
    <StyledCardContainer>
      <StyledCard>
        <div>
          <h3 data-testid="name-card">{cardName}</h3>
          <figure>
            <img src={cardImage} alt={cardName} data-testid="description-card" />
            <figcaption data-testid="rare-card">{cardRare}</figcaption>
          </figure>
        </div>
        <div data-testid="description-card">
          <p>{cardDescription}</p>
        </div>
        <div name="attributes">
          <div>
            <p>Attr1</p>
            <span data-testid="attr1-card">{cardAttr1}</span>
          </div>
          <div>
            <p>Attr2</p>
            <span data-testid="attr2-card">{cardAttr2}</span>
          </div>
          <div>
            <p>Attr3</p>
            <span data-testid="attr3-card">{cardAttr3}</span>
          </div>
          <div>
            <h3 data-testid="trunfo-card">{cardTrunfo ? 'Super Trunfo' : null}</h3>
          </div>
        </div>
      </StyledCard>
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
`;

const StyledCard = styled.div`
  background-color: #035e96;
  width: 50%;
  height: 70%;
  outline: 8px solid white;
  border-radius: 20px;

  & div[name=attributes] {
    background-color: red;
    /* clip-path: polygon(100% 0%, 100% 85%, 100% 50%, 0% 0%); */
    margin-top: 15px;
  }

  & div:first-of-type h3 {
    background-color: #012033;
    color: white;
    padding: 15px;
    text-align: end;
  }

  & div:first-of-type figure {
    width: 100%;
    /* background-color: red; */
  }

  & div:first-of-type figure img {
    width: 100%;
    clip-path: polygon(100% 0%, 100% 85%, 0% 100%, 0% 0%);
  }

  & div:nth-of-type(2)[data-testid=description-card] {
    background-color: green;
    transform: rotateZ(-4.5deg) translateY(-20px);
    padding: 10px;
  }
`;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
