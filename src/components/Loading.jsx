import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const Loading = () => {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Trail-loading.json')
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          setAnimationData(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  useEffect(() => {
    if (animationData && containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      });

      return () => {
        animation.destroy();
      };
    }
  }, [animationData]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center">
        <div 
          ref={containerRef} 
          className="w-32 h-32"
        />
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading</p>
      </div>
    </div>
  );
};

export default Loading;
