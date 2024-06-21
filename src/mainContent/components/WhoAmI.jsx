import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 60vh;
  background: pink;
  margin-top: -0.2vh;
`;

const ParallaxSection = styled.div`
  height: 600px;
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentContainer = styled.div`
  padding: 50px;
  background: pink;
`;

const ContentSection = styled.div`
  text-align: center;
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-20%);
  transition: all 1s;

  &.show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  // @media (prefers-reduced-motion) {
  //   &.hidden {
  //     transition: none;
  //   }
  // }
`;

const WhoAmI = () => {
  const hiddenElementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    hiddenElementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      hiddenElementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Container>
      <ParallaxSection backgroundImage="url('https://www.fodors.com/wp-content/uploads/2020/11/01_IconicSigns__ElectricCity_dreamstime_xxl_159356035.jpg')" />
      <ContentContainer>
        <ContentSection ref={(el) => el && hiddenElementsRef.current.push(el)} className="hidden">
          <h1>Born and raised in Atlanta, Georgia</h1>
          <p>Land of the peaches, and the Chattahoochee river.</p>
        </ContentSection>
      </ContentContainer>
      <ParallaxSection backgroundImage="url('https://www.fodors.com/wp-content/uploads/2020/11/05_IconicSigns__TioPepe_shutterstock_1511878475.jpg')" />
      <ContentContainer>
        <ContentSection ref={(el) => el && hiddenElementsRef.current.push(el)} className="hidden">
          <h1>Another Static Section</h1>
          <p>This is another static content section.</p>
        </ContentSection>
      </ContentContainer>
      <ParallaxSection backgroundImage="url('https://www.fodors.com/wp-content/uploads/2020/11/10_IconicSigns__FarineFiveRoses_shutterstock_482212780.jpg')" />
    </Container>
  );
};

export default WhoAmI;
