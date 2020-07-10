import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { PreferenciadeTiempo } from './blog/PreferenciadeTiempo';
import { HeroHeader } from './HeroHeader';

export const Divider = styled.div`
  border-left: 2px solid #eeeff2;
  width: 0px;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 50em;
  line-height: 1.5;
  ${media.lessThan('small')`
    margin: 0 20px;
  `}
`;

const App = () => {
  return (
    <>
      <HeroHeader />
      <Content>
        <PreferenciadeTiempo />
        <Divider />
      </Content>
    </>
  );
};

export default App;
