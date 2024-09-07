// components/LoadingSpinner.js
import React from "react";
import { ClipLoader } from "react-spinners"; // Example spinner

const LoadingSpinner = ({ size = 50 }) => (
	<div className='flex justify-center items-center w-full h-full'>
		<ClipLoader size={size} color={"#FFFFFF99"} />
	</div>
);

export default LoadingSpinner;
