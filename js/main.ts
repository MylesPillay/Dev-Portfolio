function setWindowSize(): void {
	const vh: number = window.innerHeight * 0.01;
	const vw: number = window.innerWidth * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	document.documentElement.style.setProperty("--vw", `${vw}px`);
}

window.addEventListener("load", setWindowSize);
window.addEventListener("resize", setWindowSize);
