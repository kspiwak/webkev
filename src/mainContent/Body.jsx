import React from 'react';
import styled from 'styled-components';

import ChangingName from './components/ChangingName';
import WhoAmI from './components/WhoAmI';
import Footer from './components/Footer';

const BodaciousBodyContainer = styled.div`
  width: 100%;
  dispaly: flex;
  justify-content: center;
  align-items: center;
  font-family: "Jacquard 12", system-ui;
`;


const BodaciousBody = () => {
  return (
    <BodaciousBodyContainer>
      <ChangingName />
      <WhoAmI />
      <Footer />
    </BodaciousBodyContainer>
  )
}

export default BodaciousBody;