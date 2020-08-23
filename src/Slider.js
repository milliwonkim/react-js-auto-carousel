import React, { useState, useEffect } from "react";
import "./slider.scss";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ImgComp from "./ImgComp";

function Slider() {
	let sliderArr = [
		<ImgComp src="https://source.unsplash.com/1600x900/?nature" />,
		<ImgComp src="https://source.unsplash.com/1600x900/?water" />,
		<ImgComp src="https://source.unsplash.com/1600x900/?night" />,
		<ImgComp src="https://source.unsplash.com/1600x900/?city" />,
		<ImgComp src="https://source.unsplash.com/1600x900/?music" />
	];
	const [x, setX] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("setInterval");
			if (x > -100 * (sliderArr.length - 1)) {
				setX((prevX) => prevX - 100);
			}

			if (x === -100 * (sliderArr.length - 1)) {
				setX(0);
			}
		}, 3000);

		return () => {
			console.log("clearInterval");
			clearInterval(interval);
		};
	}, [x]);

	const goLeft = () => {
		console.log("goLeft: ", x);
		x === 0
			? setX(-100 * (sliderArr.length - 1))
			: setX((prevX) => prevX + 100);
	};

	const goRight = () => {
		console.log("goRight: ", x);
		x === -100 * (sliderArr.length - 1)
			? setX(0)
			: setX((prevX) => prevX - 100);
	};

	return (
		<>
			<div className="slider">
				{sliderArr.map((item, index) => {
					return (
						<div
							key={index}
							className="slide"
							style={{ transform: `translateX(${x}%)` }}>
							{item}
						</div>
					);
				})}
				<BsArrowLeft id="goLeft" onClick={goLeft} />
				<BsArrowRight id="goRight" onClick={goRight} />
			</div>
		</>
	);
}

export default Slider;
