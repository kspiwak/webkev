import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './mainContent/Header';
import BodaciousBody from './mainContent/Body';

const AppBackground = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index:-1;
`;

const Blob = styled.div`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 300px;
  aspect-ratio: 1;
  background: linear-gradient(
    to right,
    yellow,
    mediumpurple
  );
  border-radius: 50%;
  translate: -50% -50%;
  @keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.5;
    }

    to {
      rotate: 360deg;
    }
  }
  animation: rotate 20s infinite; 
`;

const Blur = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(200px);
`;

const MainContentSectionWrapper = styled.div`
  height: 400px;
  z-index: 5;
  display: flex;
  justify-content: center;
`;

const MainContentSection = styled.div`
  width: 100%;
`;

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
  
      // Find the blob element
      const blob = document.getElementById('blob');
  
      // Use the animate method to move the blob
      if (blob) {
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`
          },
          {
            duration: 4000, // Reduce duration for testing
            fill: "forwards"
          }
        );
      }
  
      setPosition({ x: clientX, y: clientY });
    };
  
    document.body.addEventListener('pointermove', handleMouseMove);
  
    return () => {
      document.body.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <AppBackground>
          <Blob id='blob' x={position.x} y={position.y} />
          <Blur />
      </AppBackground>
      <MainContentSectionWrapper>
        <MainContentSection>
          <Header />
          <BodaciousBody />
        </MainContentSection>
      </MainContentSectionWrapper>
    </>
  );
};

export default App;
