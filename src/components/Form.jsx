import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Form(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    // hasTrunfo,
    onInputChange,
    onSaveButtonClick,
    isSaveButtonDisabled,
  } = props;

  return (
    <StyledFormContainer>
      <div>
        <p>Adicionar nova carta</p>
        <label htmlFor="name-input">
          <p>Nome</p>
          <input
            id="name-input"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={cardName}
            onChange={onInputChange}
          />
        </label>

        <label htmlFor="description-input">
          <p>Descrição</p>
          <textarea
            id="description-input"
            type="textarea"
            data-testid="description-input"
            value={cardDescription}
            name="cardDescription"
            onChange={onInputChange}
          />
        </label>

        <div>
          <label htmlFor="attr1-input">
            <p>Atributo 1</p>
            <input
              id="attr1-input"
              type="number"
              data-testid="attr1-input"
              value={cardAttr1}
              name="cardAttr1"
              onChange={onInputChange}
            />
          </label>

          <label htmlFor="attr2-input">
            <p>Atributo 2</p>
            <input
              id="attr2-input"
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              value={cardAttr2}
              onChange={onInputChange}
            />
          </label>

          <label htmlFor="image-input">
            <p>Atributo 3</p>
            <input
              id="attr3-input"
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              value={cardAttr3}
              onChange={onInputChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="image-input">
            <p>Imagem</p>
            <input
              id="image-input"
              type="text"
              data-testid="image-input"
              name="cardImage"
              value={cardImage}
              onChange={onInputChange}
            />
          </label>
        </div>

        <label htmlFor="rare-input">
          <p>Raridade</p>
          <select
            id="rare-input"
            type="text"
            data-testid="rare-input"
            value={cardRare}
            name="cardRare"
            onChange={onInputChange}
          >
            <option>Normal</option>
            <option>Raro</option>
            <option>Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          <input
            id="trunfo-input"
            type="checkbox"
            data-testid="trunfo-input"
            checked={cardTrunfo}
            name="cardTrunfo"
            onChange={onInputChange}
          />
          <p>Super Trunfo</p>
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={isSaveButtonDisabled}
          onClick={onSaveButtonClick}
        >
          <p>Salvar</p>
        </button>
      </div>
    </StyledFormContainer>
  );
}

const StyledFormContainer = styled.div`
  /* background-color: red; */
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Epilogue', sans-serif;

  p {
    font-weight: 700;
    color: #444955;
  }

  div:first-child > label:last-of-type {
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  div:first-child > label:last-of-type input {
    width: 10%;
  }

  div:first-child > label:last-of-type p {
    margin: 10px;
    /* background-color: green; */
    width: 90%;
  }

  div:first-child > label:nth-last-of-type(2) p {
    margin-bottom: 10px;
  }

  div:first-child > label:nth-last-of-type(2) select {
    background-color: transparent;
  }
  
  div:first-child > label {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
  }

  div:first-child > label input,
  div:first-child > label textarea,
  div:first-child > label select {
    border: none;
    border-bottom: 1px solid black;
    width: 90%;
    /* background-color: blue; */

  }

  div:first-child {
    /* background-color: green; */
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;
    }
    
  }

  div:first-child div label {
      /* background-color: yellow; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 10px;

      input {
        width: 70%;
      }
    }
  
  button {
    width: 200px;
    padding: 10px 20px 10px 20px;
    color: white;
  }
`;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
