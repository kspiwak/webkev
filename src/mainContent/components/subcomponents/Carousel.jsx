import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  height: 500px;
  width: 100vw;
  background-color: transparent;
  margin: 0rem;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  gap: 4vmin;
  position: relative;
  top: 50%;
  transform: translate(0%, -55%);
  cursor: grab;
  transition: transform 0.2s ease-out;

  &.dragging {
    cursor: grabbing;
    transition: none;
  }

  img {
    width: 40vmin;
    height: 56vmin;
    object-fit: cover;
    object-position: 65% 100%;
    border-radius: 10px;
    transition: object-position 0.2s ease-out;
  }
`;

const Carousel = () => {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationFrameId = useRef(null); // For smoother animation
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [leftBound, setLeftBound] = useState(0);
  const scalingFactor = 2;

  useEffect(() => {
    const track = trackRef.current;
    const viewportWidth = window.innerWidth;

    const calculateBounds = () => {
      const trackWidth = track.scrollWidth;
      const halfViewport = viewportWidth / 2;
      const firstImageWidth = track.firstChild.offsetWidth;
      const lastImageWidth = track.lastChild.offsetWidth;

      const newLeftBound = halfViewport - firstImageWidth / 2;
      const rightBound = -trackWidth + halfViewport + lastImageWidth / 2;

      setLeftBound(newLeftBound);
      setMaxTranslate(Math.abs(rightBound));
      currentTranslate.current = newLeftBound;
      prevTranslate.current = newLeftBound;

      track.style.transform = `translate(${newLeftBound}px, -55%)`;
    };

    calculateBounds();
    window.addEventListener('resize', calculateBounds);

    return () => {
      window.removeEventListener('resize', calculateBounds);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    const handlePointerDown = (e) => {
      isDragging.current = true;
      startPosition.current = e.clientX;
      track.classList.add('dragging');
      prevTranslate.current = currentTranslate.current;

      // Prevent text selection during drag
      e.preventDefault();
    };

    const handlePointerMove = (e) => {
      if (!isDragging.current) return;

      const currentPosition = e.clientX;
      const movement = (currentPosition - startPosition.current) * scalingFactor;

      // Calculate new translation within bounds
      currentTranslate.current = Math.max(
        -maxTranslate,
        Math.min(prevTranslate.current + movement, leftBound)
      );

      // Smooth updates using requestAnimationFrame
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(() => {
          track.style.transform = `translate(${currentTranslate.current}px, -55%)`;

          // Apply parallax effect to each image
          const nextPercentage = (currentTranslate.current / maxTranslate) * 50;
          Array.from(track.children).forEach((img) => {
            img.style.objectPosition = `${50 + nextPercentage}% center`;
          });

          animationFrameId.current = null;
        });
      }
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      track.classList.remove('dragging');

      // Cancel any pending animation frame
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };

    // Add pointer event listeners
    track.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      track.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

      // Cleanup any remaining animation frame
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [maxTranslate, leftBound]);

  return (
    <CarouselContainer>
      <Track ref={trackRef} id="image-track" data-mouse-down-at="0">
        <img src="https://images.unsplash.com/photo-1731243736810-bea5f581a1ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="1" draggable="false" />
        <img src="https://images.unsplash.com/photo-1511945863317-d60e146e9016?q=80&w=2910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2" draggable="false" />
        <img src="https://images.unsplash.com/photo-1728382332631-94736587daeb?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="3" draggable="false" />
        <img src="https://images.unsplash.com/photo-1730816235622-508731ffe835?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="4" draggable="false" />
        <img src="https://images.unsplash.com/photo-1727163941315-1cc29bb49e54?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="5" draggable="false" />
        <img src="https://images.unsplash.com/photo-1730724620244-40d6e978acd8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="6" draggable="false" />
        <img src="https://images.unsplash.com/photo-1731008948824-ad26f0aeb243?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="7" draggable="false" />
        <img src="https://images.unsplash.com/photo-1730304538482-5fa524c79411?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="8" draggable="false" />
      </Track>
    </CarouselContainer>
  );
};

export default Carousel;
