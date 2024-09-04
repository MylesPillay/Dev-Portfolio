import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
	texts: string[]; // Array of texts to loop through
	interval?: number; // Duration between each text swap in milliseconds
	animationDuration: number; // Duration of the fade animation in milliseconds
	baseClassName?: string; // Base class for text styling
	containerClassName?: string; // Optional class for the container
	textContent?: string;
	colourFlip?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
	texts,
	interval,
	animationDuration,
	baseClassName,
	colourFlip,
	textContent
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		const textChangeInterval = setInterval(() => {
			setIsFading(true); // Start fade out

			setTimeout(
				() => {
					setCurrentIndex(
						(prevIndex) => (prevIndex + 1) % texts.length
					); // Change text after fade out
					setIsFading(false); // Fade in new text
				},
				colourFlip ? animationDuration + 1300 : animationDuration
			);
		}, interval);

		return () => clearInterval(textChangeInterval); // Cleanup interval on component unmount
	}, [interval, animationDuration, texts.length]);

	const textColorClass = (index: number) => {
		if (colourFlip) {
			// Reverse color if colourFlip is true
			return index % 2 === 0 ? "text-emerald-200" : "text-orangeflame";
		} else {
			// Default color based on index
			return index % 2 === 0 ? "text-orangeflame" : "text-emerald-200";
		}
	};

	return (
		<div
			className={`flex flex-wrap mx-auto flex-1  items-center text-wrap ${
				colourFlip ? "text-right " : "text-center"
			}`}>
			{/* Animated text with fade effect */}
			<span className='flex-1 justify-center items-center'>
				<span
					className={`flex-nowrap w-auto transition-opacity  ${
						isFading ? "opacity-0" : "opacity-100"
					} ${baseClassName}  ${textColorClass(currentIndex)}

					`}
					style={{
						transitionDuration: `${animationDuration}ms`
					}}>
					{texts[currentIndex]}
				</span>
				{textContent && (
					<span className=' text-white ml-2 flex-1 text-xl font-light '>
						{textContent}
					</span>
				)}
			</span>

			{/* Additional text content */}
		</div>
	);
};

export default AnimatedText;
