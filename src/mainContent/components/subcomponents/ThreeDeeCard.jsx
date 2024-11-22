import React from 'react';
import styled, { keyframes } from 'styled-components';
import { pxToRem } from '../../../helpers/helper-functions';

const Screen = styled.div`
  width: ${pxToRem(400)};
  border: ${pxToRem(3)} solid #228BE6CC;
  aspect-ratio: 10 / 16;
  border-radius: 1rem;
  background-color: #208BE626;
  overflow: hidden;
  position: relative;
`;

const panOverlay = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 0% -100%;
  }
`;

const ScreenOverlay = styled.div`
  background: linear-gradient(
    #228be626,
    #228be626 ${pxToRem(3)},
    transparent ${pxToRem(3)},
    transparent ${pxToRem(9)}
  );
  background-size: 100% ${pxToRem(9)};
  background-repeat: repeat; /* Ensures the gradient repeats vertically */
  height: 100%;
  width: 100%;

  animation: ${panOverlay} 22s infinite linear;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`;

const panImage = keyframes`
  0% {
    background-position: 36% 42%;
    background-size: 300%;
  }
  
  20% {
    background-position: 30% 35%;
    background-size: 300%;
  }
  
  20.0001% { /* -- View 2 -- */
    background-position: 60% 85%;
    background-size: 500%;
  }
  
  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }
  
  40.0001% { /* -- View 3 -- */
    background-position: 80% 42%;
    background-size: 300%;
  }
  
  60% {
    background-position: 84% 33%;
    background-size: 300%;
  }
  
  60.0001% { /* -- View 4 -- */
    background-position: 0% 0%;
    background-size: 350%;
  }
  
  80% {
    background-position: 15% 4%;
    background-size: 350%;
  }
  
  80.0001% { /* -- View 5 -- */
    background-position: 80% 10%;
    background-size: 300%;
  }
  
  100% {
    background-position: 72% 14%;
    background-size: 300%;
  }
`;

const ScreenImage = styled.div`
  background-image: url('https://artfiles.alphacoders.com/874/thumb-1920-87472.jpg');
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 300%;
  background-position: center;
  filter: sepia(40%) hue-rotate(20deg);
  opacity: 0.6;
  animation: ${panImage} 15s linear infinite;
`;
ScreenImage.displayName = ScreenImage;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: absolute; /* Make it fill the parent */
  top: 1rem; /* Account for the margin */
  left: 1rem;
  right: 1rem;
  bottom: 1rem; /* Account for the bottom margin */
  gap: 4rem;
  padding-bottom: 6rem;
  border: 1px solid #228BE6CC;
  border-radius: 0.6rem;
  z-index: 3;
`;

const Text = styled.h2`
  color: white;
  font-size: 2rem;
`;

const ThreeDeeCard = () => {
  return (
    <Screen>
      <ScreenImage />
      <ScreenOverlay />
      <Content>
        <Text>Kevin Spiwak</Text>
      </Content>
    </Screen>
  );
};

export default ThreeDeeCard;