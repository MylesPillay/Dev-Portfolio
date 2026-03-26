import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  textArray: string[];
  interval?: number;
  animationDuration?: number;
  baseClassName?: string;
  flipColours?: boolean;
  textContent?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  textArray = [],
  interval = 3000,
  animationDuration = 500,
  baseClassName,
  flipColours = false,
  textContent,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setIsFading(true); // fade out

      setTimeout(
        () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setIsFading(false); // fade in
        },
        flipColours ? animationDuration + 1300 : animationDuration
      );
    }, interval);

    return () => clearInterval(textChangeInterval);
  }, [interval, animationDuration, textArray.length, flipColours]);

  const textColorClass = (index: number) => {
    if (flipColours) {
      return index % 2 === 0 ? 'text-emerald-200' : 'text-orangeflame';
    } else {
      return index % 2 === 0 ? 'text-orangeflame' : 'text-emerald-200';
    }
  };

  return (
    <div
      className={`mx-auto flex flex-1 flex-wrap items-center text-wrap ${
        flipColours ? 'text-right' : 'text-center'
      }`}
    >
      <span className="flex-1 items-center justify-center">
        <span
          className={`w-auto flex-nowrap text-nowrap transition-opacity ${
            isFading ? 'opacity-0' : 'opacity-100'
          } ${baseClassName} ${textColorClass(currentIndex)} `}
          style={{
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {textArray[currentIndex]}
        </span>
        {textContent && (
          <span className="ml-2 flex-1 text-xl font-light text-white">
            {textContent}
          </span>
        )}
      </span>
    </div>
  );
};

export default AnimatedText;
