import React from 'react';
import styled from 'styled-components';
// import propTypes from 'prop-types';

function Form() {
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
          />
        </label>

        <label htmlFor="description-input">
          <p>Descrição</p>
          <textarea
            id="description-input"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <div>
          <label htmlFor="attr1-input">
            <p>Atributo 1</p>
            <input
              id="attr1-input"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2-input">
            <p>Atributo 2</p>
            <input
              id="attr2-input"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="image-input">
            <p>Atributo 3</p>
            <input
              id="attr3-input"
              type="number"
              data-testid="attr3-input"
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
            />
          </label>
        </div>

        <label htmlFor="rare-input">
          <p>Raridade</p>
          <select
            id="rare-input"
            type="text"
            data-testid="rare-input"
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
          />
          <p>Super Trunfo</p>
        </label>

        <button
          type="button"
          data-testid="save-button"
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

export default Form;
