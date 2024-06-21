import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 3% 5% 0 5%;
`;

const LeftContainer = styled.div`
  width: 33%;
  font-family: Caveat;
  color: white;
  font-size: 30px;
`;

const MiddleContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 33%;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  height: 24px;
  width: 30px;
  span {
    display: block;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 5px;
    transition: all 0.8s ease;
    &:nth-child(1) {
      margin-bottom: 10px;
      transform: ${({ isOpen }) => isOpen ? 'rotate(405deg) translateY(10px)' : 'none'};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-405deg) translateY(-10px)' : 'none'};
    }
  }
`;

const Menu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 20px;
  background: #333;
  border-radius: 5px;
  overflow: hidden;
`;

const MenuItem = styled.a`
  display: block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;

  &:hover {
    background: #444;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <LeftContainer>
        Kevin Spiwak
      </LeftContainer>
      <MiddleContainer>
        <Hamburger onClick={toggleMenu} isOpen={isOpen}>
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuItem href="#about">About</MenuItem>
          <MenuItem href="#works">Works</MenuItem>
          <MenuItem href="#contact">Contact</MenuItem>
        </Menu>
      </MiddleContainer>
      <RightContainer>
        right sidee
      </RightContainer>
    </HeaderContainer>
  )
}

export default Header;
