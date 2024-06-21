import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ChangingNameContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  height: 91vh;
`;

const NameContainer = styled.div`
  margin-top: 15%;
`;

const Name = styled.h2`
  font-size: 120px;
  font-weight: 400;
  color: ${({ change }) => (change ? '#39ff14' : 'black')};
  transition: color 1.5s, font-family 1.5s, text-shadow 1.5s;
  text-shadow: ${({ change }) => (change ? '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14' : 'none')};
`;

const ChangingName = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setTimeout(() => setChange(true), 500);
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <ChangingNameContainer>
      <NameContainer>
        <Name
          change={change}
          onMouseEnter={handleMouseEnter}
        >
          Kevin Spiwak
        </Name>
      </NameContainer>
      {/* want to probably put a carousel here that showcases my socials so it transitions well into the next section */}
    </ChangingNameContainer>
  );
};

export default ChangingName;