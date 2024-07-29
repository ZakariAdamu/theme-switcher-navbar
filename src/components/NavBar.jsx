import React from "react";
import "./NavBar.css";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/cans-logo.png";

const NavBar = ({ theme, setTheme }) => {
	const toggleMode = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	return (
		<div className="navbar">
			<img className="logo" src={logo} width="100" height={100} alt="" />
			<ul>
				<li>Home</li>
				<li>Products</li>
				<li>Features</li>
				<li>About</li>
			</ul>
			<div className="search-box">
				<input type="text" placeholder="search" />
				<BsSearch className="search-icon" />
			</div>
			<div
				className="toggle-icon"
				onClick={() => {
					toggleMode();
				}}
			>
				{theme === "light" ? (
					<IoMoonOutline />
				) : (
					<TiWeatherSunny className="sun-icon" />
				)}
			</div>
		</div>
	);
};

export default NavBar;
