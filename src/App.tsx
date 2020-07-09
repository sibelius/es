import React from 'react';
import styled from 'styled-components';

export const Divider = styled.div`
  border-left: 2px solid #eeeff2;
  width: 0px;
`;

const App = () => {
  return (
    <>
      <h1>Mi apodo en la web</h1>
      <span>
        <em>sibelius-es</em> es mi blog en español
      </span>
      <Divider />
      <h2>La Piel en El Juego</h2>
      <span>
        La piel en el juego es cuando te arriesgas a ganar la ventaja, pero
        también soy consciente de la desventaja.
      </span>
      <span>
        Cada vez que tiene más ventajas y desventajas (asimetría), causa
        problemas en la sociedad.
      </span>
      <span>
        Un buen ejemplo de mala asimetría es la política, donde el gobernante no
        siente el dolor de sus acciones.
      </span>
      <h3></h3>
    </>
  );
};

export default App;
