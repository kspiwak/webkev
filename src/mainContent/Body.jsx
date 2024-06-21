import React from 'react';
import styled from 'styled-components';

import ChangingName from './components/ChangingName';
import WhoAmI from './components/WhoAmI';

const BodaciousBodyContainer = styled.div`
  width: 100%;
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;


const BodaciousBody = () => {
  return (
    <BodaciousBodyContainer>
      <ChangingName />
      <WhoAmI />
    </BodaciousBodyContainer>
  )
}

export default BodaciousBody;