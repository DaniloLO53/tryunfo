import React from 'react';
import styled from 'styled-components';
// import propTypes from 'prop-types';

function Form() {
  return (
    <StyledFormContainer>
      <label htmlFor="name-input">
        Nome:
        <input
          id="name-input"
          type="text"
          data-testid="name-input"
        />
      </label>

      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          type="text"
          data-testid="description-input"
        />
      </label>

      <div>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input
            id="attr1-input"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Atributo 2:
          <input
            id="attr2-input"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="image-input">
          Atributo 3:
          <input
            id="attr3-input"
            type="number"
            data-testid="attr3-input"
          />
        </label>
      </div>

      <label htmlFor="image-input">
        Imagem:
        <input
          id="image-input"
          type="text"
          data-testid="image-input"
        />
      </label>

      <label htmlFor="rare-input">
        rarem:
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
        Super Trunfo:
        <input
          id="trunfo-input"
          type="checkbox"
          data-testid="trunfo-input"
        />
      </label>

      <button
        type="button"
        data-testid="save-button"
      >
        Salvar
      </button>

    </StyledFormContainer>
  );
}

const StyledFormContainer = styled.div`
  /* background-color: red; */
`;

export default Form;
