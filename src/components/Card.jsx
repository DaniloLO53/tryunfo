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
    <StyledCard>
      <div>
        <h3 data-testid="name-card">{cardName}</h3>
        <figure>
          <img src={cardImage} alt={cardName} data-testid="description-card" />
          <figcaption data-testid="rare-card">{cardRare}</figcaption>
        </figure>
      </div>
      <div data-testid="description-card">
        {cardDescription}
      </div>
      <div>
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
  );
}

const StyledCard = styled.div`
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
